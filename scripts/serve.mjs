import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PORT = Number(process.env.PORT) || 3000;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".vtt": "text/vtt; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ttf": "font/ttf",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
};

const server = http.createServer((req, res) => {
  const rawUrl = req.url || "/";
  const [pathname, query] = rawUrl.split("?");
  const urlPath = decodeURIComponent(pathname);

  if (urlPath === "/api/seen") {
    if (req.method === "POST") {
      res.writeHead(204);
      res.end();
      return;
    }
    const seenPath = path.join(ROOT, "api", "seen.json");
    if (fs.existsSync(seenPath)) {
      const stat = fs.statSync(seenPath);
      res.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8",
        "Content-Length": stat.size,
      });
      fs.createReadStream(seenPath).pipe(res);
      return;
    }
  }

  let filePath = path.join(ROOT, urlPath);
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    if (!pathname.endsWith("/")) {
      res.writeHead(301, { Location: `${pathname}/${query ? `?${query}` : ""}` });
      res.end();
      return;
    }
    filePath = path.join(filePath, "index.html");
  }

  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(`404 Not Found: ${urlPath}`);
    return;
  }

  const stat = fs.statSync(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME[ext] || "application/octet-stream";
  const range = req.headers.range;

  if (range) {
    const match = /bytes=(\d*)-(\d*)/.exec(range);
    if (match) {
      const start = match[1] ? parseInt(match[1], 10) : 0;
      const end = match[2] ? parseInt(match[2], 10) : stat.size - 1;
      if (start >= 0 && start <= end && end < stat.size) {
        res.writeHead(206, {
          "Content-Range": `bytes ${start}-${end}/${stat.size}`,
          "Accept-Ranges": "bytes",
          "Content-Length": end - start + 1,
          "Content-Type": contentType,
        });
        fs.createReadStream(filePath, { start, end }).pipe(res);
        return;
      }
    }
  }

  res.writeHead(200, {
    "Content-Type": contentType,
    "Content-Length": stat.size,
    "Accept-Ranges": "bytes",
    "Cache-Control": "no-cache",
  });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, () => {
  console.log(`\n  ╭──────────────────────────────────────────────────────────╮`);
  console.log(`  │  hancore.dev + GitHub Profile Replica Server Running     │`);
  console.log(`  ├──────────────────────────────────────────────────────────┤`);
  console.log(`  │  • Intro (Code Wall)  →  http://localhost:${PORT}/          │`);
  console.log(`  │  • Neovim Portfolio   →  http://localhost:${PORT}/site/     │`);
  console.log(`  │  • GitHub Profile UI  →  http://localhost:${PORT}/github/   │`);
  console.log(`  ╰──────────────────────────────────────────────────────────╯\n`);
});
