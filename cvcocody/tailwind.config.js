/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // violet et vert du logo CVC
        brand: {
          50: '#fbf5fd',
          100: '#f5e8fa',
          200: '#ead0f4',
          300: '#d9a9ea',
          400: '#c276db',
          500: '#a945c6',
          600: '#9129ac',
          700: '#78208d',
          800: '#641d74',
          900: '#531c5f',
          950: '#2a0a33',
        },
        leaf: {
          50: '#f1faf1',
          100: '#dff3e0',
          200: '#c0e6c2',
          300: '#93d397',
          400: '#62ba68',
          500: '#4caf50',
          600: '#2f8a35',
          700: '#286e2d',
          800: '#245728',
          900: '#1f4823',
        },
        ink: '#1c0b24',
        paper: '#fbf9fc',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(28, 11, 36, 0.04), 0 12px 32px -12px rgba(28, 11, 36, 0.18)',
        lift: '0 2px 4px rgba(28, 11, 36, 0.05), 0 24px 48px -16px rgba(83, 28, 95, 0.35)',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        rise: 'rise 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        ticker: 'ticker 40s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
