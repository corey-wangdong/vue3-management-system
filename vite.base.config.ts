import { defineConfig } from "vite";

export default defineConfig(
  {
    optimizeDeps:{
      exclude:[]
    },
      resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  }
)
