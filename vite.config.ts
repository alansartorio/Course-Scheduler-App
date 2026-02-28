import { svelte } from "@sveltejs/vite-plugin-svelte";
import * as path from "path";
import { defineConfig } from "vite";
import { viteMockServe } from "vite-plugin-mock";
import postcssConfig from "./postcss.config.js";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [wasm(), topLevelAwait(), svelte(), viteMockServe()],
  css: {
    postcss: postcssConfig,
  },
  resolve: {
    alias: {
      "scheduler-wasm": "@course-scheduler-app/scheduler-wasm",
      src: path.resolve(__dirname, "./src"),
    },
  },
});
