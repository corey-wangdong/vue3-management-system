import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv, type ConfigEnv } from "vite";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from "@vitejs/plugin-vue";
import {
  createStyleImportPlugin,
  ElementPlusResolve
} from 'vite-plugin-style-import'

// import  viteBaseConfig from './vite.base.config.ts';
// import  viteDevConfig from './vite.dev.config';
// import  viteProdConfig from './vite.prod.config'


// const envResolver = {
//   "build": () => {
//     console.log('生产环境');

//     return ({ ...viteBaseConfig, ...viteProdConfig})
//   },
//   "serve": () => {
//     console.log('其它环境');
//     return ({ ...viteBaseConfig, ...viteDevConfig})
//   }
// }

export default defineConfig(({command, mode}: ConfigEnv) => {
  console.log('command----------',command);
  console.log('process.cwd()----------',process.cwd());
  console.log('mode----------',mode);
const env = loadEnv(mode, process.cwd(),'')
console.log('env----------',env);

  // return envResolver[command]();

  return {
      resolve: {
        alias: {
          "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
      }
  }
})


// export default defineConfig({
//   plugins: [vue(),
//     AutoImport({
//       resolvers: [ElementPlusResolver()],
//     }),
//     Components({
//       resolvers: [ElementPlusResolver()],
//       dirs: ['src/'], // 按需加载的文件夹
//     }),
//     createStyleImportPlugin({
//       resolves: [ElementPlusResolve()],
//       libs: [
//         {
//           libraryName: 'element-plus',
//           esModule: true,
//           resolveStyle: (name: string) => {
//             return `element-plus/theme-chalk/${name}.css`
//           }
//         }
//       ]
//     })
//   ],
//   server:{
//     open: true, // 浏览器自动打开
//   },
//   build:{
//     // target: 'modules',
//     outDir:'front',
//     // 打包后静态资源目录
//     assetsDir: "assets",
//     sourcemap: false,
//     // Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效
//     // minify:'terser',
//     // terserOptions: {
//     //   compress: {
//     //     drop_console: true,
//     //     drop_debugger: true
//     //   },
//     //   format: {
//     //     comments: false
//     //   }
//     // },
//     // chunkSizeWarningLimit: 1000,
//     // 打包优化
//     rollupOptions: {
//       input: 'index.html',
//       output: {
//         // 静态资源打包做处理
//         chunkFileNames: 'js/[name]-[hash].js',
//         entryFileNames: 'js/[name]-[hash].js',
//         assetFileNames: '[ext]/[name]-[hash].[ext]',
//         // manualChunks(id) {
//         //   if (id.includes('node_modules')) {
//         //     return id.toString().split('node_modules/')[1].split('/')[0].toString();
//         //   }
//         // }
//       }
//     }
//   },
//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url)),
//     },
//   },
// });
