import { defineConfig } from "vite";
import { defineConfig as defineVitestConfig } from "vitest/config";

import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import react from "@vitejs/plugin-react";

// For general Vite configuration
export default defineConfig({
  plugins: [react(), viteCommonjs()],
});

// For Vitest specific configuration
export const testConfig = defineVitestConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.ts",
  },
});
