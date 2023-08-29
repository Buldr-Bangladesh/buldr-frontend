/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/flowbite/**/*.js",
  "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        primary: {"50":"#fff8e1","100":"#ffecb3","200":"#ffe082","300":"#ffd54f","400":"#ffca28","500":"#ffc107","600":"#ffb300","700":"#ffa000","800":"#ff8f00","900":"#ff6f00","950":"#e65100"}
      }
    },
    fontFamily:{
      primary:["Poppins"],
      title:["Oswald"]
    }
  },
  // daisyui: {
  //   themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  // },
  plugins: [  
    require('flowbite/plugin'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

