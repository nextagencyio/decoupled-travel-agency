/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-blue-100', 'text-blue-600',
    'bg-green-100', 'text-green-600',
    'bg-purple-100', 'text-purple-600',
    'bg-yellow-100', 'text-yellow-600',
    'bg-red-100', 'text-red-600',
    'bg-indigo-100', 'text-indigo-600',
    'bg-amber-100', 'text-amber-600',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-work-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary': {
          "50": "#f0f9ff",
          "100": "#e0f2fe",
          "200": "#bae6fd",
          "300": "#7dd3fc",
          "400": "#38bdf8",
          "500": "#0ea5e9",
          "600": "#0284c7",
          "700": "#0369a1",
          "800": "#075985",
          "900": "#0c4a6e",
          "950": "#082f49"
},
        'accent': {
          "50": "#fff7ed",
          "100": "#ffedd5",
          "200": "#fed7aa",
          "300": "#fdba74",
          "400": "#fb923c",
          "500": "#f97316",
          "600": "#ea580c",
          "700": "#c2410c",
          "800": "#9a3412",
          "900": "#7c2d12",
          "950": "#431407"
},
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
