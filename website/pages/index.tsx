import { InferGetStaticPropsType } from 'next'
import { Layout } from 'components/Layout'
import { generateRenderedMarp } from 'components/Marp'
import { Description } from 'components/top/Description'
import { Features } from 'components/top/Features'
import { GetStarted } from 'components/top/GetStarted'
import { Hero } from 'components/top/Hero'
import { absoluteUrl } from 'utils/url'

const exampleMarkdown = `
---
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('${absoluteUrl('/assets/hero-background.svg')}')
---

![bg left:40% 80%](${absoluteUrl('/assets/marp.svg')})

# **Marp**

Markdown Presentation Ecosystem

https://marp.app/

---

# How to write slides

Split pages by horizontal ruler (\`---\`). It's very simple! :satisfied:

\`\`\`markdown
# Slide 1

foobar

---

# Slide 2

foobar
\`\`\`
`.trim()

export const getStaticProps = async () => ({
  props: { example: await generateRenderedMarp(exampleMarkdown) },
})

const Index = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout type="website">
    <Hero />
    <Description example={props.example} />
    <Features />
    <GetStarted />
  </Layout>
)

export default Index
