/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      rotate: {
        135: '135deg',
        225: '225deg',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
}
