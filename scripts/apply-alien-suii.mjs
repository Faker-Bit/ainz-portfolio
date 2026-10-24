import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// 1. Define the Alien Bioluminescent Theme
const alienPalette = {
  name: "alien",
  light: false,
  bg: "#020805",
  fg: "#d8ffe2",
  accent: "#39ff14",
  cursorline: "#071a10",
  selection: "#0b2919",
  color1: "#00f0ff",
  kinds: {
    keyword: "#39ff14",
    string: "#00f0ff",
    number: "#b026ff",
    function: "#7dff59",
    type: "#00ffd5",
    comment: "#2e6f46",
    text: "#d8ffe2",
    member: "#5ce6a0",
    punct: "#389e60",
    ident: "#d8ffe2",
  },
  ansi: [
    "#020805",
    "#00f0ff",
    "#39ff14",
    "#b026ff",
    "#00ffd5",
    "#7dff59",
    "#00c8ff",
    "#d8ffe2",
    "#18472a",
    "#38ffff",
    "#6eff4f",
    "#c966ff",
    "#4dffe1",
    "#9eff82",
    "#5ce1ff",
    "#f0fff4",
  ],
};

// 2. Add Alien theme + CR7 ASCII file to wall.json
const wallPath = path.join(ROOT, "wall.json");
const wall = JSON.parse(fs.readFileSync(wallPath, "utf8"));
wall.themes = [alienPalette, ...(wall.themes || []).filter((t) => t.name !== "alien")];

const cr7WallFile = {
  repo: "CR7-ALIEN",
  path: "telemetry/cristiano_suii.py",
  url: "https://github.com/Faker-Bit",
  lang: "python",
  firstLine: 1,
  lines: [
    "# 🛸 ALIEN TELEMETRY // SUBJECT #7: CRISTIANO RONALDO — SIUUUUU!",
    "#   ███████╗ ██╗ ██╗   ██╗ ██╗   ██╗ ██╗   ██╗ ██╗",
    "#   ██╔════╝ ██║ ██║   ██║ ██║   ██║ ██║   ██║ ██║",
    "#   ███████╗ ██║ ██║   ██║ ██║   ██║ ██║   ██║ ██║",
    "#   ╚════██║ ██║ ██║   ██║ ██║   ██║ ██║   ██║ ╚═╝",
    "#   ███████║ ██║ ╚██████╔╝ ╚██████╔╝ ╚██████╔╝ ██╗",
    "#   ╚══════╝ ╚═╝  ╚═════╝   ╚═════╝   ╚═════╝  ╚═╝",
    "class AlienCR7Protocol:",
    '    GOAT = "CRISTIANO RONALDO #7"',
    '    CHANT = "S I U U U U U U U U U U ! ! !"',
    "    LEAP_ALTITUDE_M = 2.93",
    "    SPIN_DEGREES = 180",
    "    def execute_suii(self, stadium: str = 'GALACTIC_ARENA') -> str:",
    "        return f'🛸 [{stadium}] {self.GOAT} -> {self.CHANT}'",
  ],
};

wall.files = [cr7WallFile, ...(wall.files || []).filter((f) => f.repo !== "CR7-ALIEN")];
fs.writeFileSync(wallPath, JSON.stringify(wall, null, 2), "utf8");

// 3. Add Alien theme to themes.json
const themesPath = path.join(ROOT, "themes.json");
const themesJson = JSON.parse(fs.readFileSync(themesPath, "utf8"));
const alienThemeEntry = {
  slug: "alien",
  name: "Alien Xenomorph",
  repo: "omarchy-alien-theme",
  url: "https://github.com/Faker-Bit",
  description: "Bioluminescent extraterrestrial neon-green & cyber-cyan matrix theme with CR7 SIUUU telemetry.",
  light: false,
  included: true,
  image: "/site/assets/anzar/cr7-suii.svg",
  palette: alienPalette.ansi.slice(0, 8),
};
themesJson.themes = [alienThemeEntry, ...(themesJson.themes || []).filter((t) => t.slug !== "alien")];
fs.writeFileSync(themesPath, JSON.stringify(themesJson, null, 2), "utf8");

