import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // relative base so the build works on GitHub Pages project sites and any static host
  base: './',
  optimizeDeps: {
    include: ['react', 'react-dom/client', 'three', '@react-three/fiber'],
  },
});
