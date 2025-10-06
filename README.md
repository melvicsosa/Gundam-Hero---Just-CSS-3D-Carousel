# Gundam Hero Carousel

A simple 3D hero carousel built with React and Vite, styled entirely with PostCSS modules. The slides transition using layered transforms and perspective tricks in pure CSS—no JavaScript animation libraries required.

## Tech Stack
- Vite for fast dev server and optimized builds
- React for component-based UI structure
- PostCSS (`.pcss`) for scoped styles and modern CSS tooling

## Getting Started
1. Install dependencies: `npm install`
2. Run the dev server: `npm run dev`
3. Build for production: `npm run build`

## Project Notes
- Carousel motion is handled with CSS keyframes, perspective, and transforms to simulate depth.
- Components live in `src/components`, while shared styles are under `src/styles`.
- Customize slide content and theme colors inside `Hero.jsx` and the accompanying PostCSS files.
