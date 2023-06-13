const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  // darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.trueGray,
        'ned-green': {
          DEFAULT: '#00EFD1',
          '100': '#47FFE7',
          '200': '#33FFE4',
          '300': '#1FFFD1',
          '400': '#0AFFDE',
          '500': '#00EFD1',
          '600': '#00E0C2',
          '700': '#00CCB1',
          '800': '#00B89F',
          '900': '#00A38D',
        },
        'ned-blue': {
          DEFAULT: '#00ACEA',
          '100': '#47CEFF',
          '200': '#33C9FF',
          '300': '#1FC3FF',
          '400': '#0ABEFF',
          '500': '#00ACEA',
          '600': '#00A5E0',
          '700': '#0096CC',
          '800': '#0087B8',
          '900': '#0078A3',
        }
      },
    },
    fontFamily: {
      sans: ["Noto Sans", "Inter", ...defaultTheme.fontFamily.sans],
      calSans: ["CalSans"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"), 
    require("tailwindcss-animate"), 
    require("@tailwindcss/typography")
  ],
};
