import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [react(), visualizer({ open: true })],
  base: "/lumaro",
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          aos: ['aos'],
          lottie: ['lottie-react', 'lottie-web'],
        },
      },
    },
    drop: ['eval'],
    chunkSizeWarningLimit: 1000,
  }
})
