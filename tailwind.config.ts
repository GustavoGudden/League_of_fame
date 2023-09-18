import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#CDCDCD15',
          100: '#DBDBDB20',
        },
        gray: {
          500: '#6b7280',
        },
        white: '#FFFFFF',
        gold: '#CBAC4A',
      },
      dropShadow: {
        white: '0 10px 20px rgba(255, 255, 255, 0.3)',
      },
      backgroundImage: {
        homebg: "url('/public/background-image.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
