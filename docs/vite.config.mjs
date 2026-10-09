import { defineConfig } from "vite";
import { resolve } from "path";

// Explicitly tell Vite to use docs/tsconfig.json only,
// preventing it from walking up and finding the root tsconfig
// which extends @react-native/typescript-config (not available in this workspace).
export default defineConfig({
  resolve: {
    alias: {},
  },
});
