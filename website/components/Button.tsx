import classNames from 'classnames'
import { ReactNode } from 'react'

export type ButtonProps = {
  children?: ReactNode
  color?: 'primary'
  href?: string
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
        { btnOutline: outline },
        className as any
      )}
    >
      {children}
      <style jsx>{`
        .button {
          @apply relative inline-block select-none appearance-none rounded-full bg-white text-center font-bold no-underline shadow-md;

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
          @apply duration-0 bg-gray-300 outline-none ring-1 ring-white ring-offset-2;
        }
        .button:focus {
          @apply outline-none ring-1 ring-white ring-offset-2;
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
        .button.btnOutline {
          @apply text-foreground;
        }
        .button.btnOutline::after {
          @apply pointer-events-none absolute inset-0 block border-2 border-current;

          border-radius: inherit;
          content: '';
          transition: inherit;
        }

        .button.btnOutline.primary {
          @apply text-marp-darken bg-white;

          background-image: none;
        }
        .button.btnOutline.primary:hover {
          @apply bg-marp-darken text-white;
        }
        .button.btnOutline.primary:hover::after {
          @apply opacity-0;
        }
      `}</style>
    </Tag>
  )
}
