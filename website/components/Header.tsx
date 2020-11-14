import classNames from 'classnames'
import Head from 'next/head'
import Link from 'next/link'

const handleMouseUp = (e: React.MouseEvent<HTMLElement>) =>
  e.currentTarget.blur()

export type ItemSlug = 'docs' | 'blog'

export const Header = ({ activeItem }: { activeItem?: ItemSlug }) => (
  <>
    <Head>
      <link rel="preload" href="/assets/marp-logo.svg" as="image" />
    </Head>
    <header className="z-50 flex justify-center bg-white shadow-sm fixed top-0 left-0 w-full h-16 md:h-20">
      <Link href="/">
        <a
          className="custom-anchor header-item"
          role="link"
          tabIndex={0}
          onMouseUp={handleMouseUp}
        >
          <img
            src="/assets/marp-logo.svg"
            alt="Marp"
            className="block h-16 w-16 p-2 md:p-3 md:h-20 md:w-20"
            width={56}
            height={56}
          />
        </a>
      </Link>
      <nav className="ml-2">
        <ul className="flex items-stretch h-16 md:h-20">
          {process.env.NEXT_PUBLIC_DOCS && (
            <li className="relative flex items-center justify-center">
              <Link href="/docs">
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
            <Link href="/blog">
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
        .header-item {
          @apply no-underline text-current outline-none;
        }

        .header-item > img {
          @apply transition-transform duration-200;
        }

        .header-item:hover:active > img {
          @apply transform scale-125 shadow-none duration-0;
        }

        @media not all and (hover: none) {
          .header-item:hover:active > img {
            @apply scale-110;
          }
        }

        .nav-item {
          @apply font-rounded font-medium mx-2 uppercase text-lg leading-none outline-none;
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
          @apply absolute block inset-x-0 h-1 mt-1 transition-all duration-300;

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
