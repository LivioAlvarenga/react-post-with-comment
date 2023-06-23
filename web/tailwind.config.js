/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tBlack: '#232323',
        tWhite: '#f5f5f5',
        tGray: '#AFAFAF',
        tForm: '#666666',
        bgLight: '#e5e7eb',
        bgLightest: '#e0e0e0',
        bgDark: '#39322f',
        bgDarkest: '#1a1a1a',
        brandPrimary: '#3249a5',
        brandSecondary: '#318fbe',
        brandTertiary: '#100f0d',
        brandAccent: '#ed1c24',
      },
    },
  },
  plugins: [],
}
