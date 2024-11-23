/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Courier New"', 'monospace'], // Default sans-serif
        mono: ['"Courier New"', 'monospace'], // Mono font
      },
    },
  },
}

