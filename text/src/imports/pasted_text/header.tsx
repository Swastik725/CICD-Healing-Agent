
🧠 CONTEXT FOR FIGMA MAKE

Project: Autonomous CI/CD Healing Agent — a React + TypeScript + Vite + Tailwind frontend.
Stack: React 19, Framer Motion, Zustand, Tailwind CSS v4, Sonner toasts, Lucide icons.
Aesthetic: Cyberpunk / Sci-Fi Terminal · Deep black backgrounds · Neon glow accents (cyan, purple, emerald, red) · Glassmorphism cards · Animated counters · Framer Motion transitions.
Path alias: @/ → ./src/
Tailwind custom tokens already in the project:

neon-cyan: #00ffff
neon-purple: #bb00ff
neon-emerald: #50c878
neon-red: #ff0055
shadow-glass, shadow-neon box shadows
.glass utility class (bg-black/30, backdrop-blur, border white/10)



🎨 DESIGN SYSTEM (Apply to ALL screens)
Background:        #0a0a0f (near-black with deep blue tint)
Surface cards:     rgba(0,0,0,0.4) + backdrop-blur-xl + border rgba(255,255,255,0.08)
Primary accent:    #00ffff  (neon cyan)
Secondary accent:  #bb00ff  (neon purple)
Success:           #50c878  (neon emerald)
Danger:            #ff0055  (neon red)
Body text:         rgba(255,255,255,0.85)
Muted text:        rgba(255,255,255,0.45)
Font — display:    "Rajdhani" or "Orbitron" (sci-fi, monospace-adjacent)
Font — body:       "JetBrains Mono" or "IBM Plex Mono" (code/terminal feel)
Border radius:     16px cards, 9999px pills/badges, 12px inputs
Glow effect:       box-shadow: 0 0 5px COLOR, 0 0 15px COLOR, 0 0 30px COLOR
Grid:              Max-width 900px centered, responsive down to 375px

📐 SCREEN 1 — Launch Screen (Input Form)
Layout
┌─────────────────────────────────────────────┐
│  HEADER (full width, fixed top)              │
├─────────────────────────────────────────────┤
│                                              │
│         [HERO INPUT CARD — centered]         │
│                                              │
└─────────────────────────────────────────────┘

Component: Header
File to generate: src/components/dashboard/Header.tsx
LAYOUT: flex row, justify-between, align-center
HEIGHT: 64px
BACKGROUND: rgba(0,0,0,0.7) + backdrop-blur(8px)
BORDER-BOTTOM: 1px solid rgba(255,255,255,0.08)
PADDING: 0 32px

