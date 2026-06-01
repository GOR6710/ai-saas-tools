import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#2563eb', 50: '#eff6ff', 100: '#dbeafe', 600: '#2563eb', 700: '#1d4ed8' },
        secondary: { DEFAULT: '#1e293b', 50: '#f8fafc', 100: '#f1f5f9', 800: '#1e293b', 900: '#0f172a' },
      },
    },
  },
  plugins: [],
}
export default config