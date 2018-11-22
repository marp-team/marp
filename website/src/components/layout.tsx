import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Hero from './hero'
import './style/layout.scss'

const renderHelmet = meta => (
  <Helmet
    title={meta.title}
    meta={[
      { name: 'description', content: meta.description },
      { name: 'keywords', content: meta.keywords.join(',') },
    ]}
  >
    <html lang="en" />
  </Helmet>
)

const Layout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={data => (
      <>
        {renderHelmet(data.site.siteMetadata)}
        <Hero />
        <Header />
      </>
    )}
  />
)

export default Layout