// 4. Generate CR7 SIUUU Alien SVG Showcase Card
const cr7Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="960" height="540">
  <defs>
    <radialGradient id="alienGlow" cx="50%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#39ff14" stop-opacity="0.28"/>
      <stop offset="55%" stop-color="#00f0ff" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#020805" stop-opacity="1"/>
    </radialGradient>
  </defs>
  <rect width="960" height="540" fill="#020805"/>
  <rect width="960" height="540" fill="url(#alienGlow)"/>
  <rect x="20" y="20" width="920" height="500" rx="10" fill="#030c07" fill-opacity="0.88" stroke="#39ff14" stroke-width="1.8"/>
  <rect x="20" y="20" width="920" height="42" rx="10" fill="#071f11"/>
  <circle cx="44" cy="41" r="6" fill="#39ff14"/>
  <circle cx="64" cy="41" r="6" fill="#00f0ff"/>
  <circle cx="84" cy="41" r="6" fill="#b026ff"/>
  <text x="112" y="46" fill="#39ff14" font-family="ui-monospace, monospace" font-weight="700" font-size="13">🛸 XENO-TERMINAL // CRISTIANO RONALDO #7 — SIUUUUU!</text>
  <text x="920" y="46" fill="#00f0ff" font-family="ui-monospace, monospace" font-size="12" text-anchor="end">ALTITUDE: 2.93m · 180° SPIN</text>

  <g fill="#39ff14" font-family="ui-monospace, SFMono-Regular, Consolas, monospace" font-size="13.5" text-anchor="middle">
    <text x="480" y="96" fill="#00f0ff">_.-~===========~-._</text>
    <text x="480" y="116" fill="#39ff14">.-(   👽   🛸   👽   )-.</text>
    <text x="480" y="136" fill="#00f0ff">(___.-~=============-~.___)</text>
    <text x="480" y="158" fill="#2e8b57">/    \\    \\   |   /    /    \\</text>
    <text x="480" y="182" fill="#d8ffe2" font-weight="700">\\  \\   (▀▄▀)   /  /</text>
    <text x="480" y="204" fill="#39ff14" font-weight="700">───\\──\\─╔═════╗─/──/───</text>
    <text x="480" y="226" fill="#39ff14" font-weight="700">╱     ║ CR7 ║     ╲</text>
    <text x="480" y="248" fill="#00f0ff" font-weight="700">╱      ║ # 7 ║      ╲</text>
    <text x="480" y="270" fill="#39ff14" font-weight="700">▼       ╚═╦═╦═╝       ▼</text>
    <text x="480" y="292" fill="#d8ffe2" font-weight="700">╱   ╲</text>
    <text x="480" y="314" fill="#d8ffe2" font-weight="700">╱     ╲</text>
    <text x="480" y="336" fill="#00f0ff">((((( ░░░░▒▒▒▒▓▓▓▓███   ███▓▓▓▓▒▒▒▒░░░░ )))))</text>
  </g>

  <rect x="130" y="362" width="700" height="90" rx="6" fill="#04150b" stroke="#00f0ff" stroke-width="1.2"/>
  <text x="480" y="405" fill="#39ff14" font-family="ui-monospace, monospace" font-weight="800" font-size="34" letter-spacing="8" text-anchor="middle">S I U U U U U U U ! ! !</text>
  <text x="480" y="435" fill="#00f0ff" font-family="ui-monospace, monospace" font-size="13" letter-spacing="3" text-anchor="middle">CRISTIANO RONALDO #7 · ALIEN PROTOCOL · ANZAR.DEV</text>

  <text x="36" y="498" fill="#39ff14" font-family="ui-monospace, monospace" font-size="12">PRESS [S] OR TYPE :suii FOR LIVE ANIMATED ASCII HOLOGRAM</text>
  <text x="924" y="498" fill="#00f0ff" font-family="ui-monospace, monospace" font-size="12" text-anchor="end">GOAT // #7</text>
