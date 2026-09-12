import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: [
        '**/public/images/torn-paper.png',
        '**/public/images/torn-paper.png.~tmp',
        '**/*.~tmp',
      ],
    },
  },
})