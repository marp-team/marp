/* eslint-disable jsx-a11y/alt-text, jsx-a11y/anchor-has-content */
import GitHubSlugger from 'github-slugger'
import matter from 'gray-matter'
import gitHubSanitize from 'hast-util-sanitize/lib/github.json'
import Link from 'next/link'
import innerText from 'react-innertext'
import remarkParse from 'remark-parse'
import remarkReact from 'remark-react'
import unified from 'unified'
import { CodeBlock } from 'components/CodeBlock'

const parser = unified().use(remarkParse, { commonmark: true })
const toJSON = (value: any) => JSON.parse(JSON.stringify(value))

export const parseMatter = (markdown: string) =>
  matter(markdown, {
    excerpt_separator: '<!-- more -->',
  })

export const parse = async (markdown: string) => {
  const md = parseMatter(markdown)

  return {
    markdown,
    mdast: toJSON(await parser.run(parser.parse(md.content))),
    data: toJSON(md.data),
  }
}

const Anchor = ({ href, ...rest }) => {
  if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
    return <a href={href} {...rest} target="_blank" rel="noreferrer noopener" />
  }
  return (
    <Link href={href}>
      <a {...rest} />
    </Link>
  )
}

const MarkWrapper: React.FC = ({ children }) => (
  <span>
    {children}
    <style jsx>{`
      & {
        box-shadow: inset 0 -0.2em theme('colors.marp.light');
      }
    `}</style>
  </span>
)

const PreCodeBlock: React.FC = (props) => {
  if (props['data-code'] === undefined) return <pre {...props} />

  return (
    <CodeBlock
      className="sm:mx-auto sm:w-11/12 lg:w-5/6"
      language={props['data-language']}
      copyButton
    >
      {props['data-code']}
    </CodeBlock>
  )
}

const Img: React.FC = (props) =>
  props['title'] ? (
    <figure>
      <img {...props} />
      {props['title'].trim() && <figcaption>{props['title']}</figcaption>}
    </figure>
  ) : (
    <img {...props} />
  )

export const renderToReact = (
  mdast: any,
  { anchorLink = true }: { anchorLink?: boolean } = {}
) => {
  const slugger = new GitHubSlugger()
  const heading = (level: number, Wrapper?: React.FC) => {
    const Heading: React.FC = ({ children }) => {
      const anchor = slugger.slug(innerText(children))
      const Tag = `h${level}` as any

      return (
        <Tag>
          <a id={anchor} className="named-anchor" aria-hidden />
          {anchorLink && (
            <a
              aria-hidden
              className="anchor-link"
              href={`#${anchor}`}
              tabIndex={-1}
            ></a>
          )}
          {Wrapper ? <Wrapper>{children}</Wrapper> : children}
        </Tag>
      )
    }
    return Heading
  }

  const renderer = unified().use(remarkReact, {
    remarkReactComponents: {
      a: Anchor,
      h1: heading(1, MarkWrapper),
      h2: heading(2),
      h3: heading(3),
      h4: heading(4),
      h5: heading(5),
      h6: heading(6),
      pre: PreCodeBlock,
      img: Img,
    },
    sanitize: {
      ...gitHubSanitize,
      attributes: {
        ...gitHubSanitize.attributes,
        '*': [...gitHubSanitize.attributes['*'], 'data*'],
      },
    },
    toHast: {
      commonmark: true,
      handlers: {
        code: (h, { position, lang, value }) =>
          h(
            position,
            'pre',
            { 'data-code': value, 'data-language': lang?.trim() },
            []
          ),
      },
    },
  })

  return renderer.stringify(renderer.runSync(mdast))
}
