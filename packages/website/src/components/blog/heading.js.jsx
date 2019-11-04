/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import GitHubSlugger from 'github-slugger'
import innerText from 'react-innertext'

export const Heading = ({
  anchorOffset = -80,
  children,
  level = 1,
  slugger = new GitHubSlugger(),
  ...props
}) => {
  const anchor = slugger.slug(innerText(children))
  const Tag = `h${level}`

  return (
    <>
      <a
        name={anchor}
        css={css`
          visibility: hidden;
          display: block;
          position: relative;
          top: ${anchorOffset}px;
        `}
      />
      <Tag {...props}>
        <span
          css={css`
            display: inline-block;
            position: relative;

            > .anchor-link {
              align-items: center;
              bottom: 0;
              display: none;
              justify-content: center;
              left: -32px;
              overflow: hidden;
              position: absolute;
              top: 0;
              width: 32px;
            }

            &:hover > .anchor-link {
              display: flex;
            }
          `}
        >
          <a href={`#${anchor}`} className="anchor-link" aria-hidden="true">
            <img
              src="https://icongr.am/octicons/link.svg?color=444455"
              width="16"
              height="16"
              loading="lazy"
            />
          </a>
          {children}
        </span>
      </Tag>
    </>
  )
}
