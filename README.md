# Ryan Bousquet — Game Design Portfolio

Systems, economy, and live-ops design case studies. Plain HTML/CSS/JS, no
build step, no framework — ready to serve as-is from GitHub Pages.

## Structure

- `index.html` — the whole site (single page)
- `styles.css` — all styling
- `script.js` — lightbox for the screenshot galleries
- `assets/` — screenshots (full + thumbnail) and the two flow diagrams

## Deploying to GitHub Pages

1. Push this folder's contents to a GitHub repo (root of the repo, or a
   `/docs` folder — either works with Pages).
2. In the repo's **Settings → Pages**, set the source to the branch/folder
   you pushed to.
3. GitHub will publish it at `https://<username>.github.io/<repo-name>/`
   within a minute or two. A custom domain can be added later from the
   same Pages settings page.

## Editing

No build step — edit `index.html`/`styles.css` directly and refresh. To add
a new screenshot, drop it in the matching `assets/` subfolder, generate a
compressed + thumbnail version (images here were resized to ~1400px wide,
JPEG quality 80, with a ~480px-wide thumbnail alongside), then add a
`<button data-full="..." data-caption="...">` entry to the relevant gallery
in `index.html`.
