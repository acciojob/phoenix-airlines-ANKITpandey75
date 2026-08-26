import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The original Accio boilerplate uses .js files for React components.
// Include those files so Vite parses their JSX correctly.
export default defineConfig({
  plugins: [react({ include: '**/*.{js,jsx}' })],
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' }
    }
  }
});
