import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        lightOnOff: {
          '0%, 100%': {
            backgroundColor: 'rgb(31 41 55)',
            color: 'rgb(229, 231, 235)',
          }, // Dark mode
          '50%': {
            backgroundColor: 'rgb(250 204 21)',
            color: 'rgb(31, 41, 55)',
          }, // Light mode
        },
      },
      animation: {
        lightOnOff: 'lightOnOff 2s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
