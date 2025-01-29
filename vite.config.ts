import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/steam': {
        target: 'https://api.steampowered.com/',
        changeOrigin: true,
        rewrite(path) {
          return path.replace(/^\/steam/, '')
        },
      }
    }
  }
})