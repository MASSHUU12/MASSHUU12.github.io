import path from "path";
import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    manifest: true,
  },
  plugins: [preact(), tsconfigPaths()],
  resolve: {
    alias: {
      src: path.resolve("src/"),
      cmp: path.resolve("./src/components"),
      common: path.resolve("./src/components/common"),
      sections: path.resolve("./src/components/sections"),
      utils: path.resolve("./src/utils"),
      features: path.resolve("./src/features"),
    },
  },
});
