/* eslint-env node */

function quoteWrapped(filenames) {
  return filenames.map((f) => `'${f}'`).join(' ');
}

module.exports = {
  '*.{js,ts,vue,jsx,tsx,json,css,cjs}': (filenames) => `prettier --write ${quoteWrapped(filenames)}`,
  // '**/*.ts?(x)': (filenames) => `tsc --noEmit --pretty ${quoteWrapped(filenames)}`,
  '*.{js,ts,vue,jsx,tsx,cjs,mjs,mdx}': (filenames) => `npx run eslint -- ${quoteWrapped(filenames)}`,
};
