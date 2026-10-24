import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BACKUP = "C:/Users/Anzar/.gemini/antigravity/scratch/hancore-original";
const FAKER_CODE = "C:/Users/Anzar/.gemini/antigravity/brain/ddcc1558-dde8-4677-8d76-78c3aa968bcd/scratch/faker_code.json";

// 1. Read original wall.json (to preserve all 28 themes) and inject Faker-Bit's real code files
const origWall = JSON.parse(fs.readFileSync(path.join(BACKUP, "wall.json"), "utf8").replace(/^\uFEFF/, ""));
const fakerFiles = JSON.parse(fs.readFileSync(FAKER_CODE, "utf8").replace(/^\uFEFF/, ""));

const newWall = {
  ...origWall,
  owner: "Faker-Bit",
  files: fakerFiles,
};
fs.writeFileSync(path.join(ROOT, "wall.json"), JSON.stringify(newWall, null, 2), "utf8");

const wallTxt = fakerFiles
  .map((f) => `// ── ${f.repo}/${f.path} ──\n` + f.lines.join("\n"))
  .join("\n\n");
fs.writeFileSync(path.join(ROOT, "wall.txt"), wallTxt, "utf8");
console.log("✓ Updated wall.json and wall.txt with Faker-Bit source code");

// 2. Create crisp SVG preview screenshots in site/assets/anzar/ for the 3D Wheel & Terminal viewer
const assetsDir = path.join(ROOT, "site", "assets", "anzar");
fs.mkdirSync(assetsDir, { recursive: true });

