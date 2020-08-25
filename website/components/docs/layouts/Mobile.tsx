import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'
import { LayoutProps } from 'components/docs/Layout'
import { Navigation } from 'components/docs/Navigation'

const useDrawer = (drawer?: HTMLElement) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(false)
  const activeTimer = useRef<number>()

  const handleOpen = useCallback(() => {
    setOpen(true)
    setActive(true)
  }, [])
  const handleClose = useCallback(() => {
    setOpen(false)
    setActive(true)
  }, [])
  const toggle = useCallback(() => {
    open ? handleClose() : handleOpen()
  }, [open, handleOpen, handleClose])

  useEffect(() => {
    router.events.on('routeChangeComplete', handleClose)
    return () => router.events.off('routeChangeComplete', handleClose)
  }, [handleClose, router.events])

  useEffect(() => {
    if (drawer && open) {
      disableBodyScroll(drawer)
      return () => enableBodyScroll(drawer)
    }
  }, [drawer, open])

  useEffect(() => {
    if (active) {
      if (activeTimer.current !== undefined)
        window.clearTimeout(activeTimer.current)

      activeTimer.current = window.setTimeout(() => setActive(false), 300)
    }
  }, [active])

  return { active, handleClose, handleOpen, toggle, open }
}

export const Mobile: React.FC<LayoutProps> = ({ children, breadcrumbs }) => {
  const [drawer, setDrawer] = useState<HTMLElement | null>(null)
  const { active, handleClose, toggle, open } = useDrawer(drawer ?? undefined)

  return (
    <>
      <div
        className={classNames('docs-backdrop', { active, open })}
        onClick={handleClose}
        aria-hidden
      />
      <nav className={classNames('docs-nav', { active, open })} ref={setDrawer}>
        <p className="mb-6">
          <button
            className="rounded hover:bg-gray-300 focus:outline-none focus:shadow-outline"
            onClick={handleClose}
          >
            <img
              src="https://icongr.am/octicons/x.svg?color=4a5568"
              alt="Close navigation"
              className="w-8 h-8"
            />
          </button>
        </p>
        <Navigation />
      </nav>
      <nav className="docs-topbar">
        <button
          className="w-8 h-8 m-1 relative rounded hover:bg-gray-200 focus:outline-none focus:shadow-outline z-20"
          type="button"
          onClick={toggle}
        >
          <img
            src="https://icongr.am/octicons/three-bars.svg?color=4a5568"
            alt="Open navigation"
            className="w-8 h-8 p-1"
          />
        </button>
        {breadcrumbs && (
          <div className="docs-breadcrumb">
            <ol>
              {breadcrumbs.map((el, i) => (
                <li key={i}>{el}</li>
              ))}
            </ol>
          </div>
        )}
      </nav>
      <article className="container p-6 pt-16 -mt-2 mx-auto text-sm">
        {children}
      </article>
      <style jsx>{`
        .docs-backdrop {
          @apply fixed inset-0 opacity-0 transition-opacity pointer-events-none cursor-pointer;

          -webkit-tap-highlight-color: transparent;
          backdrop-filter: blur(2px);
          background: rgba(255, 255, 255, 0.75);
          z-index: 60;
        }
        .docs-backdrop.active {
          @apply duration-300;
        }
        .docs-backdrop.open {
          @apply pointer-events-auto opacity-100;
        }

        .docs-nav {
          @apply p-8 w-64 border-r fixed inset-0 bg-background overflow-auto transform -translate-x-full;

          transition-property: box-shadow, transform;
          z-index: 60;
        }
        .docs-nav.active {
          @apply duration-300;
        }
        .docs-nav.open {
          @apply transform-none shadow-2xl;
        }

        .docs-topbar {
          @apply fixed inset-0 h-10 bg-white shadow-sm flex items-stretch z-50;
          top: 4rem;
        }
        .docs-breadcrumb {
          @apply relative flex-1 my-1 mr-3 -ml-1 overflow-hidden flex items-center;
        }
        .docs-breadcrumb::before {
          @apply block absolute inset-0 w-2 bg-gradient-to-r from-white via-white to-transparent z-10;
          content: '';
        }
        .docs-breadcrumb ol {
          @apply relative flex items-center justify-end overflow-hidden pl-2;
        }
        .docs-breadcrumb li {
          @apply block whitespace-no-wrap;
        }
        .docs-breadcrumb li:not(:first-child)::before {
          @apply pl-6 bg-no-repeat;
          background-image: url('https://icongr.am/octicons/triangle-right.svg?color=718096');
          background-position: 0.25rem center;
          background-size: 1rem 1rem;
          content: '';
        }
      `}</style>
    </>
  )
}