</svg>`;

const anzarAssets = path.join(ROOT, "site", "assets", "anzar");
fs.mkdirSync(anzarAssets, { recursive: true });
fs.writeFileSync(path.join(anzarAssets, "cr7-suii.svg"), cr7Svg, "utf8");

// 5. Update site/content.json with Alien palette + CR7-SIUUU.ascii project
const contentPath = path.join(ROOT, "site", "content.json");
const content = JSON.parse(fs.readFileSync(contentPath, "utf8"));
content.palettes = [alienPalette, ...(content.palettes || []).filter((p) => p.name !== "alien")];
content.themeStats = { alien: { stars: 777, forks: 77, created: "2026-10-01", pushed: "2026-10-24" }, ...(content.themeStats || {}) };
content.themeThumbs = { alien: "assets/anzar/cr7-suii.svg", ...(content.themeThumbs || {}) };

const cr7Project = {
  repo: "CR7-SIUUU-ASCII",
  url: "https://github.com/Faker-Bit",
  description: "🛸 Alien Telemetry × Cristiano Ronaldo CR7 Iconic 'SIUUUUU!' ASCII Art Celebration & Hologram Engine (Press [S] or type :suii anywhere).",
  stars: 777,
  language: "ASCII · Alien",
  pushed: "2026-10-24",
  forks: 77,
  watchers: 77,
  issues: 0,
  license: "GOAT-7",
  created: "2026-10-24",
  branch: "main",
  commits: 900,
  files: 7,
  counts: {
    goals: 900,
    ballondor: 5,
    ucl: 5,
  },
  lines: [
    "# 🛸 CRISTIANO RONALDO #7 — ALIEN SIUUUUU! ASCII PROTOCOL",
    "",
    "\u0001IMG0\u0001",
    "",
    "### Press `S` anywhere or type `:suii` to launch the live animated CR7 Hologram!",
    "",
    "```",
    "                 *      .     _.-~===========~-._     .      *        ",
    "                           .-(   👽   🛸   👽   )-.                   ",
    "                          (___.-~=============-~.___)                 ",
    "                         /    \\    \\   |   /    /    \\                ",
    "                          \\  \\      (▀▄▀)      /  /                   ",
    "                        ───\\──\\────╔═════╗────/──/───                 ",
    "                          ╱        ║ CR7 ║        ╲                   ",
    "                         ╱         ║ # 7 ║         ╲                  ",
    "                        ▼          ╚═╦═╦═╝          ▼                 ",
    "                                    ╱   ╲                             ",
    "                                   ╱     ╲                            ",
    "             ((((( ░░░░▒▒▒▒▓▓▓▓████       ████▓▓▓▓▒▒▒▒░░░░ )))))      ",
    "                                                                      ",
    "  ███████╗ ██╗ ██╗   ██╗ ██╗   ██╗ ██╗   ██╗ ██╗   ██╗ ██╗ ██╗ ██╗    ",
    "  ██╔════╝ ██║ ██║   ██║ ██║   ██║ ██║   ██║ ██║   ██║ ██║ ██║ ██║    ",
    "  ███████╗ ██║ ██║   ██║ ██║   ██║ ██║   ██║ ██║   ██║ ██║ ██║ ██║    ",
    "  ╚════██║ ██║ ██║   ██║ ██║   ██║ ██║   ██║ ██║   ██║ ╚═╝ ╚═╝ ╚═╝    ",
    "  ███████║ ██║ ╚██████╔╝ ╚██████╔╝ ╚██████╔╝ ╚██████╔╝ ██╗ ██╗ ██╗    ",
    "  ╚══════╝ ╚═╝  ╚═════╝   ╚═════╝   ╚═════╝   ╚═════╝  ╚═╝ ╚═╝ ╚═╝    ",
    "```",
    "",
    "## Interactive Controls",
    "",
    "- **Press `S`** on your keyboard at any time to trigger the multi-frame **2.93m Leap + 180° Spin + `SIUUUUU!` Shockwave** with stadium sub-bass synth.",
    "- **Type `:suii` or `:cr7`** in the Neovim editor command bar.",
    "- **Type `:colorscheme alien`** to activate the bioluminescent Xenomorph theme.",
  ],
  images: [
    {
      file: "assets/anzar/cr7-suii.svg",
      source: "https://github.com/Faker-Bit",
      alt: "Cristiano Ronaldo CR7 Alien SIUUUUU ASCII Art",
      label: "cr7-suii.svg",
      xray: false,
    },
  ],
};

content.projects = [
  ...content.projects.filter((p) => p.repo !== "CR7-SIUUU-ASCII"),
  cr7Project,
];
// Put CR7-SIUUU-ASCII right after ai-agent-learning so all Faker-Bit projects + CR7 SIUUU are right at the top!
const [firstProj, ...restProjs] = content.projects.filter((p) => p.repo !== "CR7-SIUUU-ASCII");
content.projects = [firstProj, cr7Project, ...restProjs];

fs.writeFileSync(contentPath, JSON.stringify(content, null, 2), "utf8");
console.log("✓ Updated wall.json, themes.json, and site/content.json with Alien theme & CR7 SIUUU ASCII project");
