import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import classNames from 'classnames'
import FocusTrap from 'focus-trap-react'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Breadcrumb } from 'components/docs/Breadcrumb'
import { LayoutProps } from 'components/docs/Layout'
import { Navigation } from 'components/docs/Navigation'

const useDrawer = (drawer?: HTMLElement) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(false)
  const activeTimer = useRef<number>()
  const lastFocusedElement = useRef<HTMLElement | undefined>(undefined)

  const handleOpen = useCallback((e?: React.SyntheticEvent<HTMLElement>) => {
    setActive(true)
    setOpen(true)

    lastFocusedElement.current = e?.currentTarget
  }, [])

  const handleClose = useCallback(() => {
    setActive(true)
    setOpen(false)
  }, [])

  const toggle = useCallback(
    (e?: React.SyntheticEvent<HTMLElement>) => {
      open ? handleClose() : handleOpen(e)
    },
    [open, handleOpen, handleClose]
  )

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
    if (open) {
      const escKeyListener = ({ keyCode }: KeyboardEvent) =>
        keyCode === 27 && handleClose()

      document.addEventListener('keydown', escKeyListener)
      return () => document.removeEventListener('keydown', escKeyListener)
    }
  }, [handleClose, open])

  useEffect(() => {
    if (!open && lastFocusedElement.current) {
      lastFocusedElement.current.focus()
    }
  }, [open])

  useEffect(() => {
    if (active) {
      if (activeTimer.current !== undefined)
        window.clearTimeout(activeTimer.current)

      activeTimer.current = window.setTimeout(() => setActive(false), 300)
    }
  }, [active])

  return { active, handleClose, handleOpen, toggle, open }
}

export const Mobile: React.FC<LayoutProps> = ({
  children,
  breadcrumbs,
  manifest,
  slug,
}) => {
  const [drawer, setDrawer] = useState<HTMLElement | null>(null)
  const { active, handleClose, toggle, open } = useDrawer(drawer ?? undefined)

  return (
    <>
      <div
        className={classNames('docs-backdrop', { active, open })}
        onClick={handleClose}
        aria-hidden
      />
      <FocusTrap
        active={open}
        focusTrapOptions={{
          allowOutsideClick: () => true,
          escapeDeactivates: false,
          initialFocus: '#docs-nav',
        }}
      >
        <nav
          id="docs-nav"
          className={classNames({ active, open })}
          ref={setDrawer}
          tabIndex={-1}
          inert={open ? undefined : ''}
        >
          <div className="p-8">
            <p className="mb-6">
              <button
                className="docs-btn w-8 h-8"
                onClick={handleClose}
                aria-expanded={open}
              >
                <img
                  src="https://icongr.am/octicons/x.svg?color=4a5568"
                  alt="Close navigation"
                  className="w-8 h-8"
                />
              </button>
            </p>
            <Navigation manifest={manifest} slug={slug} />
          </div>
        </nav>
      </FocusTrap>
      <nav className="docs-topbar">
        <button
          className="docs-btn w-8 h-8 m-1 relative z-20"
          type="button"
          onClick={toggle}
          aria-controls="docs-nav"
          aria-expanded={open}
        >
          <img
            src="https://icongr.am/octicons/three-bars.svg?color=4a5568"
            alt="Toggle navigation"
            className="w-8 h-8 p-1"
          />
        </button>
        {breadcrumbs?.length && (
          <div className="docs-breadcrumb-wrapper">
            <div className="docs-breadcrumb-container">
              <Breadcrumb breadcrumbs={breadcrumbs} />
            </div>
          </div>
        )}
      </nav>
      <article id="docs-article" className="container">
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

        .docs-btn {
          @apply appearance-none rounded;
        }
        .docs-btn:hover,
        .docs-btn:focus {
          @apply bg-gray-200 outline-none;
        }
        .docs-btn:hover:active {
          @apply bg-gray-300 outline-none;
        }
        .docs-btn:focus-visible {
          @apply shadow-outline;
        }

        #docs-nav {
          @apply w-64 border-r fixed inset-0 bg-background overflow-hidden outline-none transform -translate-x-full;

          transition-property: box-shadow, transform;
          z-index: 60;
        }
        #docs-nav.active {
          @apply duration-300;
        }
        #docs-nav.open {
          @apply overflow-auto transform-none shadow-2xl;
        }

        .docs-topbar {
          @apply fixed inset-0 h-10 bg-white shadow-sm flex items-stretch z-50;
          top: 4rem;
        }
        .docs-breadcrumb-wrapper {
          @apply relative flex-1 my-1 mr-3 -ml-1 overflow-hidden flex items-center;
        }
        .docs-breadcrumb-wrapper::before {
          @apply block absolute inset-0 w-2 z-10;

          content: '';
          background: linear-gradient(
            to right,
            theme('colors.white') 50%,
            rgba(255, 255, 255, 0)
          );
        }
        .docs-breadcrumb-container {
          @apply w-full;
        }
        .docs-breadcrumb-container :global(li:first-child) {
          @apply pl-2;
        }

        #docs-article {
          @apply p-6 pt-16 mx-auto;

          --root-font-size: 0.9rem;
        }
      `}</style>
    </>
  )
}
