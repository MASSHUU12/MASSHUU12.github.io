import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [preact(), tsconfigPaths()],
  resolve: {
    alias: {
      src: path.resolve('src/'),
    },
  }
})
