import React from 'react'
import Helmet from 'react-helmet'
import { StickyContainer, Sticky } from 'react-sticky'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Hero from './hero'
import layoutStyle from './style/layout.module.scss'
import { layoutFocusTarget } from '../../symbol'
import './style/layout.scss'

export interface LayoutProps {
  children?: React.ReactNode
  hero?: boolean
  location: string | Locations
  title?: string
}

export enum Locations {
  root = '/',
  blog = '/blog',
}

const renderHelmet = (meta, title?: string) => {
  const titleText = title ? `${title} | ${meta.title}` : meta.title

  return (
    <Helmet
      title={titleText}
      meta={[
        { name: 'description', content: meta.description },
        { name: 'keywords', content: meta.keywords.join(',') },
      ]}
    >
      <html lang="en" />
    </Helmet>
  )
}

const StickyWrapper = class extends React.Component {
  render = () => this.props.children
}

const Layout: React.FC<LayoutProps> = ({ children, hero, location, title }) => (
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
      <StickyContainer
        className={layoutStyle.container}
        ref={cont => (window[layoutFocusTarget] = cont && cont.getParent())}
        tabIndex="-1"
      >
        {renderHelmet(data.site.siteMetadata, title)}
        {hero && <Hero />}
        <Sticky relative>
          {({ style, isSticky }) => (
            <StickyWrapper>
              <Header
                location={location}
                stuck={!hero || isSticky}
                style={style}
              />
            </StickyWrapper>
          )}
        </Sticky>
        {children}
      </StickyContainer>
    )}
  />
)

export default Layout as React.FC<Partial<LayoutProps>>
