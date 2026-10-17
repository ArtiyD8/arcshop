import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { arcshopApi } from './server/index.ts';

export default defineConfig({
  plugins: [react(), arcshopApi()],
  server: { port: 5173 },
  build: { target: 'es2022', sourcemap: false },
});
