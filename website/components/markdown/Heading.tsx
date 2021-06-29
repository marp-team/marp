import { createContext, useContext } from 'react'

const anchorLinkContext = createContext(true)

const Heading: React.FC<{ level: number; id?: string }> = ({
  children,
  level,
  id,
  ...rest
}) => {
  const anchorLink = useContext(anchorLinkContext)
  const HeadingTag: any = 'h' + level

  return (
    <HeadingTag key={id} {...rest}>
      {id && (
        <>
          <span id={id} className="named-anchor" aria-hidden />
          {anchorLink && (
            <a
              aria-hidden
              className="anchor-link"
              href={`#${id}`}
              tabIndex={-1}
            ></a>
          )}
        </>
      )}
      {children}
    </HeadingTag>
  )
}

export const H1: React.FC = ({ children, ...rest }) => (
  <Heading level={1} {...rest}>
    <span>
      {children}
      <style jsx>{`
        & {
          box-shadow: inset 0 -0.2em theme('colors.marp.light');
        }
      `}</style>
    </span>
  </Heading>
)

export const H2: React.FC = ({ children, ...rest }) => (
  <Heading level={2} {...rest}>
    <span className="headingLv2">
      <span className="content">{children}</span>
      <span className="divider"></span>
    </span>
    <style jsx>{`
      .headingLv2 {
        @apply flex items-center;
      }

      .content {
        @apply flex-initial;
      }

      .divider {
        @apply flex-1 ml-6 h-0 border-t border-gray-400;
      }
    `}</style>
  </Heading>
)

// export const H2: React.FC = (props) => <Heading level={2} {...props} />
export const H3: React.FC = (props) => <Heading level={3} {...props} />
export const H4: React.FC = (props) => <Heading level={4} {...props} />
export const H5: React.FC = (props) => <Heading level={5} {...props} />
export const H6: React.FC = (props) => <Heading level={6} {...props} />

export const AnchorLinkProvider = anchorLinkContext.Provider
