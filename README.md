## Amphitheater Landing Experience

React + TypeScript marketing microsite for Amphitheater. The build now includes a dedicated “Our Mission” page that shares the story behind the brand while staying consistent with the landing page aesthetic.

## Highlights

- Hero screen with app-store CTAs, brand imagery, and copy set in the Garamond-inspired palette.
- Footer navigation that surfaces social channels, a mailto contact, and a router-powered `Our Mission` link.
- Mission subpage (`/mission`) styled with the same Tailwind theme tokens so you can drop in long-form copy without reworking layout.
- Tailwind CSS theme variables configured in `src/index.css` power consistent typography, color, and spacing.
- Vite 7 for rapid development, TypeScript for strict typing, ESLint for linting.

## Project Structure

```
CreateShare-Website/
├── public/                # Static assets exposed at the site root
│   ├── app_icon.jpg
│   ├── logo.jpg
│   ├── logo-footer.jpg
│   └── logo_dark_blue.png
├── src/
│   ├── App.tsx            # Router shell wiring landing + mission routes
│   ├── Landing.tsx        # Main landing layout
│   ├── Mission.tsx        # Mission page placeholder content
│   ├── index.css          # Tailwind + brand theme tokens
│   ├── main.tsx           # React entry point
│   └── vite-env.d.ts
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Prerequisites

- Node.js 22 (or any version ≥ 20.18.0). The PostCSS pipeline relies on `crypto.hash`, introduced in Node 20.18.
- npm 10+ (ships with Node 22). Other package managers work too; adjust commands accordingly.

## Setup

1. Install dependencies (installs `react-router-dom` for routing):
   ```sh
   npm install
   ```
2. Start the dev server:
   ```sh
   npm run dev
   ```
3. Visit the URL shown in the terminal (usually `http://localhost:5173`). The landing page and mission page hot-reload as you edit files in `src/`.

## Available Scripts

- `npm run dev` – launch Vite with HMR.
- `npm run build` – run TypeScript’s project references and emit the optimized Vite production bundle.
- `npm run preview` – preview the production build locally.
- `npm run lint` – lint all source files via ESLint.

## Styling Notes

- Theme tokens live in `src/index.css` under the `@theme` block. Update colors or typography once and Tailwind utilities (e.g., `bg-brand-blue`) follow suit.
- Logos and imagery come from `public/`. Swap assets there; references use root-relative paths like `/logo_dark_blue.png`.
- Mission page typography is ready for long-form copy—replace the placeholder paragraphs in `src/Mission.tsx` with the real mission statement.

## Production Build

```sh
npm run build
```

`dist/` will contain hashed JS, CSS, and assets. Deploy that folder to your static host (Netlify, Vercel, GitHub Pages, etc.). The `/mission` route works because the build uses client-side routing—configure your host to serve `index.html` for unknown paths.

## Next Steps

- Add real copy to `Mission.tsx` and replace placeholder social/app links with production URLs.
- Install analytics or tracking scripts in `index.html` or via Squarespace injections.
- After updating copy, re-run `npm run build` to refresh the `dist/` bundle before redeploying.
