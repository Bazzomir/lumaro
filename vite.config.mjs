import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), visualizer({ open: true })],
  base: "/lumaro",
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          aos: ['aos'],
        },
      },
    },
    drop: ['eval'],
    chunkSizeWarningLimit: 1000,
  }
})
