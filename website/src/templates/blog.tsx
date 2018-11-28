import React from 'react'
import { graphql } from 'gatsby'
import Blog from '../components/blog'
import Layout from '../components/layout'

const BlogTemplate = ({ data: { markdownRemark }, location }) => (
  <Layout location={location.pathname} title={markdownRemark.frontmatter.title}>
    <Blog {...markdownRemark} />
  </Layout>
)

export default BlogTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      html
      fields {
        path
      }
      frontmatter {
        author
        date(formatString: "YYYY-MM-DD")
        github
        title
      }
    }
  }
`
