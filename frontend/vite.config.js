import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allow access from Render.com domains for testing
    allowedHosts: ['localhost', '127.0.0.1', '.onrender.com'],
  }
})

