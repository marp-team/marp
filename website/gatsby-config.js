const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Marp: Markdown Presentation Writer',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          postCssPlugins: [autoprefixer()],
          camelCase: 'only',
        },
      },
    },
  ],
}
