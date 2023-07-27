/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    options: {
      safelist: [
        /^gb-/,
        /^to-/,
        /^from-/,
      ],
    },
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
}
