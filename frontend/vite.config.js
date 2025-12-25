import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allow access from Render.com domains for testing
    allowedHosts: ['localhost', '127.0.0.1', '.onrender.com'],
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 4173,
    allowedHosts: [
      'mechanicsitedemo.onrender.com',
      '.onrender.com' // Allow all Render.com subdomains
    ],
    // Ensure SPA routing works - serve index.html for all routes
    middlewareMode: false
  }
})

