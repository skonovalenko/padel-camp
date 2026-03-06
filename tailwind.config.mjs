import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#0a2c5c',
        action: '#ff4d00',
        bg: '#f0f0f0',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        anton: ['"Anton SC"', 'sans-serif'],
        roboto: ['"Roboto Flex"', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.btn-primary': {
          '@apply bg-action text-white font-inter font-bold rounded-[8px] hover:bg-orange-600 transition-colors inline-flex items-center justify-center whitespace-nowrap shadow-[0px_2px_8px_0px_rgba(255,77,0,0.25)]': {},
        },
        '.form-input': {
          '@apply bg-main/[0.03] border border-main rounded-[8px] w-full px-3 font-inter text-main focus:outline-none focus:ring-2 focus:ring-action': {},
        },
        '.form-label': {
          '@apply font-inter font-semibold text-[12px] text-main': {},
        },
        '.outline-tag': {
          '@apply border border-bg/50 rounded-[28px] h-[28px] inline-flex items-center px-[8px] gap-[8px]': {},
        },
      });
    }),
  ],
};
