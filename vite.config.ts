import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
const path = require("path");

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  resolve: {
    alias: {
      "@uikit": path.resolve(__dirname, "./src/uikit"),
      "@shared": path.resolve(__dirname, "./src/shared"),
    },
  },
});
