/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Layout } from './layout.jsx'
import { Description } from './index/description.js.jsx'
import { Features } from './index/features.js.jsx'
import { GetStarted } from './index/get-started.js.jsx'
import { Hero } from './index/hero.js.jsx'

export default function Index() {
  return (
    <Layout
      route="/"
      description="Marp, Markdown Presentation Ecosystem, provides the great experience to create beautiful slide deck. You only have to focus writing your story in Markdown document."
      type="website"
      globalStyles={css`
        html {
          scroll-behavior: smooth;
        }
      `}
    >
      <Hero />
      <Description />
      <Features />
      <GetStarted />
    </Layout>
  )
}
