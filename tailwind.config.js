/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-background': "url('/header_background.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "primary-black": "#222222",
        "primary-green": "#5BBB7B",
        "primary-dark-green": "#1F4B3F",
        "primary-gray": "#E9E9E9",
        "muted": "#6B7177",
        "yellow": "#E1C03F",
        "pink": "#FFEDE8",
      }
    },
  },
  plugins: [],
}
