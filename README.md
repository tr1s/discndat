# Disc ‘n Dat

Two-page brochure website: Home (`/`) and Brands (`/brands`). Both pages share
the contact form and location section. Content lives in the source files; there
is no CMS or online store.

## Existing stack

The lockfile pins Next.js 10.0.7, React 17.0.1, Sass 1.32.8, and the Netlify
Next.js plugin 2.0.1. The repository uses npm. Netlify configuration is in
`netlify.toml`; the contact form uses Netlify Forms.

## Running this legacy checkout

Verified on September 28, 2026 with **Node 16.12.0** on Apple Silicon:

```sh
npm ci --ignore-scripts
npm run dev
```

Run those commands with Node 16.12.0 selected for this shell. Node 24.21.0 fails
with `ERR_PACKAGE_PATH_NOT_EXPORTED` in the locked PostCSS 8.1.7 dependency.
Node 16 is end-of-life: this is a temporary way to reproduce the old site, not a
supported runtime recommendation for new work or ongoing hosting.

`--ignore-scripts` avoids the old optional native dependency installers. This
site uses ordinary image elements and does not use `next/image`. The old Sharp
native image optimizer is not initialized by this setup; adding image
optimization requires a separate dependency update.

```sh
npm run build
npm run start
```

There are no lint or test scripts. Verify Home and Brands in a browser, including
the location section at mobile widths. Production builds still emit legacy
PostCSS and Browserslist warnings.

## Content updates

- Address, hours, and map link: `src/components/location.js`
- Location layout: `src/components/location.module.scss`
- Homepage copy: `src/pages/index.js`
- Brand list: `src/pages/brands.js`
- Contact form: `src/components/form.js`

The location map is a static image (`public/map.jpg`) that links to
Google Maps. The original 500px section and responsive positioning are preserved.
The previous image is retained as `public/map-old.jpg` and is no longer displayed.

## Deployment

The existing config runs `npm run build`, publishes `out`, and loads the legacy
Netlify Next.js plugin. The Netlify account/build settings and active GitHub
integration must be checked before deploying; a local Next build does not verify
the Netlify adapter or form delivery. Pushing the connected branch may trigger a
live deployment.

Keep a framework/runtime migration separate from small content updates. If the
site is retained, update to supported dependencies and verify Netlify deployment
and Forms together. If a replacement site is supplied, review its stack, form
handling, hosting, and maintenance scope before replacing this project.
