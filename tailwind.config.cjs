const colors = require("tailwindcss/colors");

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      'primary-dark': '#2F3061',
      'primary-light': '#90caf9',
      'primary-light-hover': '#4badfe',
      'secondary-light': '#FFE66D',
      'neutral-dark': '#0A1929',
      'neutral-light': '#F7FFF7',
      'muted': '#ffffff1f',
      'muted-text': 'rgba(255, 255, 255, 0.3)',
      'container-color': '#001E3C',
      ...colors
    }
  },
  plugins: [],
}
