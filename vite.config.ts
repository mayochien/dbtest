import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  base: "/dbtest/",
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        // This will transform your SVG to a React component
        exportType: "named",
        namedExport: "ReactComponent",
      },
    }),
    [tsconfigPaths()],
  ],
  build: {
    minify: "terser", // 使用 terser 進行更徹底的代碼壓縮
    terserOptions: {
      compress: {
        drop_console: true, // 移除 console 語句
        pure_funcs: ["console.log"], // 移除指定的函數調用
      },
    },
  },
});
