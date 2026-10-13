import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { authApi } from './server/auth-api';

export default defineConfig({
  plugins: [react(), authApi()],
  server: { port: 5173 },
  build: { target: 'es2022', sourcemap: false },
});
