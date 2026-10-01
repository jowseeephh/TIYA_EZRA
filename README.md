# Into the Wild — Hiking Photo Gallery

A static, image-first hiking memory website. Plain HTML, CSS and vanilla JavaScript — no build step, no backend.

## Run locally
Open `index.html` in a browser, or use the VS Code "Live Server" extension.

## Replace the photos
All image URLs live at the top of `script.js` in the `IMAGES` object:

- `hero`, `moment1`, `moment2`, `explore` — the four full-screen images
- `gallery` — the collage. Each entry has `src`, `alt`, a title `t`, a caption `m`, and a shape `c` (`tall`, `wide`, `sq`, `big`, `xwide`)
- `timeline` — the five trail stops with a time, title and photo

To use your own photos, put them in an `images/` folder and set `src: 'images/ridge.jpg'`. Resize them to about 1600px wide first so the page stays fast. Keep the `alt` text descriptive.

Some Unsplash photo IDs may be removed over time. If an image fails to load, swap in another URL.

## Deploy to GitHub Pages
1. Push this folder to a GitHub repository.
2. In the repo, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Your site appears at `https://<username>.github.io/<repo>/`.

## Features
Cinematic hero, glass navigation, scroll progress bar, asymmetrical collage, parallax, timeline, keyboard and swipe lightbox, mobile menu, and reduced-motion support.