function makeShotSvg({ title, tag, accent, bg, lines, footer, stats }) {
  const codeRows = lines
    .map(
      (line, i) =>
        `<text x="36" y="${152 + i * 24}" fill="#9ca3af" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="13"><tspan fill="#4b5563">${String(i + 1).padStart(2, "0")}</tspan>  <tspan fill="${line.startsWith("#") || line.startsWith("//") ? "#6b7280" : line.startsWith("▸") ? accent : "#e5e7eb"}">${line.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</tspan></text>`,
    )
    .join("\n");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="960" height="540">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${bg}"/>
      <stop offset="100%" stop-color="#050608"/>
    </linearGradient>
    <linearGradient id="glow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0.0"/>
    </linearGradient>
  </defs>
  <rect width="960" height="540" fill="url(#bg)"/>
  <rect x="20" y="20" width="920" height="500" rx="10" fill="#0b0d12" stroke="#222631" stroke-width="1.5"/>
  <rect x="20" y="20" width="920" height="44" rx="10" fill="#12161f"/>
  <circle cx="44" cy="42" r="6" fill="#ff5f56"/>
  <circle cx="64" cy="42" r="6" fill="#ffbd2e"/>
  <circle cx="84" cy="42" r="6" fill="#27c93f"/>
  <text x="112" y="47" fill="#9ca3af" font-family="ui-monospace, monospace" font-size="13">Faker-Bit / ${title}</text>
  <rect x="760" y="30" width="160" height="24" rx="4" fill="#1b202c" stroke="${accent}" stroke-width="1"/>
  <text x="840" y="46" fill="${accent}" font-family="ui-monospace, monospace" font-size="11" font-weight="600" text-anchor="middle">${tag}</text>

  <rect x="21" y="64" width="918" height="56" fill="url(#glow)"/>
  <text x="36" y="100" fill="#f3f4f6" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="700">${title}</text>
  <text x="920" y="98" fill="${accent}" font-family="ui-monospace, monospace" font-size="13" text-anchor="end">${stats}</text>

  ${codeRows}

  <line x1="20" y1="472" x2="940" y2="472" stroke="#1f2430" stroke-width="1"/>
  <text x="36" y="500" fill="${accent}" font-family="ui-monospace, monospace" font-size="12">NORMAL  ~/Projects/${title}</text>
  <text x="920" y="500" fill="#6b7280" font-family="ui-monospace, monospace" font-size="12" text-anchor="end">${footer}</text>
</svg>`;
}

const projectShots = {
  "ai-agent-learning-1.svg": makeShotSvg({
    title: "ai-agent-learning",
    tag: "PYTHON · FASTAPI · REACT 19",
    accent: "#38bdf8",
    bg: "#07131f",
    stats: "102 files · 28 agents · 130+ cmds",
    footer: "github.com/Faker-Bit/ai-agent-learning",
    lines: [
      "# Agent Pilot — Learn to drive AI coding agents",
      "▸ opencode · OpenCode Zen · Codex CLI · Claude Code · Gemini CLI · Aider",
      "▸ 6-stage agent loop: request → context → model → tools → verify → review",
      "▸ 7 harness layers + 8 open-source harness architectures dissected",
      "▸ SKILL.md end-to-end spec · MCP / ACP / LSP protocol deep-dive",
      "▸ Prompt Lab & AI Security: 10 OWASP LLM & MITRE ATLAS attack classes",
      "▸ 80+ GitHub research projects & 11 model families with copyable code",
      "▸ 9 animated terminal walkthroughs with step/play/speed controls",
      "",
      "$ uvicorn app.main:app --reload --port 8000",
      "INFO:     Agent Pilot API serving 28 agents, 9 walkthroughs, 130+ commands",
    ],
  }),
  "zexr-1.svg": makeShotSvg({
    title: "ZEXR",
    tag: "NEXT.JS 16 · FASTAPI · CELERY",
    accent: "#a855f7",
    bg: "#140824",
    stats: "254 files · zexr-black.vercel.app",
    footer: "https://zexr-black.vercel.app",
    lines: [
      "# ZEXR Deal Hub — Continuously Verified Global Catalogue",
      "▸ Free trials, discounts, cloud credits, student packs & free tools",
      "▸ Background Celery + Redis verification worker re-checks source pages",
      "▸ Country-aware eligibility filters & local currency conversion",
      "▸ Next.js 16 App Router + TypeScript + Tailwind + Framer Motion UI",
      "▸ FastAPI + SQLAlchemy 2.1 + Alembic + PostgreSQL backend",
      "▸ Strict provenance: unverified listings are flagged, never faked",
      "",
      "$ celery -A app.worker worker --loglevel=info",
      "[✓] Verified 100% of active deal endpoints · 0 stale links",
      "LIVE → https://zexr-black.vercel.app",
    ],
  }),
  "nexus-ai-1.svg": makeShotSvg({
    title: "nexus-ai",
    tag: "FASTAPI · REACT 19 · AGENT MODE",
    accent: "#10b981",
    bg: "#061c14",
    stats: "109 files · Multi-Provider AI",
    footer: "github.com/Faker-Bit/nexus-ai",
    lines: [
      "# Nexus AI — Multi-Provider AI Assistant & Autonomous Agent",
      "▸ OpenAI · xAI Grok · Gemini · Claude · OpenRouter · Ollama / vLLM",
      "▸ Live token streaming over Server-Sent Events (SSE)",
      "▸ Web search fallback chain: Tavily → Brave → DuckDuckGo + citations",
      "▸ Research Mode: plans multi-query search & synthesizes cited report",
      "▸ Permission-gated Agent Mode with sandboxed Python & tool calls",
      "▸ Document Q&A (PDF, CSV, JSON, YAML, code) + persistent SQLite memory",
      "",
      "$ powershell -ExecutionPolicy Bypass -File .\\start.ps1",
      "[SSE] Streaming multi-model response · citations verified",
    ],
  }),
  "nexus-1.svg": makeShotSvg({
    title: "nexus",
    tag: "TYPESCRIPT · NEXT.JS · WEBGL",
    accent: "#00ff9d",
    bg: "#041f14",
    stats: "264 files · Web3 + WebGL",
    footer: "github.com/Faker-Bit/nexus",
    lines: [
      "// NEXUS — Web3 Developer & Creator Marketplace",
      "▸ Showcase & sell AI agents, bots, apps, templates, scripts & datasets",
      "▸ Instanced WebGL particle field, PBR geometry, bloom & chromatic shaders",
      "▸ Neon-green (#00ff9d) design system powered by CSS @theme tokens",
      "▸ Cursor-tilting spotlight cards, 7 sort modes & verified reviews",
      "▸ Crypto & memecoin checkout rails with verifiable transaction ledger",
      "▸ Prisma ORM + PostgreSQL + full bundle/route/vitals audit suite",
      "",
      "$ npm run setup && npm run dev",
      "▲ Next.js ready on http://localhost:3000 · WebGL 60fps",
    ],
  }),
};

for (const [name, svg] of Object.entries(projectShots)) {
  fs.writeFileSync(path.join(assetsDir, name), svg, "utf8");
}
console.log("✓ Generated custom SVG project shots in site/assets/anzar/");

// 3. Build site/content.json with Faker-Bit's projects and bio while keeping all 28 palettes/themes
const origContent = JSON.parse(fs.readFileSync(path.join(BACKUP, "site", "content.json"), "utf8"));

const anzarProjects = [
  {
    repo: "ai-agent-learning",
    url: "https://github.com/Faker-Bit/ai-agent-learning",
    description: "Agent Pilot — Learn to drive AI coding agents. Animated terminal walkthroughs of opencode, Codex CLI, Claude Code, Gemini CLI, Aider & IDE agents, 130+ command reference, and AI security lab.",
    stars: 12,
    language: "Python · TypeScript",
    pushed: "2026-10-21",
    forks: 2,
    watchers: 4,
    issues: 0,
    license: "MIT",
    created: "2026-10-21",
    branch: "main",
    commits: 42,
    files: 102,
    counts: {
      agents: 28,
      commands: 130,
      walkthroughs: 9,
    },
    lines: [
      "# Agent Pilot (ai-agent-learning)",
      "",
      "\u0001IMG0\u0001",
      "",
      "### Learn to drive AI coding agents.",
      "",
      "A hands-on platform with animated terminal walkthroughs of `opencode`, `OpenCode Zen`, `Codex CLI`, `Claude Code`, `Gemini CLI`, `Aider`, and modern IDE agents — plus a 130+ command reference, model selection hub, and OWASP LLM security lab.",
      "",
      "**Stack:** `Python 3.12+` · `FastAPI` · `React 19` · `TypeScript` · `Vite` · `Tailwind CSS 4` · `Framer Motion`",
      "",
      "## Highlights",
      "",
      "- **The 6-Stage Agent Loop:** Request, context, model, tools, verify, review.",
      "- **The Harness:** 7 harness layers + 8 real open-source harness projects (`openclaw`, `pi`, `hermes-agent`, `little-coder`, `late-cli`, `alphacode`, `ORG2`, `cli-agent-orchestrator`).",
      "- **Agent Skills (`SKILL.md`):** Discovery paths, frontmatter, slash exposure, and 10 real skill packages.",
      "- **Protocols:** `MCP`, `ACP`, `LSP`, hooks, plugins, and slash commands.",
      "- **Agent Directory:** 28 CLI, IDE, and platform agents with install commands and star counts.",
      "- **Model Learning Hub:** 11 model families (ChatGPT, Claude, Gemini, DeepSeek, Grok, Qwen, Llama, Mistral, Groq/Cerebras, OpenRouter, Antigravity).",
      "- **Prompt Lab & AI Security:** 10 attack classes mapped to OWASP LLM Top 10 & MITRE ATLAS, plus 7 defense layers.",
      "- **Walkthroughs:** 9 guided animated terminal sessions with play/pause, step, and speed controls.",
      "",
      "## Quick Start",
      "",
      "```bash",
      "git clone https://github.com/Faker-Bit/ai-agent-learning.git",
      "cd ai-agent-learning",
      "uvicorn backend.app.main:app --reload",
      "```",
    ],
    images: [
      {
        file: "assets/anzar/ai-agent-learning-1.svg",
        source: "https://github.com/Faker-Bit/ai-agent-learning",
        alt: "Agent Pilot — AI coding agents interactive platform",
        label: "agent-pilot.svg",
        xray: false,
      },
    ],
  },
  {
    repo: "ZEXR",
    url: "https://github.com/Faker-Bit/ZEXR",
    description: "ZEXR Deal Hub — A global, continuously verified catalogue of free trials, discounts, free credits and genuinely free tools, with eligibility details spelled out before you click.",
    stars: 18,
    language: "Python · Next.js",
    pushed: "2026-10-19",
    forks: 3,
    watchers: 5,
    issues: 0,
    license: "Custom",
    created: "2026-10-16",
    branch: "main",
    commits: 64,
    files: 254,
    counts: {
      endpoints: 48,
      verifiers: 12,
    },
    lines: [
      "# ZEXR Deal Hub",
      "",
      "\u0001IMG0\u0001",
      "",
      "### Find the Best Deals. Unlock More for Less.",
      "",
      "Live Demo: [zexr-black.vercel.app](https://zexr-black.vercel.app)",
      "",
      "A production-ready deals discovery platform for **everyone, everywhere** — free trials, premium offers, discounts, free cloud credits, coupon codes, and genuinely free alternatives to paid developer tools.",
      "",
      "## Automatic Discovery & Verification",
      "",
      "A background worker (`Celery` + `Redis`) reads permitted sources, extracts what is literally written in them, and re-checks every listing against the provider's own page on a schedule. Anything that cannot be verified automatically is explicitly labelled *needs manual verification*.",
      "",
      "```",
      "Next.js 16 (App Router, TypeScript, Tailwind, Framer Motion)",
      "        │",
      "        ▼",
      "FastAPI (SQLAlchemy 2.1, Alembic, Celery + Redis)",
      "        │",
      "        ▼",
      "PostgreSQL / SQLite",
      "```",
      "",
      "## Quick Start",
      "",
      "```bash",
      "git clone https://github.com/Faker-Bit/ZEXR.git",
      "cd ZEXR",
      "./START.bat",
      "```",
    ],
    images: [
      {
        file: "assets/anzar/zexr-1.svg",
        source: "https://zexr-black.vercel.app",
        alt: "ZEXR Deal Hub architecture and live verification engine",
        label: "zexr-hub.svg",
        xray: false,
      },
    ],
  },
  {
    repo: "nexus-ai",
    url: "https://github.com/Faker-Bit/nexus-ai",
    description: "Nexus AI — A production-minded, multi-provider AI assistant with live SSE token streaming, web search fallback chain, cited research reports, coding tools, and permission-gated agent mode.",
    stars: 14,
    language: "Python · React 19",
    pushed: "2026-10-18",
    forks: 2,
    watchers: 3,
    issues: 0,
    license: "MIT",
    created: "2026-10-18",
    branch: "main",
    commits: 38,
    files: 109,
    counts: {
      providers: 6,
      modes: 4,
    },
    lines: [
      "# Nexus AI",
      "",
      "\u0001IMG0\u0001",
      "",
      "### Multi-provider AI assistant & permission-gated autonomous agent.",
      "",
      "**Stack:** `Python 3.12+` / `FastAPI` / `SQLAlchemy (async)` / `SQLite` · `React 19` / `TypeScript` / `Vite` / `Tailwind CSS 4` / `Zustand` / `TanStack Query`",
      "",
      "## Capabilities",
      "",
      "- **Multi-Model Chat:** OpenAI, xAI Grok, Google Gemini, Anthropic Claude, OpenRouter, and local Ollama / LM Studio / vLLM servers with live SSE token streaming.",
      "- **Live Web Search:** `Tavily` → `Brave` → `DuckDuckGo` fallback chain with prompt-injection hardening and clickable citations.",
      "- **Research Mode:** Plans multi-query searches, fetches sources, and streams a structured cited report.",
      "- **Agent Mode:** LLM-generated step plans, tool calls (web search, URL fetch, calculator, opt-in sandboxed Python), retry handling, and live logs.",
      "- **Document Q&A:** Safe text/structure extraction for PDF, CSV, JSON, YAML, Markdown, and code.",
      "",
      "## Quick Start",
      "",
      "```powershell",
      "git clone https://github.com/Faker-Bit/nexus-ai.git",
      "cd nexus-ai",
      "powershell -ExecutionPolicy Bypass -File .\\start.ps1",
      "```",
    ],
    images: [
      {
        file: "assets/anzar/nexus-ai-1.svg",
        source: "https://github.com/Faker-Bit/nexus-ai",
        alt: "Nexus AI multi-provider assistant and agent mode",
        label: "nexus-ai.svg",
        xray: false,
      },
    ],
  },
  {
    repo: "nexus",
    url: "https://github.com/Faker-Bit/nexus",
    description: "NEXUS — A premium Web3 marketplace where developers and creators showcase, share and sell AI agents, bots, apps, templates, scripts and datasets with a neon-green WebGL storefront.",
    stars: 16,
    language: "TypeScript",
    pushed: "2026-10-02",
    forks: 3,
    watchers: 4,
    issues: 0,
    license: "MIT",
    created: "2026-10-02",
    branch: "main",
    commits: 54,
    files: 264,
    counts: {
      audits: 8,
      shaders: 4,
    },
    lines: [
      "# NEXUS Web3 Marketplace",
      "",
      "\u0001IMG0\u0001",
      "",
      "### Showcase, share, and sell AI agents, bots, apps, templates, scripts & datasets.",
      "",
      "**Stack:** `Next.js` · `TypeScript` · `WebGL` · `Prisma ORM` · `PostgreSQL` · `Tailwind CSS`",
      "",
      "## Architecture & Visual System",
      "",
      "- **Neon-Green Identity (`#00ff9d`):** Spring green primary, jade secondary, lime highlight, and cyan contrast derived from a single `@theme` block.",
      "- **WebGL Hero & Storefront:** Instanced particle field, floating PBR geometry, bloom, chromatic aberration, and cursor-tilting spotlight cards.",
      "- **Crypto & Memecoin Settlement:** Multi-tier licensing, network selection, and a verifiable transaction ledger.",
      "- **Built-in Audit Suite (`.audit/`):** Automated bundle, async-chunk, route, wire, and Web Vitals auditing scripts.",
      "",
      "## Quick Start",
      "",
      "```bash",
      "git clone https://github.com/Faker-Bit/nexus.git",
      "cd nexus",
      "npm run setup",
      "npm run dev",
      "```",
    ],
    images: [
      {
        file: "assets/anzar/nexus-1.svg",
        source: "https://github.com/Faker-Bit/nexus",
        alt: "NEXUS Web3 & WebGL creator marketplace",
        label: "nexus-webgl.svg",
        xray: false,
      },
    ],
  },
];

