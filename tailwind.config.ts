import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Google Sans Flex"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          DEFAULT: '#B3CCF5',
          50: '#f4f8fe',
          100: '#e8f0fd',
          200: '#d5e4fb',
          300: '#B3CCF5',
          400: '#8fb5ef',
          500: '#6797e7',
          600: '#4376db',
          700: '#325ec5',
          800: '#2c4da0',
          900: '#27427f',
          950: '#1a294f',
        },
        sentiment: {
          pos: {
            DEFAULT: '#10b981',
            muted: 'rgba(16, 185, 129, 0.12)',
            border: 'rgba(16, 185, 129, 0.25)',
          },
          neu: {
            DEFAULT: '#71717a',
            muted: 'rgba(113, 113, 122, 0.12)',
            border: 'rgba(113, 113, 122, 0.25)',
          },
          neg: {
            DEFAULT: '#f43f5e',
            muted: 'rgba(244, 63, 94, 0.12)',
            border: 'rgba(244, 63, 94, 0.25)',
          },
        },
      },
      keyframes: {
        'marquee-slow': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'marquee-slow': 'marquee-slow 38s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
