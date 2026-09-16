import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#7A1E22',
          dark: '#5C1519',
          light: '#9C2A2F',
        },
        gold: {
          DEFAULT: '#C99A3A',
          dark: '#A87D2A',
          light: '#E0BC6C',
        },
        charcoal: {
          DEFAULT: '#221F1D',
          light: '#3A3532',
        },
        paper: '#F7F2E9',
        paperdim: '#EFE7D8',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        devanagari: ['var(--font-devanagari)', 'sans-serif'],
      },
      backgroundImage: {
        'road-stripe':
          'repeating-linear-gradient(90deg, currentColor 0px, currentColor 28px, transparent 28px, transparent 48px)',
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
};

export default config;
