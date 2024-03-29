import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'sass';
// import svgPlugin from 'vite-svg-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   port: 3001,
  // },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        outputStyle: 'expanded', // Other options: 'nested', 'compact', 'compressed', etc.
        sourceMap: true, // or false to disable source maps
      }
    }
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://www.omdbapi.com/',   // Replace with API endpoint
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
  // root: './src',
})
