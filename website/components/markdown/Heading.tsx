import { createContext, useContext } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
type HOCProps<P extends {} = Record<string, any>> = React.PropsWithChildren<P>

const anchorLinkContext = createContext(true)

const Heading: React.FC<HOCProps<{ level: number; id?: string }>> = ({
  children,
  level,
  id,
  ...rest
}) => {
  const anchorLink = useContext(anchorLinkContext)
  const HeadingTag: any = 'h' + level

  return (
    <HeadingTag id={id} {...rest}>
      {id && anchorLink && (
        <a
          aria-hidden
          className="anchor-link"
          href={`#${id}`}
          tabIndex={-1}
        ></a>
      )}
      {children}
    </HeadingTag>
  )
}

export const H1: React.FC<HOCProps> = ({ children, ...rest }) => (
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

export const H2: React.FC<HOCProps> = ({ children, ...rest }) => (
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
        @apply ml-6 h-0 flex-1 border-t border-gray-400;
      }
    `}</style>
  </Heading>
)

// export const H2: React.FC = (props) => <Heading level={2} {...props} />
export const H3: React.FC<HOCProps> = (props) => (
  <Heading level={3} {...props} />
)
export const H4: React.FC<HOCProps> = (props) => (
  <Heading level={4} {...props} />
)
export const H5: React.FC<HOCProps> = (props) => (
  <Heading level={5} {...props} />
)
export const H6: React.FC<HOCProps> = (props) => (
  <Heading level={6} {...props} />
)

export const AnchorLinkProvider = anchorLinkContext.Provider
