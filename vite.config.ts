import path from 'path';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'toraViewer',
      fileName: (format) => `tora-viewer.${format}.js`,
    },
    outDir: 'dist/lib',
    minify: 'terser',
  },
  esbuild: {
    jsxFactory: 'jsxFactory.h',
    jsxFragment: 'jsxFactory.fragment',
  },
  plugins: [cssInjectedByJsPlugin()],
  server: {
    host: '0.0.0.0',
  },
});
