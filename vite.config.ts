/*
 * @Author: wangDong Xu
 * @Date: 2022-10-23 17:32:47
 * @LastEditors: wangDong Xu
 * @LastEditTime: 2022-10-23 17:32:49
 * @Description: file content
 * @FilePath: /vue3-management-system/vite.config.ts
 * @motto: It's not hard to give up, but it must be cool to persist.
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import vue from "@vitejs/plugin-vue";
import { createStyleImportPlugin, ElementPlusResolve } from "vite-plugin-style-import";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: "element-plus",
          esModule: true,
          resolveStyle: (name: string) => {
            return `element-plus/theme-chalk/${name}.css`;
          }
        }
      ]
    })
  ],
  server: {
    open: true // 浏览器自动打开
  },
  build: {
    outDir: "front",
    assetsDir: "assets",
    sourcemap: false,
    minify: "terser",
    // 打包优化
    rollupOptions: {
      input: "index.html",
      output: {
        // 静态资源打包做处理
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "[ext]/[name]-[hash].[ext]",
        manualChunks: {
          vue: ["vue", "vue-router"],
          ElementPlus: ["element-plus"]
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
