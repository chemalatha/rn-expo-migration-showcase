---
title: Phase 5 — Astro Docs Site
description: Building this documentation site using Astro and Starlight, mirroring the dds-react-native docs framework independently.
---

## Goal

Build a local Astro + Starlight docs site inside `docs/` that:

- Documents all 5 migration phases with code diffs
- Embeds the screenshots captured in Phase 4
- Mirrors the framework pattern of `dds-react-native/apps/docs/` without copying files
- Is locally hostable and ready to deploy statically (GitHub Pages, Netlify, Vercel)

## Framework

| Tool | Version | Role |
|------|---------|------|
| [Astro](https://astro.build) | 7.3.2 | Static site generator |
| [@astrojs/starlight](https://starlight.astro.build) | 0.42.0 | Docs theme with sidebar, search, dark mode |

## Structure

```
docs/
├── package.json            # Astro + Starlight dependencies
├── astro.config.mjs        # Starlight sidebar config
├── tsconfig.json           # Extends astro/tsconfigs/strict
└── src/
    ├── content.config.ts   # Starlight docsLoader + docsSchema
    ├── assets/
    │   └── screenshots/    # PNGs from Phase 4 (copied in Phase 5)
    └── content/
        └── docs/
            ├── migration/  # Migration phase guides
            └── design-system/ # Standalone component API docs
```

## Running the docs site

```bash
cd docs
npm install
npm run dev     # http://localhost:4321
npm run build   # outputs to dist/
npm run preview # preview the built site
```

## Adding the root-level script

From the project root you can also run:

```bash
npm run docs
```

which is equivalent to `cd docs && npm run dev`.

## Branch

`phase-4/astro-docs` (branched from `phase-4/screenshots`)
