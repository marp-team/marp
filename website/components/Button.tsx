import classNames from 'classnames'

export type ButtonProps = {
  color?: 'primary'
  outline?: boolean
  [key: string]: unknown
}

export const Button = ({
  children,
  className,
  color,
  href,
  outline,
  ...rest
}: ButtonProps) => {
  const Tag = href ? 'a' : 'button'
  const attrs = {
    ...rest,
    ...(Tag === 'a' ? { href, role: 'button', tabIndex: 0 } : {}),
  }

  return (
    <Tag
      {...attrs}
      className={classNames(
        Tag === 'a' && 'custom-anchor',
        'button',
        color,
        { outline },
        className as any
      )}
    >
      {children}
      <style jsx>{`
        .button {
          @apply appearance-none no-underline inline-block relative select-none font-bold rounded-full shadow-md bg-white text-center;

          padding: 0.625em 1.25em;
          transition: color, background-color, opacity;
        }

        @screen md {
          .button {
            @apply tracking-wider;
          }
        }

        .button:hover {
          @apply bg-background duration-150;
        }
        .button:hover:active {
          @apply outline-none shadow-outline bg-gray-300 duration-0;
        }
        .button:focus {
          @apply outline-none shadow-outline;
        }

        /* Primary color */
        .button.primary {
          @apply bg-marp-brand text-white;

          background-image: linear-gradient(
            30deg,
            transparent,
            rgba(255, 255, 255, 0.3)
          );
        }
        .button.primary:hover {
          @apply bg-marp-darken;
        }
        .button.primary:hover:active {
          @apply bg-marp-dark;
        }

        /* Outline */
        .button.outline {
          @apply text-foreground;
        }
        .button.outline::after {
          @apply absolute block inset-0 pointer-events-none border-current border-2;

          border-radius: inherit;
          content: '';
          transition: inherit;
        }

        .button.outline.primary {
          @apply text-marp-darken bg-white;

          background-image: none;
        }
        .button.outline.primary:hover {
          @apply bg-marp-darken text-white;
        }
        .button.outline.primary:hover::after {
          @apply opacity-0;
        }
      `}</style>
    </Tag>
  )
}
