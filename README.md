# Amphitheater Landing Page

Marketing landing page for Amphitheater, built with React, TypeScript, Vite, and Tailwind CSS. The page focuses on a minimalist hero, app marketplace badges, and a rich footer with social, company, and legal navigation.

## Features

- Responsive hero layout centered on the brand logo, tagline, and download CTAs.
- Tailwind CSS theme tokens powering brand colors and typography defined in `src/index.css`.
- Accessible SVG icons for App Store, Google Play, and footer navigation elements.
- Footer grid that adapts between mobile, tablet, and desktop breakpoints.
- Zero-JavaScript runtime beyond React components; ideal for static hosting.

## Tech Stack

- React 19 + TypeScript in Strict Mode.
- Vite 7 for local dev server and production builds.
- Tailwind CSS v4 via the `@tailwindcss/vite` plugin.
- ESLint with TypeScript rules for consistent linting.

## Project Structure

```
CreateShare-Website/
├── public/                # Static assets exposed at the site root
│   ├── app_icon.jpg
│   ├── logo.jpg
│   ├── logo-footer.jpg
│   └── logo_dark_blue.png
├── src/
│   ├── App.tsx            # Renders the landing page component
│   ├── Landing.tsx        # Main layout, hero, and footer content
│   ├── index.css          # Tailwind directives + brand theme tokens
│   ├── main.tsx           # React entry point
│   └── vite-env.d.ts
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Getting Started

1. Install Node.js 18 or newer.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the local dev server:
   ```sh
   npm run dev
   ```
4. Visit the URL printed in the terminal (usually `http://localhost:5173`) and the landing page will hot-reload as you edit files in `src/`.

## Available Scripts

- `npm run dev` – start the Vite development server with hot module replacement.
- `npm run build` – type-check via `tsc -b` and create an optimized production build in `dist/`.
- `npm run preview` – serve the contents of `dist/` locally to verify the production bundle.
- `npm run lint` – run ESLint across the project.

## Styling and Theming

- Brand colors, font families, and global layout defaults are centralized inside `src/index.css`.
- Tailwind utility classes reference those theme tokens (for example, `bg-brand-blue` and `font-garamond`).
- Update the logo or imagery by dropping new files in `public/` and adjusting the `img` `src` attributes in `Landing.tsx`.
- Replace the placeholder App Store / Google Play links and footer URLs with production destinations before launch.

## Production Build

```sh
npm run build
```

The optimized HTML, CSS, JavaScript, and referenced assets will be placed in `dist/`. Deploy the entire `dist/` folder contents to your hosting provider.

---

## Next Steps

- Swap in production download links and social URLs.
- Extend the footer or hero with additional content blocks as the product evolves.