LEFT SLOT:
  - Text: "RIFT HEALER"
  - Font: Orbitron Bold, 22px
  - Color: #00ffff
  - Glow: drop-shadow(0 0 8px #00ffff)

CENTER SLOT (hidden on mobile):
  - Line 1: "Autonomous CI/CD Healing Agent"  — Rajdhani Medium, 16px, #bb00ff, glow
  - Line 2: "Detect. Fix. Deploy."            — JetBrains Mono, 12px, #50c878

RIGHT SLOT:
  - Pill badge: "● READY"
  - Background: rgba(255,0,85,0.15)
  - Border: 1px solid #ff0055
  - Text: JetBrains Mono 11px, #ff0055
  - Dot pulses with CSS keyframe animation (opacity 0→1→0, 1.5s loop)
Framer Motion: Slide in from top (y: -20 → 0, opacity 0→1, duration 0.6s) on mount.

Component: HeroInputCard
File to generate: src/components/dashboard/HeroInputCard.tsx
(Replaces the inline card in App.tsx — extract into its own component)
CONTAINER: max-width 640px, centered with mt-auto mb-auto (full-screen vertical centering)

CARD STYLES:
  background: rgba(0,0,0,0.45)
  backdrop-filter: blur(20px)
  border: 1px solid rgba(0,255,255,0.15)
  border-radius: 20px
  padding: 48px
  box-shadow: 0 0 1px rgba(255,255,255,0.08), 0 8px 60px rgba(0,0,0,0.7), 0 0 40px rgba(0,255,255,0.05)

CARD HEADER:
  - Icon: a small animated SVG circuit/bolt icon above the title
  - Title: "Autonomous CI/CD Healing Agent"
    Font: Orbitron Bold, 28px, #00ffff
    Glow: drop-shadow 0 0 12px #00ffff
    Alignment: center
  - Subtitle: "Paste your repo. Let the agent handle the rest."
    Font: JetBrains Mono, 13px, rgba(255,255,255,0.5)
    Alignment: center
    Margin-top: 8px

INPUTS (3 stacked, gap 20px):
  Each input:
    - Floating label (absolute positioned, top -10px, left 12px)
    - Label text: 11px JetBrains Mono, #00ffff, background: rgba(0,0,0,0.6), px 6px
    - Input field: 
        background: rgba(255,255,255,0.04)
        border: 1px solid rgba(255,255,255,0.12)
        border-radius: 12px
        padding: 14px 16px
        font: JetBrains Mono 14px white
        placeholder: rgba(255,255,255,0.25)
    - Focus state:
        border-color: #00ffff
        box-shadow: 0 0 0 3px rgba(0,255,255,0.15), 0 0 12px rgba(0,255,255,0.2)
        outline: none
  
  Input 1: label "GitHub Repository URL", placeholder "https://github.com/username/repo"
  Input 2: label "Team Name", placeholder "e.g. RIFT ORGANISERS"
  Input 3: label "Team Leader", placeholder "e.g. Saiyam Kumar"

BUTTON ROW (flex row, gap 16px, justify-center, mt 32px):

  Button 1 — LAUNCH AGENT (primary):
    background: linear-gradient(135deg, #00ffff, #00cccc)
    color: #000000
    font: Orbitron Bold, 13px
    letter-spacing: 2px
    padding: 14px 36px
    border-radius: 9999px
    box-shadow: 0 0 20px rgba(0,255,255,0.4)
    hover: scale(1.04), shadow intensifies
    active: scale(0.97)
    disabled state (isRunning=true):
      Show spinner inside: 16px border spinner, border-top #000, others transparent
      Text: "AGENT DEPLOYING…"
      opacity: 0.7, cursor: not-allowed

  Button 2 — SIMULATE RUN (secondary):
    background: linear-gradient(135deg, #bb00ff, #8800cc)
    color: #ffffff
    font: Orbitron Bold, 13px
    letter-spacing: 2px
    padding: 14px 36px
    border-radius: 9999px
    box-shadow: 0 0 20px rgba(187,0,255,0.35)
    hover: scale(1.04), shadow intensifies
    active: scale(0.97)
Framer Motion stagger: Container variant staggerChildren 0.12s. Each child (title, inputs, buttons) slides up from y:20, opacity 0→1.

📐 SCREEN 2 — Results Dashboard
File to generate: src/components/dashboard/RunSummaryCard.tsx (full redesign)
CONTAINER: max-width 860px, centered

CARD STYLES: same glass card as above

LAYOUT (top to bottom):

── ROW 1: STATUS BANNER ──────────────────────
  Full-width pill/badge (inline-block):
    PASSED: background rgba(80,200,120,0.15), border 1px #50c878, text #50c878
    FAILED: background rgba(255,0,85,0.15), border 1px #ff0055, text #ff0055
  Font: Orbitron Bold 16px, letter-spacing 4px
  Glow matching color
  Animate: scale 0.7→1 + opacity on mount (spring)

── ROW 2: METADATA ROW ───────────────────────
  3 flex items (repo, team, leader) — responsive wrap on mobile

  Each item:
    Label chip: "REPO" / "TEAM" / "LEADER"
      background: rgba(255,255,255,0.06)
      border-radius: 6px
      padding: 2px 8px
      font: JetBrains Mono 10px, rgba(255,255,255,0.4)
      letter-spacing: 1px
    Value text: JetBrains Mono 13px, #00ffff
    Truncate long repo URLs with ellipsis

── ROW 3: BRANCH BADGE ───────────────────────
  Centered pill:
    background: rgba(187,0,255,0.12)
    border: 1px solid rgba(187,0,255,0.3)
    border-radius: 9999px
    padding: 6px 20px
    prefix icon: git-branch icon (Lucide) 14px #bb00ff
    text: branch name in JetBrains Mono 13px #bb00ff

── ROW 4: STATS GRID (3 columns) ─────────────
  Each stat card:
    background: rgba(255,255,255,0.03)
    border: 1px solid rgba(255,255,255,0.07)
    border-radius: 16px
    padding: 24px
    text-align: center

  Stat 1 — Failures Detected:
    Number: Orbitron Bold, 48px, #ff0055, glow
    Animated counter: 0 → value over 1.2s (ease-out)
    Label: "FAILURES DETECTED", JetBrains Mono 11px, rgba(255,255,255,0.4)

  Stat 2 — Fixes Applied:
    Number: Orbitron Bold, 48px, #50c878, glow
    Animated counter: 0 → value over 1.2s
    Label: "FIXES APPLIED"

  Stat 3 — Time Taken:
    Number: Orbitron Bold, 48px, #bb00ff, glow  (append "s")
    Animated counter: 0 → value over 1.2s
    Label: "TIME TAKEN"

── ROW 5: LOG TERMINAL (NEW — add this) ──────
  A fake terminal output block showing what the agent "did":
    background: rgba(0,0,0,0.6)
    border: 1px solid rgba(0,255,255,0.1)
    border-radius: 12px
    padding: 16px 20px
    font: JetBrains Mono 12px
    max-height: 160px, overflow-y: auto

  Header bar: 3 macOS-style dots (red/yellow/green) + text "agent.log" right-aligned
  
  Lines (generate dynamically from result data):
    [✓] green text  — "Cloning repository..."
    [✓] green text  — "Running CI pipeline on branch {branch}"
    [!] yellow text — "{failures} failures detected"
    [✓] green text  — "Applying {fixes} AI-generated fixes..."
    [✓] green text  — "All checks passed. Deploying."
    [>] cyan text   — "Total time: {time}s"
  
  Lines animate in one-by-one with 150ms stagger (typewriter feel)

── ROW 6: RESET BUTTON ───────────────────────
  Centered, ghost style:
    border: 1px solid rgba(255,255,255,0.15)
    background: transparent
    color: rgba(255,255,255,0.5)
    padding: 10px 28px, border-radius: 9999px
    font: JetBrains Mono 12px, letter-spacing 1px
    text: "← RUN AGAIN"
    hover: border-color #00ffff, color #00ffff, glow subtle

🧩 COMPONENT: StatCard
File to generate: src/components/ui/StatCard.tsx
(Extract the 3 stat tiles into a reusable component)
tsxProps:
  value: number
  label: string
  color: 'cyan' | 'purple' | 'emerald' | 'red'
  suffix?: string   // e.g. "s" for seconds

Renders:
  - Animated counter using Framer Motion useMotionValue + animate
  - Color-coded number with matching glow
  - Small label below in muted mono text

🧩 COMPONENT: TerminalLog
File to generate: src/components/ui/TerminalLog.tsx
(New component for the fake agent output terminal)
tsxProps:
  lines: Array<{ type: 'success' | 'warn' | 'info' | 'cmd', text: string }>

Renders:
  - Each line animates in with staggered delay
  - Icons: ✓ (success/green), ! (warn/yellow), > (info/cyan), $ (cmd/white)
  - Terminal window chrome (dots + filename header)

🌐 BACKGROUND EFFECT (Global — in App.tsx or index.html)
Full-page background:
  base: #0a0a0f
  
Layer 1 (CSS radial gradients):
  - Top-left: radial-gradient ellipse 600px, rgba(0,255,255,0.04) → transparent
  - Bottom-right: radial-gradient ellipse 500px, rgba(187,0,255,0.05) → transparent

Layer 2 (animated floating orbs, CSS only):
  - 2–3 absolutely-positioned divs, blurred 80px+
  - Slow float animation (20–30s loop, translateY ±30px)
  - Colors: rgba(0,255,255,0.06) and rgba(187,0,255,0.05)

Layer 3 (optional — subtle grid):
  background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
  background-size: 40px 40px

🗂 FILE STRUCTURE TO GENERATE IN FIGMA MAKE
src/
├── components/
│   ├── dashboard/
│   │   ├── Header.tsx          ← REDESIGN existing
│   │   ├── HeroInputCard.tsx   ← NEW (extracted from App.tsx)
│   │   └── RunSummaryCard.tsx  ← REDESIGN existing
│   └── ui/
│       ├── Card.tsx            ← keep as-is (minor tweak ok)
│       ├── Input.tsx           ← REDESIGN (better floating label)
│       ├── StatCard.tsx        ← NEW extracted component
│       └── TerminalLog.tsx     ← NEW component
├── App.tsx                     ← REFACTOR to use HeroInputCard
└── index.css                   ← ADD background vars + orb animations

⚙️ INTEGRATION NOTES (for AntiGravity after Figma Make)
Once you export code from Figma Make, hand these instructions to AntiGravity:

Drop-in replacements: Header.tsx, RunSummaryCard.tsx, Input.tsx are direct swaps — same props, same exports.
New components: HeroInputCard.tsx, StatCard.tsx, TerminalLog.tsx — import into App.tsx and replace inline JSX blocks.
App.tsx refactor:

Remove the inline <Card> block in the !results branch
Replace with <HeroInputCard repo={repo} team={team} leader={leader} setRepo={setRepo} setTeam={setTeam} setLeader={setLeader} onLaunch={handleLaunch} onSimulate={handleSimulate} isRunning={isRunning} />


Store stays unchanged. useAgentStore.ts is solid — no edits needed.
Tailwind config: Add the font families to tailwind.config.ts extend block. Add Google Fonts link to index.html.
TerminalLog data: Generate lines array inside RunSummaryCard from the result prop — purely cosmetic, no store changes.
neon-green fix: The codebase uses text-neon-green in RunSummaryCard but tailwind.config.ts only defines neon-emerald. AntiGravity should rename to text-neon-emerald or add green as alias in config.


🔑 KEY CONSTRAINTS FOR FIGMA MAKE

Output TypeScript (.tsx) only — no .jsx
Use @/ path aliases — never relative imports like ../../
All motion via Framer Motion — no CSS-only animations for component logic
Use cn() from @/lib/utils for conditional classNames
No new state management — all state flows through Zustand useAgentStore
Keep React.forwardRef on Input component
Exports must match existing: export const Header, export const RunSummaryCard, export { Input }, export const Card
Do NOT introduce new dependencies — only what's in package.json already