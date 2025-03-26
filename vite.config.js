import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    plugins: [react(), tailwindcss()],
    base: '/',
    server: {
      host: '0.0.0.0',
      port: process.env.PORT || 3000,
      strictPort: true,
      cors: true,
      hmr: {
        clientPort: 443,
      },
      allowedHosts: ['destination-log.onrender.com'], 
    },
    preview: {
      host: '0.0.0.0',
      port: 4173,
      strictPort: true,
    }
  };
});
