import React from 'react'
import Helmet from 'react-helmet'
import { StickyContainer, Sticky } from 'react-sticky'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Hero from './hero'
import style from './style/layout.module.scss'
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

let renderCount = 0

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
      <StickyContainer className={style.container}>
        {renderHelmet(data.site.siteMetadata)}
        <Hero />
        <Sticky relative>
          {sticky => <Header style={sticky.style} stuck={sticky.isSticky} />}
        </Sticky>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id iste
          eveniet eaque itaque quis. Doloribus voluptatum voluptates tempora
          commodi atque ut incidunt suscipit. Aliquam omnis corrupti iusto,
          laboriosam vel tempore.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id iste
          eveniet eaque itaque quis. Doloribus voluptatum voluptates tempora
          commodi atque ut incidunt suscipit. Aliquam omnis corrupti iusto,
          laboriosam vel tempore.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id iste
          eveniet eaque itaque quis. Doloribus voluptatum voluptates tempora
          commodi atque ut incidunt suscipit. Aliquam omnis corrupti iusto,
          laboriosam vel tempore.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id iste
          eveniet eaque itaque quis. Doloribus voluptatum voluptates tempora
          commodi atque ut incidunt suscipit. Aliquam omnis corrupti iusto,
          laboriosam vel tempore.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id iste
          eveniet eaque itaque quis. Doloribus voluptatum voluptates tempora
          commodi atque ut incidunt suscipit. Aliquam omnis corrupti iusto,
          laboriosam vel tempore.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id iste
          eveniet eaque itaque quis. Doloribus voluptatum voluptates tempora
          commodi atque ut incidunt suscipit. Aliquam omnis corrupti iusto,
          laboriosam vel tempore.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id iste
          eveniet eaque itaque quis. Doloribus voluptatum voluptates tempora
          commodi atque ut incidunt suscipit. Aliquam omnis corrupti iusto,
          laboriosam vel tempore.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id iste
          eveniet eaque itaque quis. Doloribus voluptatum voluptates tempora
          commodi atque ut incidunt suscipit. Aliquam omnis corrupti iusto,
          laboriosam vel tempore.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id iste
          eveniet eaque itaque quis. Doloribus voluptatum voluptates tempora
          commodi atque ut incidunt suscipit. Aliquam omnis corrupti iusto,
          laboriosam vel tempore.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id iste
          eveniet eaque itaque quis. Doloribus voluptatum voluptates tempora
          commodi atque ut incidunt suscipit. Aliquam omnis corrupti iusto,
          laboriosam vel tempore.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id iste
          eveniet eaque itaque quis. Doloribus voluptatum voluptates tempora
          commodi atque ut incidunt suscipit. Aliquam omnis corrupti iusto,
          laboriosam vel tempore.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id iste
          eveniet eaque itaque quis. Doloribus voluptatum voluptates tempora
          commodi atque ut incidunt suscipit. Aliquam omnis corrupti iusto,
          laboriosam vel tempore.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id iste
          eveniet eaque itaque quis. Doloribus voluptatum voluptates tempora
          commodi atque ut incidunt suscipit. Aliquam omnis corrupti iusto,
          laboriosam vel tempore.
        </p>
      </StickyContainer>
    )}
  />
)

export default Layout
