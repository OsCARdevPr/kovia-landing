/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        base: {
          900: '#090a0e',
          800: '#12141a',
          700: '#171a22',
        },
        brand: {
          DEFAULT: '#b12b24',
          dark: '#760504',
          gold: '#FFD700',
        },
      },
      fontFamily: {
        sans: ['JetBrains Mono', 'system-ui', 'sans-serif'],
        display: ['Neo Tech', 'JetBrains Mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
