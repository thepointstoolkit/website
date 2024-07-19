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
      strokeWidth: {
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
}
