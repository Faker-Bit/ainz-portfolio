import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const gp = path.join(root, "github-profile");
const ghOut = path.join(root, "github");
const anzarFolio = path.join(gp, "folio", "anzar");
fs.mkdirSync(ghOut, { recursive: true });
fs.mkdirSync(anzarFolio, { recursive: true });

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function writePair(name, fn) {
  fs.writeFileSync(path.join(anzarFolio, `${name}-dark.svg`), fn(true), "utf8");
  fs.writeFileSync(path.join(anzarFolio, `${name}-light.svg`), fn(false), "utf8");
}

// 1. Wordmark (ANZAR)
writePair("wordmark", (dark) => {
  const ink = dark ? "#ebe6db" : "#141413";
  const dim = dark ? "#8b949e" : "#57606a";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 88" width="260" height="88">
  <g transform="translate(108, 6) scale(0.5)" fill="${ink}">
    <path d="M0 12L12 0H16V32H29L38 23V43L33 48H16V80H0Z"/>
    <path d="M50 0H88V16H57L50 23V57L57 64H88L72 80H50L34 64V16Z"/>
  </g>
  <text x="130" y="70" fill="${ink}" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-weight="700" font-size="22" letter-spacing="6" text-anchor="middle">ANZAR</text>
  <text x="130" y="85" fill="${dim}" font-family="ui-monospace, SFMono-Regular, monospace" font-size="9.5" letter-spacing="2" text-anchor="middle">anzar.dev · Faker-Bit</text>
</svg>`;
});

// 2. Bio Card (744x76)
writePair("bio-wide", (dark) => {
  const bg = dark ? "#0c0e12" : "#f6f8fa";
  const line = dark ? "#262b33" : "#d0d7de";
  const ink = dark ? "#d8d5cd" : "#1f2328";
  const dim = dark ? "#8b949e" : "#57606a";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 744 76" width="744" height="76">
  <rect x="0.5" y="0.5" width="743" height="75" rx="6" fill="${bg}" stroke="${line}"/>
  <text x="372" y="32" fill="${ink}" font-family="system-ui, -apple-system, sans-serif" font-size="13.5" text-anchor="middle">Full-stack engineer, AI systems builder, and BugBounty hunter.</text>
  <text x="372" y="54" fill="${dim}" font-family="ui-monospace, SFMono-Regular, monospace" font-size="11.5" text-anchor="middle">Building autonomous AI agents, verified discovery platforms, and WebGL interfaces.</text>
</svg>`;
});

