/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#20042D',
        'danger': '#FF5252',
        'grayish-black': '#141313',
        'bluish-black': '#08080D',
        'blue': '#2F80ED',
        'ongoing': '#CA8A04'
      },
    },
  },
  plugins: [],
}

