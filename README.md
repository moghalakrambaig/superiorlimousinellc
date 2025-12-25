# Superior Limousine LLC

> Vite + React + TypeScript landing site using Tailwind CSS and shadcn/ui-style components.


## 🚀 Project Overview

**Superior Limousine LLC** is a responsive marketing website built with Vite, React, and TypeScript. It includes a collection of reusable UI components (in `src/components`) and is styled using Tailwind CSS and utility-driven component patterns inspired by shadcn/ui.

This repository contains the frontend code for the site (no backend included). It is optimized for fast local development, production builds, and deployment (Vercel recommended — `vercel.json` is included).


## 🔧 Tech Stack

- Core: React, TypeScript, Vite
- Styling: Tailwind CSS (+ `@tailwindcss/typography`, `tailwindcss-animate`) 
- UI primitives: Radix UI + shadcn-style components
- State & data: React Query (`@tanstack/react-query`)
- Form handling: `react-hook-form` + `@hookform/resolvers`
- Animations: `framer-motion`
- Linting: ESLint


## 📦 Scripts (from `package.json`)

- `npm run dev` — Start dev server (Vite)
- `npm run build` — Build production assets
- `npm run build:dev` — Build with development mode
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint checks


## ⚙️ Prerequisites

- Node.js (v18+ recommended)
- npm (or yarn/pnpm) 


## 🧭 Quick Start (Local Development)

1. Clone the repo

   ```bash
   git clone <repo-url>
   cd superiorlimousinellc
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   # yarn
   # pnpm install
   ```

3. Start dev server

   ```bash
   npm run dev
   ```

Open http://localhost:5173 (or the port Vite shows) to view the app.


## 📁 Project Structure (key files)

```
src/
  ├─ components/        # All React UI components and shadcn-style UI primitives
  │   ├─ FleetCard.tsx
  │   ├─ Footer.tsx
  │   ├─ Hero.tsx
  │   ├─ Navbar.tsx
  │   ├─ ...
  │   └─ ui/             # Reusable primitives & UI wrappers
  ├─ hooks/              # Custom hooks (use-mobile, use-toast)
  ├─ lib/                # Utility helpers
  ├─ pages/              # Page components (Home, About, Services, Contact, etc.)
  ├─ main.tsx
  └─ index.css

public/                  # Static assets
package.json             # Scripts & deps
tailwind.config.ts       # Tailwind config
vite.config.ts           # Vite config
vercel.json              # Vercel deployment hints
```


## ✅ Notes for Developers

- Styling is Tailwind-first. Add utility classes in components or extend Tailwind via `tailwind.config.ts`.
- Reuse UI primitives in `src/components/ui/*` when adding new components.
- Follow existing TypeScript + React patterns and prefer composable, small components.
- Accessibility: Use semantic HTML and Radix UI where appropriate for robust primitives.


## 🚢 Deployment

This project can be deployed to Vercel (recommended). `vercel.json` is included for default deployment behavior. Alternatively, build locally and serve the `dist` contents.


## 🔬 Testing & Linting

- ESLint is included. Run `npm run lint` to check for issues.
- No unit test runner is configured by default. If you add tests, consider Vitest or Jest.



