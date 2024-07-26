/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'warning':'#feef8c',
        'list-black': '#3E495F',
        'hot-pink':'#FF6866',
        'green-food':'#86C27D',
        'menu-green':'#7EBE74',
        'muted':'#A9A9A9',
        'danger':'#FE3748',
        'white':'#ffff',
        'danger-warn':'#fed53f'
      },
      fontFamily: {
        'WorkSansReg': ['WorkSansReg'],
        'WorkSansBold':['WorkSansBold'],
        'WorkSansLight':["WorkSansLight"]
      },
    },
  },
  plugins: [],
}

