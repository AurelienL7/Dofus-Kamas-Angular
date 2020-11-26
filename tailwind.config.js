module.exports = {
  // Tailwind provides out of the box support for Purge CSS—a tool that will remove all unused Tailwind utilities classes
  purge: ['./src/**/*.html', './src/**/*.ts', './projects/**/*.html', './projects/**/*.ts'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
