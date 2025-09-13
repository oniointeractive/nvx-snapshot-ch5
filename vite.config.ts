import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  build: {
    outDir: "build",
    // (opcionalno) sourcemap: true,
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/@crestron/ch5-crcomlib/build_bundles/umd/cr-com-lib.js",
          dest: "", // kopira na root: /cr-com-lib.js
        },
      ],
    }),
    viteSingleFile(),
  ],
});
