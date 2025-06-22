export default {
    content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@heroui/react/**/*.{js,ts,jsx,tsx}', // 👈 required for HeroUI styles
  ],
  theme: {
    extend: {},
  },

  plugins: {
    "@tailwindcss/postcss": {},
  }
}
