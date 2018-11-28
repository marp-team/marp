import React from 'react'
import Helmet from 'react-helmet'
import { StickyContainer, Sticky } from 'react-sticky'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Hero from './hero'
import layoutStyle from './style/layout.module.scss'
import './style/layout.scss'

export interface LayoutProps {
  children: React.ReactNode
  hero?: boolean
}

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

const Layout: React.SFC<LayoutProps> = ({ children, hero }) => (
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
      <StickyContainer className={layoutStyle.container}>
        {renderHelmet(data.site.siteMetadata)}
        {hero && <Hero />}
        <Sticky relative>
          {({ style, isSticky }) => (
            <Header style={style} stuck={!hero || isSticky} />
          )}
        </Sticky>
        {children}
      </StickyContainer>
    )}
  />
)

export default Layout
