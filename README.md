# Blanc Salon — React Salon Website

A modern, responsive, frontend-only salon website built with React, Vite, Framer Motion and Lucide icons.

## Requirements
- Node.js 20+ (Node 20 LTS recommended)
- npm
- Git

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Build and test production output

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages (recommended: automatic)

1. Create a GitHub repository. The included GitHub Actions workflow supports any repository name.
2. Extract this ZIP and open a terminal in the `salon-studio` folder.
3. Initialize Git and push the project to the repository's `main` branch:

```bash
git init
git add .
git commit -m "Create salon studio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

4. On GitHub, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
5. Open the **Actions** tab and wait for “Deploy salon-studio to GitHub Pages” to finish.
6. Your website will be available at `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`.

Every push to `main` will rebuild and deploy the site automatically.

## Deploy from your computer (alternative)

The `npm run deploy` script is configured for a repository named `salon-studio`:

```bash
npm install
npm run deploy
```

For a differently named repository, prefer the GitHub Actions method above, which sets the correct base path automatically.

## Personalize before publishing

Open `src/main.jsx` and replace the demo details:
- `Blanc Salon` salon name and brand copy
- New Delhi location and opening hours
- Phone number `+91 98765 43210`
- WhatsApp link `https://wa.me/919876543210...` (use country code + number, digits only)
- Instagram profile link
- Service names and starting prices

The images are loaded from Unsplash and Google Fonts load from Google Fonts, so those need an internet connection. This is a static frontend; booking is a WhatsApp link and there is no backend or online booking database.
