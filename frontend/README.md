# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

---

## ✨ HealAgent – Autonomous CI/CD Healing Dashboard

**HealAgent** is a premium B2B SaaS product built for the RIFT 2026 Hackathon (AI/ML + DevOps track). It provides a futuristic, dark‑theme dashboard that lets engineering teams input a GitHub repository URL, then automatically detects, fixes, and heals CI/CD failures.

### Key Features
- **AI‑driven healing** – An autonomous backend agent analyses CI pipelines, generates patches, and applies fixes.
- **Stunning UI** – Dark cyber‑tech aesthetic with neon cyan/purple accents, glass‑morphism cards, subtle background grid, and buttery‑smooth Framer Motion animations.
- **Real‑time run summary** – Animated statistics (failures, fixes, duration) with a glowing status badge (PASSED/FAILED).
- **State management** – Zustand store for mock data simulation and future real‑API integration.
- **Responsive design** – Works flawlessly on desktop and mobile.

### Tech Stack
- **React 18 + TypeScript**
- **Vite** for fast development builds
- **Tailwind CSS** (custom utility classes for glass‑morphism and neon effects)
- **Framer Motion** for layout and micro‑animations
- **Zustand** for lightweight global state

### Getting Started
```bash
# Install dependencies
npm install

# Run the dev server
npm run dev
```
Open the app at the URL shown in the console (e.g., `http://localhost:5174`).

### Project Structure
```
src/
├─ components/
│  ├─ dashboard/        # Header, RunSummaryCard, etc.
│  └─ ui/                # Reusable UI primitives (Card, Input, etc.)
├─ store/                # Zustand store (useAgentStore)
├─ App.tsx               # Main layout and AnimatePresence flow
├─ main.tsx              # Entry point
└─ index.css             # Tailwind directives & custom utilities
```

### Contributing
Feel free to open issues or PRs to improve the UI, add real backend integration, or enhance the AI healing logic.

---

*This README was updated to reflect the purpose and vision of the HealAgent project.*
