const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Marp: Markdown Presentation Ecosystem',
    description:
      'Marp is the ecosystem to write your presentation with plain Markdown.',
    keywords: ['markdown', 'slide', 'deck', 'presentation', 'marp', 'marpit'],
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          postCssPlugins: [autoprefixer()],
          camelCase: true,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blog`,
        name: 'blog-pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: '<!-- more -->',
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-external-links',
            options: { target: '_blank', rel: 'noopener' },
          },
          'gatsby-remark-prismjs',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              quality: 65,
              withWebp: true,
              wrapperStyle: 'margin-top:2rem;margin-bottom:2rem;',
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
  ],
}
