import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/snappable.js',
      name: 'Snappable',
      fileName: 'snappable'
    },
    rollupOptions: {
      output: {
        format: 'es'
      }
    }
  }
});