// 3. Subtitle label
writePair("label-subtitle", (dark) => {
  const ink = dark ? "#9198a1" : "#57606a";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 28" width="280" height="28">
  <text x="140" y="19" fill="${ink}" font-family="ui-monospace, SFMono-Regular, monospace" font-size="11" letter-spacing="1.8" text-anchor="middle">AI AGENTS · SECURITY · WEB3</text>
</svg>`;
});

// 4. Connected Tall Project Cards (248x358) for Top 3 Repos + Wide Info Cards (372x108)
const topCards = [
  {
    slug: "agent-pilot",
    title: "Agent Pilot",
    repo: "ai-agent-learning",
    sub: "AI Coding Agents Platform",
    lang: "Python · FastAPI · React 19",
    accent: "#38bdf8",
    stats: "102 files · 28 agents",
    bullets: [
      "▸ opencode, Codex, Claude, Gemini",
      "▸ 6-stage agent loop & 7 harnesses",
      "▸ SKILL.md + MCP / ACP / LSP",
      "▸ OWASP LLM Top 10 security lab",
      "▸ 9 animated CLI walkthroughs",
      "▸ 130+ verified agent commands",
    ],
  },
  {
    slug: "zexr",
    title: "ZEXR Deal Hub",
    repo: "ZEXR",
    sub: "zexr-black.vercel.app",
    lang: "Next.js 16 · FastAPI · Celery",
    accent: "#a855f7",
    stats: "254 files · Live App",
    bullets: [
      "▸ Global verified trials & credits",
      "▸ Celery + Redis auto-verifier",
      "▸ Country & currency aware UI",
      "▸ SQLAlchemy 2.1 + Alembic + PG",
      "▸ Strict source provenance checks",
      "▸ Live on Vercel",
    ],
  },
  {
    slug: "nexus-ai",
    title: "Nexus AI",
    repo: "nexus-ai",
    sub: "Multi-Provider AI & Agent",
    lang: "Python · FastAPI · React 19",
    accent: "#10b981",
    stats: "109 files · SSE Stream",
    bullets: [
      "▸ OpenAI, Grok, Gemini, Claude",
      "▸ Ollama / LM Studio / vLLM local",
      "▸ Tavily → Brave → DDG web search",
      "▸ Multi-query cited research mode",
      "▸ Permission-gated Python agent",
      "▸ PDF/CSV/code Q&A + SQLite mem",
    ],
  },
];

topCards.forEach((c) => {
  writePair(`connected-${c.slug}`, (dark) => {
    const bg = dark ? "#0c0e12" : "#ffffff";
    const termBg = dark ? "#07080b" : "#f6f8fa";
    const headBg = dark ? "#131720" : "#eaeef2";
    const line = dark ? "#262b33" : "#d0d7de";
    const ink = dark ? "#ebe6db" : "#1f2328";
    const dim = dark ? "#8b949e" : "#57606a";
    const rows = c.bullets
      .map(
        (b, i) =>
          `<text x="22" y="${124 + i * 24}" fill="${dark ? "#c9d1d9" : "#24292f"}" font-family="ui-monospace, SFMono-Regular, monospace" font-size="10.5">${esc(b)}</text>`,
      )
      .join("\n");
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 358" width="248" height="358">
  <line x1="124" y1="0" x2="124" y2="24" stroke="${line}" stroke-width="1.5"/>
  <circle cx="124" cy="24" r="3" fill="${c.accent}"/>
  <rect x="4" y="24" width="240" height="328" rx="8" fill="${bg}" stroke="${line}" stroke-width="1.2"/>
  <rect x="14" y="36" width="220" height="236" rx="6" fill="${termBg}" stroke="${line}" stroke-width="1"/>
  <rect x="14" y="36" width="220" height="26" rx="6" fill="${headBg}"/>
  <circle cx="26" cy="49" r="3.5" fill="#ff5f56"/>
  <circle cx="37" cy="49" r="3.5" fill="#ffbd2e"/>
  <circle cx="48" cy="49" r="3.5" fill="#27c93f"/>
  <text x="224" y="53" fill="${c.accent}" font-family="ui-monospace, monospace" font-size="9.5" text-anchor="end">${esc(c.stats)}</text>
  <text x="22" y="88" fill="${ink}" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="14">${esc(c.repo)}</text>
  ${rows}
  <text x="16" y="298" fill="${ink}" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="15">${esc(c.title)}</text>
  <text x="16" y="317" fill="${dim}" font-family="system-ui, -apple-system, sans-serif" font-size="12">${esc(c.sub)}</text>
  <text x="16" y="337" fill="${c.accent}" font-family="ui-monospace, monospace" font-size="10.5">${esc(c.lang)}</text>
</svg>`;
  });
});

// 5. Wide connected cards (372x108) for NEXUS Web3 Marketplace & Faker-Bit Portfolio
const wideCards = [
  {
    slug: "nexus-web3",
    title: "NEXUS — Web3 & WebGL Marketplace",
    sub: "Next.js · TypeScript · WebGL · Prisma · 264 files",
    note: "github.com/Faker-Bit/nexus →",
    accent: "#00ff9d",
  },
  {
    slug: "anzar-dev",
    title: "anzar.dev — Interactive Neovim Portfolio",
    sub: "Code Wall Intro · 3D Wheel · 28 Themes · ASCII Eye",
    note: "Open ~/Projects in Editor →",
    accent: "#ebe6db",
  },
];

wideCards.forEach((c) => {
  writePair(`connected-wide-${c.slug}`, (dark) => {
    const bg = dark ? "#0c0e12" : "#f6f8fa";
    const line = dark ? "#262b33" : "#d0d7de";
    const ink = dark ? "#ebe6db" : "#1f2328";
    const dim = dark ? "#8b949e" : "#57606a";
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 108" width="372" height="108">
  <line x1="186" y1="0" x2="186" y2="18" stroke="${line}" stroke-width="1.5"/>
  <rect x="4" y="18" width="364" height="86" rx="7" fill="${bg}" stroke="${line}" stroke-width="1.2"/>
  <text x="20" y="46" fill="${ink}" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="14.5">${esc(c.title)}</text>
  <text x="20" y="68" fill="${dim}" font-family="ui-monospace, monospace" font-size="11">${esc(c.sub)}</text>
  <text x="20" y="89" fill="${dark ? c.accent : "#0969da"}" font-family="ui-monospace, monospace" font-size="11">${esc(c.note)}</text>
</svg>`;
  });
});

