/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'feral-dark': '#0F084B',
        'feral-steel': '#126899',
        'feral-sky': '#9BB1FF',
        'feral-turquoise': '#17BEBB',
        'feral-orange': '#F26419',
      },
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px',
      },
    },
  },
  plugins: [],
};
