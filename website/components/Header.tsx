import classNames from 'classnames'
import Link from 'next/link'
import MarpLogo from 'public/assets/marp-logo.svg'

const handleMouseUp = (e: React.MouseEvent<HTMLElement>) =>
  e.currentTarget.blur()

export type ItemSlug = 'docs' | 'blog'

export const Header = ({ activeItem }: { activeItem?: ItemSlug }) => (
  <>
    <header className="header">
      <Link href="/" legacyBehavior>
        <a
          className="custom-anchor header-item"
          role="link"
          tabIndex={0}
          onMouseUp={handleMouseUp}
        >
          <MarpLogo className="block h-16 w-16 p-2 md:h-20 md:w-20 md:p-3" />
          <span className="sr-only">Marp</span>
        </a>
      </Link>
      <nav className="ml-2">
        <ul className="flex h-16 items-stretch md:h-20">
          {process.env.NEXT_PUBLIC_DOCS && (
            <li className="relative flex items-center justify-center">
              <Link href="/docs" legacyBehavior>
                <a
                  className={classNames('custom-anchor header-item nav-item', {
                    active: activeItem === 'docs',
                  })}
                  role="link"
                  tabIndex={0}
                  onMouseUp={handleMouseUp}
                >
                  <span>Docs</span>
                </a>
              </Link>
            </li>
          )}
          <li className="relative flex items-center justify-center">
            <Link href="/blog" legacyBehavior>
              <a
                className={classNames('custom-anchor header-item nav-item', {
                  active: activeItem === 'blog',
                })}
                role="link"
                tabIndex={0}
                onMouseUp={handleMouseUp}
              >
                <span>Blog</span>
              </a>
            </Link>
          </li>
          <li className="relative flex items-center justify-center">
            <a
              href="https://github.com/marp-team/marp"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-anchor header-item nav-item"
              onMouseUp={handleMouseUp}
            >
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        :global(:root) {
          @apply [--header-height:theme(spacing.16)] md:[--header-height:theme(spacing.20)];
        }

        .header {
          @apply fixed top-0 left-0 z-50 flex h-[var(--header-height)] w-full justify-center bg-white shadow-sm;
        }

        .header-item {
          @apply text-current no-underline outline-none;
        }

        .header-item > :global(svg) {
          @apply transition-transform duration-200;
        }

        .header-item:hover:active > :global(svg) {
          @apply duration-0 scale-125 transform shadow-none;
        }

        @media not all and (hover: none) {
          .header-item:hover:active > :global(svg) {
            @apply scale-110;
          }
        }

        .nav-item {
          @apply font-rounded mx-2 text-lg font-medium uppercase leading-none outline-none;
        }

        .nav-item::before {
          @apply absolute inset-0;

          content: '';
        }

        .header-item:focus-visible,
        .nav-item:focus-visible::before {
          @apply bg-gray-200;
        }

        .header-item:not(.nav-item) {
          -webkit-tap-highlight-color: transparent;
        }

        @screen md {
          .nav-item {
            @apply mx-3 tracking-wider;
          }
        }

        .nav-item > span {
          @apply relative z-10;
        }

        .nav-item > span::after {
          @apply absolute inset-x-0 mt-1 block h-1 transition-all duration-300;

          content: '';
          top: 100%;
        }

        .nav-item:hover > span::after,
        .nav-item:focus-within > span::after {
          box-shadow: inset 0 -0.25rem theme('colors.gray.400');
        }

        .nav-item.active > span::after {
          @apply duration-0;
          box-shadow: inset 0 -0.25rem theme('colors.marp.brand');
        }

        .nav-item:hover:active > span::after {
          @apply duration-0;
          box-shadow: inset 0 -0.25rem theme('colors.marp.dark');
        }
      `}</style>
    </header>
  </>
)
