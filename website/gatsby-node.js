const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const blogTpl = path.resolve('src/templates/blog.tsx')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) return Promise.reject(result.errors)

    result.data.allMarkdownRemark.edges.forEach(({ node }) =>
      createPage({ path: node.fields.path, component: blogTpl })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const date = new Date(node.frontmatter.date)
    const slug = path.basename(createFilePath({ node, getNode }))

    createNodeField({ node, name: 'slug', value: slug })
    createNodeField({ node, name: 'path', value: `/blog/${slug}` })
    createNodeField({ node, name: 'reserved', value: date > new Date() })
  }
}
