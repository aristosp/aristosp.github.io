# Aristeidis Papadopoulos — Astro personal website

A dark, research-focused academic website built with Astro, TypeScript and Tailwind CSS for GitHub Pages at `https://aristosp.github.io`.

## Migrated from the supplied Jekyll site

The redesign uses the supplied repository archive as its content source. It migrates:

- The profile identity, public contact details and social/profile links from `_config.yml`.
- The research topics supported by the actual publication abstracts and project descriptions.
- Three substantive publication records: ASRU 2025, UKIS 2025 and ICPR 2026.
- Five teaching assistant records from the `_teaching` collection.
- Both project descriptions from `_portfolio`, including their original repository links and images.
- The education, work experience and skills written in `_pages/cv.md`.
- The supplied profile image, original image assets and files under `files/`.
- Compatibility pages for the former home/about, CV, publication and teaching URLs.

The AcademicPages demo publications, demo talks, sample blog posts and placeholder CV JSON were not presented as the owner's work. The original source archive remains the authority for all migrated content.

## Run locally

Requires Node.js 22.22.1+ (and npm 10.8.2+); Node 22 is recommended.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Astro writes the static site to `dist/`.

## Deploy to GitHub Pages

1. Commit and push this project to the `main` or `master` branch of `aristosp/aristosp.github.io`.
2. In GitHub, open **Settings → Pages**.
3. Set **Build and deployment → Source** to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds the site and deploys the `dist/` directory.
5. Verify the run in the Actions tab and check the published site.

This is a user/organization site repository, so it is configured for the domain root and does not use a project sub-path.

## Content updates

- Site identity and navigation: `src/data/site.ts`
- Research, publications, projects, teaching and CV content: `src/data/content.ts`
- Page layouts: `src/pages/`
- Global styling: `src/styles/global.css`
- Static images and downloadable documents: `public/images/` and `public/files/`

### Examples

- **Add or edit CV experience:** In `src/data/content.ts`, update an item in `cvSections`. For example, add `{ period: "2026–present", title: "Research Fellow", organisation: "Example University" }` to the appropriate section's `items` array. The CV page renders these entries automatically.
- **Add a publication:** Add an object to `publications` in `src/data/content.ts` with fields such as `year`, `type`, `title`, `authors`, `venue`, `summary` and `citation`. Put a PDF in `public/files/` and set `paper` and `localPaper` to its site path, such as `"/files/example-paper.pdf"`.
- **Change page wording or structure:** Edit the relevant Astro file under `src/pages/`. For example, the homepage hero text is in `src/pages/index.astro`; content shared with other pages should generally live in `src/data/content.ts`.
- **Add a downloadable file or image:** Place it in `public/files/` or `public/images/`, then reference it by its root path, such as `"/files/example-cv.pdf"` or `"/images/example-photo.jpg"`. The current CV PDF path is configured as `site.cv` in `src/data/site.ts`.

## Notes

- The CV page links to `public/files/Aristeidis_Papadopoulos_CV.pdf`.
- The ASRU entry links to its local PDF at `public/files/ASRU_2025.pdf` and its IEEE publication record via DOI.
- The talks collection in the supplied repository contains only AcademicPages example entries; those examples are intentionally not displayed.
- Compatibility routes are static redirect pages. If a URL has meaningful external backlinks, test it after deployment.
- The Astro build has not yet been verified in this environment; run `npm install` and `npm run build` before enabling the new deployment workflow.
