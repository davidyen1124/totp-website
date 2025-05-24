import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],

  // GitHub Pages configuration (because paths are apparently hard)
  base: command === 'build' ? '/totp-website/' : '/',

  // Build configuration (optimizing our over-engineered masterpiece)
  build: {
    outDir: 'dist',
    // Generate source maps because debugging in production is fun
    sourcemap: true,
    // Optimize chunks because apparently we care about performance now
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks (because organization matters)
          vendor: ['react', 'react-dom'],
          crypto: ['otpauth'],
          ui: ['qrcode']
        }
      }
    }
  }
}))
