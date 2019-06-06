import { graphql } from 'gatsby'
import React from 'react'
import { BlogExcerpted } from '../components/blog'
import Layout from '../components/layout'

const blog = ({
  location,
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout location={location.pathname} title="Blog">
    {edges
      .map(
        ({ node }) =>
          (process.env.NODE_ENV === 'development' || !node.fields.reserved) && (
            <BlogExcerpted {...node} key={node.id} />
          )
      )
      .filter(n => n)}
  </Layout>
)

export default blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 30
    ) {
      edges {
        node {
          ...BlogExcerpted
          id
        }
      }
    }
  }
`
