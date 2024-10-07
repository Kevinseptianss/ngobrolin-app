import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    fastRefresh: true,
  })],
  test: {
    environment: 'jsdom',
  },
  css: {
    preprocessorOptions: {
      styled: {
        styledComponents: true,
      },
    },
  },
})