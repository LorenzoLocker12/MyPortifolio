# Lorenzo Locker — Portfolio

Creative data-scientist portfolio: a WebGL particle universe (React + Three.js) that morphs
into a different shape for each section as you scroll — galaxy → globe → bar chart →
neural network → wavefield → atom → torus.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build for production

```bash
npm run build    # output in dist/
npm run preview  # test the production build locally
```

## Edit content

All text lives in one file: [`src/data/content.js`](src/data/content.js) — profile, stats,
experience, projects, skills, education, links. Replace `public/Lorenzo_Locker_CV.pdf` to
update the downloadable CV.

Particle shapes & colors: [`src/three/shapes.js`](src/three/shapes.js). Particle count,
camera, and motion: [`src/three/ParticleUniverse.jsx`](src/three/ParticleUniverse.jsx).

## Deploy

The build is fully static (`base: './'`), so any static host works.

**Vercel (easiest):** import the repo at vercel.com — framework preset "Vite", done.

**GitHub Pages:**

```bash
git init && git add -A && git commit -m "portfolio"
# create a repo on GitHub, then:
git remote add origin https://github.com/LorenzoLocker12/<repo>.git
git push -u origin main
npm run build
# publish dist/ with the gh-pages package:
npx gh-pages -d dist
```

Then enable Pages → `gh-pages` branch in the repo settings.
