import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "http://localhost:4321",
  base: "/",
  integrations: [
    starlight({
      title: "RN Expo Migration Showcase",
      description:
        "A step-by-step showcase of migrating a bare React Native app (with a standalone design system) to Expo, Expo Web, and automated screenshot capture.",
      social: [],
      sidebar: [
        {
          label: "Home",
          slug: "",
        },
        {
          label: "Overview",
          slug: "migration",
        },
        {
          label: "Migration Phases",
          items: [
            { label: "Phase 1 — Bare React Native", slug: "migration/phase-1-bare-rn" },
            { label: "Phase 2 — Expo SDK", slug: "migration/phase-2-expo" },
            { label: "Phase 3 — Expo Web", slug: "migration/phase-3-expo-web" },
            { label: "Phase 4 — Screenshots", slug: "migration/phase-4-screenshots" },
            { label: "Phase 5 — Astro Docs", slug: "migration/phase-5-astro-docs" },
          ],
        },
        {
          label: "Design System",
          items: [
            { label: "Overview", slug: "design-system" },
            { label: "ThemeProvider & useTheme", slug: "design-system/theme" },
            { label: "Heading", slug: "design-system/heading" },
            { label: "BodyText", slug: "design-system/body-text" },
            { label: "Button", slug: "design-system/button" },
            { label: "TopBar", slug: "design-system/top-bar" },
          ],
        },
      ],
    }),
  ],
});
