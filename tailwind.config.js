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
        'danger':'#E52D47',
        'white':'#ffff',
        'danger-warn':'#fed53f',
        'btn-danger':'#fc221c',
        'sky-line':'#00ADA8',
        'listOne':'#FFA700',
        'listTwo':'#00ADA8',
        'listThree':'#FF4333',
        'listFour':'#904CB8',
        'listFive':'#4CB86C',
        'menutitle' : '#e37f12',
        'menudesc' : "#87888A"

      },
      fontFamily: {
        'WorkSansReg': ['WorkSansReg'],
        'WorkSansBold':['WorkSansBold'],
        'WorkSansLight':["WorkSansLight"],
        'WorkSansBoldItalic':["WorkSansBoldItalic"],
        'lora':["lora"],
        'itim':["itim"],
        'inter':["inter"],
        'BreeSerif':["BreeSerif"]
      },
      backgroundImage: {
        'menu-header': "url('./src/assets/images/menu.png')",
      }
    },
  },
  plugins: [],
}

