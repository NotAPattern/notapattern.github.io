import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import solidSvg from "vite-plugin-solid-svg";

export default defineConfig({
  plugins: [solidPlugin(), solidSvg(), ViteImageOptimizer(), ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@uikit', replacement: fileURLToPath(new URL('./src/uikit', import.meta.url)) },
      { find: '@shared', replacement: fileURLToPath(new URL('./src/shared', import.meta.url)) },
      { find: '@types', replacement: fileURLToPath(new URL('./src/types', import.meta.url)) },
      { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
      { find: '@public', replacement: fileURLToPath(new URL('./public', import.meta.url)) },
      { find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
    ],
  },
});