// 6. Generate Faker-Bit README.md in github-profile/README.md
const anzarReadme = `<!-- Generated for Faker-Bit (anzar.dev) in HANCORE connected folio architecture -->
<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./folio/anzar/wordmark-dark.svg" />
    <img src="./folio/anzar/wordmark-light.svg" alt="ANZAR" width="260" height="88" />
  </picture>
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./folio/anzar/bio-wide-dark.svg" />
    <img src="./folio/anzar/bio-wide-light.svg" alt="Full-stack engineer, AI systems builder, and BugBounty hunter." width="744" height="76" />
  </picture>
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./folio/anzar/label-subtitle-dark.svg" />
    <img src="./folio/anzar/label-subtitle-light.svg" alt="AI AGENTS · SECURITY · WEB3" width="280" height="28" />
  </picture>
</p>

<p align="center">
  <a href="https://github.com/Faker-Bit/ai-agent-learning"><picture><source media="(prefers-color-scheme: dark)" srcset="./folio/anzar/connected-agent-pilot-dark.svg" /><img src="./folio/anzar/connected-agent-pilot-light.svg" alt="Agent Pilot (ai-agent-learning)" width="248" height="358" align="top" /></picture></a><a href="https://github.com/Faker-Bit/ZEXR"><picture><source media="(prefers-color-scheme: dark)" srcset="./folio/anzar/connected-zexr-dark.svg" /><img src="./folio/anzar/connected-zexr-light.svg" alt="ZEXR Deal Hub" width="248" height="358" align="top" /></picture></a><a href="https://github.com/Faker-Bit/nexus-ai"><picture><source media="(prefers-color-scheme: dark)" srcset="./folio/anzar/connected-nexus-ai-dark.svg" /><img src="./folio/anzar/connected-nexus-ai-light.svg" alt="Nexus AI" width="248" height="358" align="top" /></picture></a><br />
  <a href="https://github.com/Faker-Bit/nexus"><picture><source media="(prefers-color-scheme: dark)" srcset="./folio/anzar/connected-wide-nexus-web3-dark.svg" /><img src="./folio/anzar/connected-wide-nexus-web3-light.svg" alt="NEXUS Web3 Marketplace" width="372" height="108" align="top" /></picture></a><a href="/site/"><picture><source media="(prefers-color-scheme: dark)" srcset="./folio/anzar/connected-wide-anzar-dev-dark.svg" /><img src="./folio/anzar/connected-wide-anzar-dev-light.svg" alt="anzar.dev Neovim Portfolio" width="372" height="108" align="top" /></picture></a>
</p>
`;

fs.writeFileSync(path.join(gp, "README.md"), anzarReadme, "utf8");

