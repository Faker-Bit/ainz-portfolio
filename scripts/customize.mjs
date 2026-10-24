import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const configPath = path.join(ROOT, "portfolio.config.json");
const cfg = JSON.parse(fs.readFileSync(configPath, "utf8"));

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const customDir = path.join(ROOT, "github-profile", "folio", "custom");
fs.mkdirSync(customDir, { recursive: true });

function writeSvgPair(baseName, renderFn) {
  fs.writeFileSync(path.join(customDir, `${baseName}-dark.svg`), renderFn(true), "utf8");
  fs.writeFileSync(path.join(customDir, `${baseName}-light.svg`), renderFn(false), "utf8");
}

// 1. Wordmark SVG
writeSvgPair("wordmark", (dark) => {
  const ink = dark ? "#ebe6db" : "#18181b";
  const sub = dark ? "#8b949e" : "#57606a";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 96" width="360" height="96">
  <text x="180" y="54" fill="${ink}" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="34" letter-spacing="8" text-anchor="middle">${esc(cfg.identity.name)}</text>
  <text x="180" y="80" fill="${sub}" font-family="ui-monospace, monospace" font-size="11" letter-spacing="2.5" text-anchor="middle">${esc(cfg.identity.subtitle)}</text>
</svg>`;
});

// 2. Bio Card SVG
writeSvgPair("bio", (dark) => {
  const bg = dark ? "#0f1217" : "#f8fafc";
  const border = dark ? "#262b33" : "#d0d7de";
  const ink = dark ? "#c9d1d9" : "#24292f";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 744 84" width="744" height="84">
  <rect x="1" y="1" width="742" height="82" rx="6" fill="${bg}" stroke="${border}" stroke-width="1.2"/>
  <text x="372" y="36" fill="${ink}" font-family="system-ui, -apple-system, sans-serif" font-size="13.5" text-anchor="middle">${esc(cfg.bio[0] || "")}</text>
  <text x="372" y="58" fill="${ink}" font-family="system-ui, -apple-system, sans-serif" font-size="13.5" text-anchor="middle">${esc(cfg.bio[1] || "")}</text>
</svg>`;
});

// 3. Project Cards SVG
(cfg.featuredProjects || []).forEach((p, idx) => {
  const slug = p.repo.toLowerCase().replace(/[^a-z0-9-]/g, "-");
  writeSvgPair(`project-${slug}`, (dark) => {
    const bg = dark ? "#0d1015" : "#ffffff";
    const headBg = dark ? "#151921" : "#f6f8fa";
    const border = dark ? "#282e37" : "#d0d7de";
    const ink = dark ? "#ebe6db" : "#1f2328";
    const dim = dark ? "#8b949e" : "#57606a";
    const accent = dark ? "#d4c5a9" : "#0969da";
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 164" width="248" height="164">
  <rect x="1" y="1" width="246" height="162" rx="6" fill="${bg}" stroke="${border}" stroke-width="1.2"/>
  <rect x="1" y="1" width="246" height="28" rx="6" fill="${headBg}"/>
  <circle cx="15" cy="15" r="3.5" fill="${border}"/>
  <circle cx="27" cy="15" r="3.5" fill="${border}"/>
  <text x="42" y="19" fill="${dim}" font-family="ui-monospace, monospace" font-size="10">${esc(p.language || "Code")}</text>
  <text x="234" y="19" fill="${accent}" font-family="ui-monospace, monospace" font-size="10.5" text-anchor="end">★ ${esc(p.stars)}</text>
  <text x="16" y="58" fill="${ink}" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="15">${esc(p.title || p.repo)}</text>
  <text x="16" y="80" fill="${dim}" font-family="ui-monospace, monospace" font-size="10.5">${esc((p.subtitle || "").slice(0, 32))}</text>
  <text x="16" y="106" fill="${dim}" font-family="system-ui, -apple-system, sans-serif" font-size="11.5">${esc((p.description || "").slice(0, 34))}...</text>
  <text x="16" y="144" fill="${accent}" font-family="ui-monospace, monospace" font-size="10">${esc(cfg.identity.handle)}/${esc(p.repo)} →</text>
</svg>`;
  });
});

// 4. Total Stars Badge SVG
writeSvgPair("total-stars", (dark) => {
  const bg = dark ? "#0f1217" : "#f6f8fa";
  const border = dark ? "#282e37" : "#d0d7de";
  const ink = dark ? "#ebe6db" : "#1f2328";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 44" width="248" height="44">
  <rect x="1" y="1" width="246" height="42" rx="6" fill="${bg}" stroke="${border}" stroke-width="1.2"/>
  <text x="124" y="26" fill="${ink}" font-family="ui-monospace, monospace" font-size="11.5" text-anchor="middle">★ ${Number(cfg.stats.totalStars || 0).toLocaleString()} TOTAL PROJECT STARS</text>
</svg>`;
});

// 5. Generate github-profile/README.custom.md
const projectPictures = (cfg.featuredProjects || [])
  .map((p) => {
    const slug = p.repo.toLowerCase().replace(/[^a-z0-9-]/g, "-");
    return `<a href="${p.url}"><picture><source media="(prefers-color-scheme: dark)" srcset="./folio/custom/project-${slug}-dark.svg" /><img src="./folio/custom/project-${slug}-light.svg" alt="${esc(p.title || p.repo)}" width="248" height="164" align="top" /></picture></a>`;
  })
  .join(" ");

const customReadme = `<!-- Generated from portfolio.config.json by scripts/customize.mjs -->
<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./folio/custom/wordmark-dark.svg" />
    <img src="./folio/custom/wordmark-light.svg" alt="${esc(cfg.identity.name)}" width="360" height="96" />
  </picture>
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./folio/custom/bio-dark.svg" />
    <img src="./folio/custom/bio-light.svg" alt="${esc(cfg.bio.join(" "))}" width="744" height="84" />
  </picture>
</p>

<p align="center">
  ${projectPictures}
</p>

<p align="center">
  <a href="https://github.com/${esc(cfg.identity.handle)}?tab=repositories">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./folio/custom/total-stars-dark.svg" />
      <img src="./folio/custom/total-stars-light.svg" alt="Total stars: ${cfg.stats.totalStars}" width="248" height="44" />
    </picture>
  </a>
</p>
`;

fs.writeFileSync(path.join(ROOT, "github-profile", "README.custom.md"), customReadme, "utf8");
console.log("✓ Generated custom dark/light SVG cards in github-profile/folio/custom/");
console.log("✓ Generated github-profile/README.custom.md from portfolio.config.json");
