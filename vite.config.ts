import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import stylelint from "vite-plugin-stylelint";

const resolve = (p: string) => {
  return path.resolve(__dirname, p);
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), stylelint({ fix: true })],
  resolve: {
    alias: {
      "@utils": resolve("./src/utils"),
      "@components": resolve("./src/components"),
      "@pages": resolve("./src/pages"),
      "@styles": resolve("./src/styles"),
      "@model": resolve("./src/model"),
      "@types": resolve("./src/types")
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        additionalData: '@import "./src/styles/mixin.scss";',
      },
    },
  },
});
