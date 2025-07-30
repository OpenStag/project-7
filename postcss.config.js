// postcss.config.js
module.exports = {
  plugins: {
    // Use the new PostCSS plugin for Tailwind CSS v4
    '@tailwindcss/postcss': {}, // <-- Changed this line
    autoprefixer: {},
  },
}