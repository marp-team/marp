import classNames from 'classnames'
import { useState } from 'react'
import { useMedia } from 'use-media'
import { Navigation } from './Navigation'
import { useDrawer } from './useDrawer'
import { Layout } from 'components/Layout'

export type LayoutProps = {
  breadcrumbs?: React.ReactNode[]
}

const PageLayout: React.FC<LayoutProps> = ({ breadcrumbs = [], children }) => {
  const [drawer, setDrawer] = useState<HTMLElement | null>(null)
  const drawerEnabled = !useMedia({ minWidth: '768px' })
  const { active, handleClose, handleOpen, open } = useDrawer({
    drawer,
    enabled: drawerEnabled,
  })

  return (
    <Layout
      activeItem="docs"
      title={['Docs']}
      noIndex // TODO: Remove noIndex
    >
      <div className="docs-container">
        {drawerEnabled && (
          <div
            className={classNames('docs-backdrop', { active, open })}
            onClick={handleClose}
            aria-hidden
          ></div>
        )}
        <nav
          className={classNames('docs-nav', {
            active,
            open,
            enabled: drawerEnabled,
          })}
          ref={setDrawer}
          tabIndex={drawerEnabled && !open ? -1 : undefined}
          aria-hidden={drawerEnabled && !open}
        >
          {drawerEnabled && (
            <button
              className="docs-nav-button docs-nav-button-close"
              onClick={handleClose}
            >
              <img
                src="https://icongr.am/octicons/x.svg?color=4a5568"
                alt="Close navigation"
                className="w-8 h-8"
              />
            </button>
          )}
          <Navigation />
        </nav>
        <article className="docs-article">
          <nav className="docs-breadcrumb">
            {drawerEnabled && (
              <button className="docs-nav-button" onClick={handleOpen}>
                <img
                  src="https://icongr.am/octicons/three-bars.svg?color=4a5568"
                  alt="Open navigation"
                  className="p-1 w-8 h-8"
                />
              </button>
            )}
            {!!breadcrumbs.length && (
              <ol>
                {breadcrumbs.map((el, i) => (
                  <li key={i}>{el}</li>
                ))}
              </ol>
            )}
          </nav>
          <section className="container mx-auto md:px-4">{children}</section>
        </article>
        <style jsx>{`
          .docs-container {
            @apply relative flex text-sm;

            min-height: inherit;
          }

          .docs-backdrop {
            @apply fixed inset-0 opacity-0 transition-opacity pointer-events-none cursor-pointer;

            -webkit-tap-highlight-color: transparent;
            backdrop-filter: blur(2px);
            background: rgba(255, 255, 255, 0.5);
            z-index: 60;
          }
          .docs-backdrop.active {
            @apply duration-300;
          }
          .docs-backdrop.open {
            @apply pointer-events-auto opacity-100;
          }

          .docs-nav {
            @apply px-8 my-8 w-64 border-r;
          }
          .docs-nav.enabled {
            @apply fixed inset-0 bg-background my-0 py-8 overflow-auto transform -translate-x-full;

            transition-property: box-shadow, transform;
            z-index: 60;
          }
          .docs-nav.enabled.active {
            @apply duration-300;
          }
          .docs-nav.enabled.open {
            @apply transform-none shadow-2xl;
          }

          .docs-article {
            @apply flex-1 relative p-8 mt-12;
          }

          .docs-breadcrumb {
            @apply fixed inset-x-0 h-12 flex items-center px-4 bg-white text-gray-600 shadow-sm z-50;

            top: 4rem;
          }
          .docs-breadcrumb::after {
            @apply absolute inset-0 w-4 h-full pointer-events-none;

            left: 3rem;
            background: linear-gradient(
              to right,
              theme('colors.white') 50%,
              rgba(255, 255, 255, 0)
            );
            content: '';
          }

          .docs-breadcrumb ol {
            @apply relative flex items-center justify-end overflow-x-hidden h-full;
          }
          .docs-breadcrumb li {
            @apply block whitespace-no-wrap;
          }
          .docs-breadcrumb li::before {
            @apply pl-6 bg-no-repeat;

            background-image: url('https://icongr.am/octicons/triangle-right.svg?color=718096');
            background-position: 0.25rem center;
            background-size: 1rem 1rem;
            content: '';
          }
          .docs-breadcrumb li:first-child::before {
            @apply pl-4;

            background-image: none;
          }

          .docs-nav-button {
            @apply flex-shrink-0 appearance-none rounded h-8 w-8 outline-none;
          }
          .docs-nav-button:focus-visible {
            @apply bg-gray-200;
          }
          .docs-nav-button > img {
            @apply transition-transform duration-200;
          }
          .docs-nav-button > img:hover:active {
            @apply transform scale-125;

            transition-duration: 0ms;
          }

          .docs-nav-button-close {
            @apply mb-6 -ml-1;
          }

          @screen md {
            .docs-article {
              @apply mt-0;
            }
            .docs-breadcrumb {
              @apply static bg-transparent shadow-none px-0 h-auto mb-6;
            }
            .docs-breadcrumb::after,
            .docs-breadcrumb li:first-child::before {
              @apply hidden;
            }
          }

          @screen xl {
            .docs-container {
              @apply text-base;
            }
            .docs-nav {
              @apply w-3/12;
            }
          }
        `}</style>
      </div>
    </Layout>
  )
}

export { PageLayout as Layout }
