import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/lumaro",
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          aos: ['aos'],
        },
      },
    }
  }
})
