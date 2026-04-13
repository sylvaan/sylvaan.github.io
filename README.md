# Ahmad Ridhwan Naufal | Portfolio Architectures

> A high-performance, animated digital portfolio showcasing frontend web engineering, robust healthcare ecosystem architecture, and fluid UI/UX capability.

**[🌐 View Live Website](https://sylvaan.github.io)**

## ⚡ Tech Stack

This platform leverages modern web development standards to ensure maximum performance, maintainability, and cinematic interactivity without sacrificing SEO or hydration speed.

- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 19
- **Language:** TypeScript
- **Styling Mechanics:** Tailwind CSS v4
- **Cinematic Engine:** Framer Motion

## 🏗️ Local Development

To inspect or run this project locally on your development machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sylvaan/sylvaan.github.io.git
   ```
2. **Install node dependencies:**
   ```bash
   npm install
   ```
3. **Ignite the development server:**
   ```bash
   npm run dev
   ```
4. **Inspect:**
   Navigate your browser to [http://localhost:3000](http://localhost:3000)

## 🏛️ Architectural Highlights
- **Decoupled Data Flow:** All application state, text copy, and asset mappings are stringently decoupled from the presentation layer and housed within `src/data/portfolio.ts` for rapid maintenance.
- **Micro-Animations:** Employs forced remounting patterns (`key` injection) via Framer Motion to preserve staggering entrance sequences during React's state transitions.
- **Image Optimization:** Adheres to strict `next/image` aspect ratios with dynamic fallback techniques to prevent portrait-oriented healthcare snapshots from breaking the 16:9 grid composition.

---
*Crafted with precision by [Ahmad Ridhwan Naufal](https://sylvaan.github.io)*
