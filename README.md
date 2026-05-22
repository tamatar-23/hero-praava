# Legal Work Platform - Hero Interface

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## Overview
This repository contains a high-fidelity frontend implementation of a premium hero landing page for a Legal Work Platform. The goal was to build a modern, visual-first interactive user interface featuring custom-styled floating interactive cards and solid aesthetic background decorations.

The primary objective was to achieve precise spatial layout coordinates, customized rotation angles, and consistent visual weighting to match design references, while maintaining full responsiveness and support for both light and dark themes.

## Frontend Architecture & Features
* **Custom Capsule Layout**: The desktop viewport utilizes absolute layout coordinates to form a balanced cluster of floating pill-shaped modules (Billing, Matters, John Doe Portal, Tasks, and Documents).
* **Advanced Transforms & Rotations**: Cards feature individual, precise rotation parameters (Matters at -8°, Billing at 7°, John Doe Portal at 3°, Tasks at 0°, and Documents at -5°) and scale-up hover feedback.
* **Fluid Background Decor**: Integrates solid background pill shapes (`#e4e9f5` in light theme, `#131520` in dark theme) placed along the viewport boundaries. The right-side pills are grouped closely together to establish a balanced visual anchor.
* **Responsive Breakpoints**: Gracefully degrades from an complex absolute-positioned layout on desktop screens (`lg` breakpoint and above) to a structured flex/grid container layout on mobile and tablet screens.
* **Extension Mismatch Mitigation**: Includes hydration warning suppressions (`suppressHydrationWarning`) on the base layout document structure to prevent hydration mismatches caused by client-side browser extensions adding custom HTML attributes.
* **Animations**: Integrates keyframe-based CSS floating animations for compositor-level performance combined with spring-based Framer Motion entry transitions.

## Project Structure
* `src/app/page.tsx`: Main layout, coordinates, and background decorative pills.
* `src/app/layout.tsx`: Root document configuration, hydration guards, and font initialization (Plus Jakarta Sans).
* `src/components/FloatingCard.tsx`: Reusable wrapper component for interactive floating capsules, handling custom coloring, animation speeds, rotations, and padding.
* `src/components/JohnDoePortalCard.tsx`: Dedicated template for the John Doe Portal custom pill card content.
* `src/components/ThemeToggle.tsx`: Theme toggle button for switching between light and dark visual modes.
* `src/app/globals.css`: Animations, custom utility classes, and theme color variables.

## Getting Started

First, install dependencies:
```bash
npm install
```

Next, run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
