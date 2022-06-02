module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/**/*.html',
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'dark': '#1C0909',
      'primary': '#8a2324',
      'secondary': '#5C1718',
      'semi-light': '#F9E4E6',
      'light': '#f2f2f2',
      'danger': '#E32627',
      'success': '#d3dce6',
      'info': '#d3dce6',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}