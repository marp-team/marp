import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

const blog = ({ location, data }) => (
  <Layout location={location.pathname} title="Blog">
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <span key={node.id}>
        <h1>{node.frontmatter.title}</h1>
      </span>
    ))}
  </Layout>
)
export default blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`
