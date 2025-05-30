/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#0a0a0a',
          darker: '#050505',
        },
        neon: {
          green: '#00ff00',
          blue: '#00ffff',
          purple: '#9900ff',
          red: '#ff0066',
        },
        terminal: {
          black: '#121212',
          gray: '#1e1e1e',
        }
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
        sans: ['"Roboto"', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '25%': { transform: 'translate(2px, -2px)' },
          '50%': { transform: 'translate(-2px, 2px)' },
          '75%': { transform: 'translate(1px, -1px)' },
        },
        scanline: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        glitch: 'glitch 0.5s ease-in-out infinite',
        scanline: 'scanline 6s linear infinite',
      },
    },
  },
  plugins: [],
};