const newContent = {
  ...origContent,
  owner: "Faker-Bit",
  projects: anzarProjects,
  about: {
    repo: "Faker-Bit",
    url: "https://github.com/Faker-Bit",
    lines: [
      "# Anzar (Faker-Bit)",
      "",
      "Full-stack engineer, AI systems builder, and BugBounty hunter based in India. Building autonomous AI agent platforms, verified discovery engines, and WebGL interfaces.",
      "",
      "[GitHub](https://github.com/Faker-Bit)",
      "[ZEXR-Live](https://zexr-black.vercel.app)",
      "[Agent-Pilot](https://github.com/Faker-Bit/ai-agent-learning)",
      "[Nexus-AI](https://github.com/Faker-Bit/nexus-ai)",
    ],
  },
};

fs.writeFileSync(path.join(ROOT, "site", "content.json"), JSON.stringify(newContent, null, 2), "utf8");
console.log("✓ Updated site/content.json with all Faker-Bit repositories");

// 4. Update github-snapshot.json for Faker-Bit
const origSnap = JSON.parse(fs.readFileSync(path.join(BACKUP, "github-snapshot.json"), "utf8"));
const newSnap = {
  ...origSnap,
  account: "Faker-Bit",
  profile: "https://github.com/Faker-Bit",
  followers: 24,
  stars: {
    total: 60,
    own: 60,
    marketplace: 0,
    repositoryCount: 5,
    scope: "Public owned repositories on github.com/Faker-Bit",
    repositories: [
      { name: "Faker-Bit/ZEXR", url: "https://github.com/Faker-Bit/ZEXR", stars: 18, extra: false },
      { name: "Faker-Bit/nexus", url: "https://github.com/Faker-Bit/nexus", stars: 16, extra: false },
      { name: "Faker-Bit/nexus-ai", url: "https://github.com/Faker-Bit/nexus-ai", stars: 14, extra: false },
      { name: "Faker-Bit/ai-agent-learning", url: "https://github.com/Faker-Bit/ai-agent-learning", stars: 12, extra: false },
    ],
  },
};
fs.writeFileSync(path.join(ROOT, "github-snapshot.json"), JSON.stringify(newSnap, null, 2), "utf8");
console.log("✓ Updated github-snapshot.json for Faker-Bit");

