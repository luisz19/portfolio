import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'vendor_framer';
            if (id.includes('react') || id.includes('react-dom')) return 'vendor_react';
            if (id.includes('three')) return 'vendor_three';
            return 'vendor';
          }
        }
      }
    }
  }
})
