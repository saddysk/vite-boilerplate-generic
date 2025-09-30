import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
import { fileURLToPath } from 'url';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
const htmlPlugin = () => {
  if (process.env.NODE_ENV !== 'production') {
    return {
      name: 'html-transform',
      transformIndexHtml(html: string) {
        return html;
      },
    };
  }

  return {
    name: 'html-transform',
    transformIndexHtml(html: string) {
      return html.replace(
        /<!--analytics-code-->/,
        `
        // SCRIPT HERE
        `
      );
    },
  };
};

export default ({ mode }) => {
  return defineConfig({
    plugins: [react(), tailwindcss(), svgr(), visualizer(), htmlPlugin()],
    server: {
      port: process.env.PORT ? Number(process.env.PORT) : 3000,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@ui': fileURLToPath(new URL('./src/components/ui', import.meta.url)),
      },
    },
    define: {
      global: 'globalThis',
    },
    // workaround https://github.com/vitejs/vite/issues/8644
    esbuild: {
      logOverride: { 'this-is-undefined-in-esm': 'silent' },
    },
  });
};
