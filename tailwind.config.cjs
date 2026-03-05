/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./maf-tailwind-preset.cjs')],
  content: ['./index.html', './src/**/*.{js,jsx}'],
};
