import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  json: {
    stringify: true // JSON dosyalarını import edilebilir hale getirir
  }
})
