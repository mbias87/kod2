# One-Page Chiropractic Site (Eleventy + LESS)

Single-page website scaffold built with Eleventy and LESS.

## Commands

- `npm start` - run local dev server
- `npm run build` - production build to `public/`

## Project Structure

- `src/index.html` - only page template
- `src/_includes/layouts/base.html` - base HTML layout
- `src/assets/less/root.less` - global/base styles
- `src/assets/less/critical.less` - above-the-fold styles
- `src/assets/less/local.less` - page section styles
- `src/config/processors/less.js` - LESS -> CSS pipeline
- `src/_data/client.js` - contact and site metadata

## Notes

- This repo is intentionally trimmed for one-page deployments.
- Legacy CMS/blog/multi-page starter-kit files were removed.
# kod2