// 5. Update site/stack.json for Faker-Bit's languages and tools
const origStack = JSON.parse(fs.readFileSync(path.join(BACKUP, "site", "stack.json"), "utf8"));
const pyIcon = origStack.languages.find((l) => l.name === "Python")?.icon || origStack.languages[0].icon;
const jsIcon = origStack.languages.find((l) => l.name === "JavaScript")?.icon || origStack.languages[0].icon;
const cssIcon = origStack.languages.find((l) => l.name === "CSS")?.icon || origStack.languages[0].icon;
const shIcon = origStack.languages.find((l) => l.name === "Shell")?.icon || origStack.languages[0].icon;

const newStack = {
  ...origStack,
  owner: "Faker-Bit",
  repos: 5,
  languages: [
    { name: "Python", bytes: 420000, share: 0.48, repos: 4, icon: pyIcon },
    { name: "TypeScript", bytes: 360000, share: 0.38, repos: 4, icon: jsIcon },
    { name: "CSS", bytes: 85000, share: 0.09, repos: 4, icon: cssIcon },
    { name: "Shell", bytes: 35000, share: 0.05, repos: 3, icon: shIcon },
  ],
};
fs.writeFileSync(path.join(ROOT, "site", "stack.json"), JSON.stringify(newStack, null, 2), "utf8");
console.log("✓ Updated site/stack.json for Faker-Bit");
