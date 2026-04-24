import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: [
        './src/a.css.ts',
        './src/b.css.ts',
      ],
      formats: ['es'],
    }
  },
  plugins: [react(), vanillaExtractPlugin()],
})
