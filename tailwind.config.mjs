/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#001e3d',
          800: '#00294f',
          700: '#003366',
        },
        brand: {
          DEFAULT: '#001e3d',
          light: '#0047ab',
          accent: '#1D9BF0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