// 7. Build /github/index.html for Anzar (Faker-Bit)
const webReadme = anzarReadme.replace(/\.\/folio\//g, "/github-profile/folio/");

const anzarPins = [
  { repo: "ai-agent-learning", description: "Agent Pilot — Learn to drive AI coding agents with animated terminal walkthroughs & 130+ commands.", language: "Python", color: "#3572A5" },
  { repo: "ZEXR", description: "Global, continuously verified catalogue of free trials, discounts, free credits and free tools.", language: "Python", color: "#3572A5" },
  { repo: "nexus-ai", description: "Production-minded multi-provider AI assistant with live SSE streaming, web search & agent mode.", language: "Python", color: "#3572A5" },
  { repo: "nexus", description: "Premium Web3 marketplace for AI agents, bots, apps, templates & datasets with WebGL storefront.", language: "TypeScript", color: "#3178c6" },
];

const pinCards = anzarPins
  .map((pin) => {
    const lang = pin.language ? `<span class="language"><i style="background:${pin.color}"></i>${pin.language}</span>` : "";
    return `<li><a href="https://github.com/Faker-Bit/${pin.repo}" target="_blank">${pin.repo}</a><p>${pin.description}</p>${lang}</li>`;
  })
  .join("");

const pinsSection = `<section class="folio-pins" aria-label="Pinned repositories"><h2>Pinned <small>github.com/Faker-Bit</small></h2><ul>${pinCards}</ul></section>`;

const pageHtml = `<!doctype html>
<html lang="en" data-theme="dark" data-view="profile">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Anzar (Faker-Bit) · GitHub Profile Folio</title>
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <script src="/github-profile/folio/base-preview.js"></script>
  <link rel="stylesheet" href="/github-profile/folio/github-markdown.min.css">
  <link rel="stylesheet" href="/github/github-markdown-themes.css">
  <link rel="stylesheet" href="/github-profile/folio/base-preview.css">
  <link rel="stylesheet" href="/github-profile/folio/preview.css">
  <script defer>
  (() => {
    function sync() {
      const dark = document.documentElement.dataset.theme === "dark";
      document.querySelectorAll("article source[media]").forEach(source => {
        if (!source.dataset.originalMedia) source.dataset.originalMedia = source.media;
        source.media = source.dataset.originalMedia.replace(/\\(prefers-color-scheme:\\s*(dark|light)\\)/g,
          (_, mode) => (mode === (dark ? "dark" : "light") ? "(min-width: 0px)" : "(max-width: 0px)"));
      });
    }
    new MutationObserver(sync).observe(document.documentElement, {attributes:true, attributeFilter:["data-theme","data-view"]});
    document.addEventListener("DOMContentLoaded", sync);
    sync();
  })();
  </script>
</head>
<body>
  <header class="preview-toolbar">
    <div><strong>Faker-Bit / GitHub Profile Folio</strong><small>anzar.dev &amp; github.com/Faker-Bit</small></div>
    <div class="preview-controls">
      <label for="preview-view">View</label>
      <select id="preview-view"><option value="profile">Profile frame</option><option value="readme">README only</option></select>
      <label for="preview-theme">Theme</label>
      <select id="preview-theme"><option value="dark">Dark</option><option value="light">Light</option><option value="auto">System</option></select>
    </div>
  </header>
  <nav class="preview-tabs" aria-label="Navigation">
    <a href="/github/" aria-current="page">Faker-Bit / README.md</a>
    <a href="/site/">~/Projects (Neovim Editor)</a>
    <a href="/site/#themes">All 28 Themes</a>
    <a href="/">← Intro (anzar.dev Code Wall)</a>
  </nav>
  <div class="profile-layout">
    <aside class="profile-sidebar" aria-label="Profile">
      <img class="profile-avatar" src="https://avatars.githubusercontent.com/u/80408599?v=4" width="256" height="256" alt="Faker-Bit GitHub avatar">
      <strong class="profile-name">Anzar</strong><span class="profile-handle">Faker-Bit</span>
      <p class="profile-bio">BugBounty Hunting · AI Agents &amp; Full-Stack Systems.<br>India</p>
      <a class="profile-link" href="/site/" style="margin-bottom:8px;">Open anzar.dev/site/</a>
      <a class="profile-link" href="https://zexr-black.vercel.app" target="_blank" style="margin-bottom:8px;">ZEXR Live App ↗</a>
      <a class="profile-link" href="https://github.com/Faker-Bit" target="_blank">View on GitHub ↗</a>
    </aside>
    <div class="profile-column">
      <main id="main-content" class="profile-frame">
        <div class="profile-label">Faker-Bit / README.md</div>
        <article class="markdown-body" data-theme="dark">
          ${webReadme}
        </article>
      </main>
      ${pinsSection}
    </div>
  </div>
</body>
</html>`;

fs.writeFileSync(path.join(ghOut, "index.html"), pageHtml, "utf8");
console.log("✓ Generated Anzar (Faker-Bit) GitHub Profile Folio in /github/ and github-profile/README.md");
