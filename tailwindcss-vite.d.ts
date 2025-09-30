declare module '@tailwindcss/vite' {
  import type { Plugin } from 'vite';

  interface TailwindCSSOptions {
    // Add any specific options if needed
  }

  function tailwindcss(options?: TailwindCSSOptions): Plugin;
  export default tailwindcss;
}
