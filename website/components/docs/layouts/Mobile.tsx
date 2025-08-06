import { ThreeBarsIcon, XIcon } from '@primer/octicons-react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import classNames from 'classnames'
import FocusTrap from 'focus-trap-react'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Breadcrumb } from 'components/docs/Breadcrumb'
import { LayoutProps } from 'components/docs/Layout'
import { Navigation } from 'components/docs/Navigation'

const useOnPageLoad = (callback: () => void, immediate = false) => {
  const router = useRouter()

  useEffect(() => {
    if (immediate) callback()
  }, [callback]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    router.events.on('routeChangeComplete', callback)
    return () => router.events.off('routeChangeComplete', callback)
  }, [callback, router.events])
}

const useDrawer = (drawer?: HTMLElement) => {
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

  useOnPageLoad(handleClose)

  useEffect(() => {
    if (drawer && open) {
      disableBodyScroll(drawer)
      return () => enableBodyScroll(drawer)
    }
  }, [drawer, open])

  useEffect(() => {
    if (open) {
      const escKeyListener = ({ key }: KeyboardEvent) => {
        if (key === 'Escape') handleClose()
      }

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

  const breadcrumbsContainer = useRef<HTMLDivElement | null>(null)

  useOnPageLoad(
    useCallback(() => {
      breadcrumbsContainer.current?.scrollTo({
        left: breadcrumbsContainer.current.scrollWidth,
        behavior: 'instant' as any,
      })
    }, []),
    true
  )

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
          fallbackFocus: '#docs-nav-toggle',
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
                className="docs-btn h-8 w-8"
                onClick={handleClose}
                aria-expanded={open}
              >
                <XIcon className="docs-btn-close-icon" />
                <span className="sr-only">Close navigation</span>
              </button>
            </p>
            <Navigation manifest={manifest} slug={slug} />
          </div>
        </nav>
      </FocusTrap>
      <nav className="docs-topbar">
        <button
          className="docs-btn relative z-20 m-1 h-8 w-8"
          id="docs-nav-toggle"
          type="button"
          onClick={toggle}
          aria-controls="docs-nav"
          aria-expanded={open}
        >
          <ThreeBarsIcon className="docs-btn-open-drawer-icon" />
          <span className="sr-only">Toggle navigation</span>
        </button>
        {breadcrumbs?.length && (
          <div ref={breadcrumbsContainer} className="docs-breadcrumb-container">
            <div className="docs-breadcrumb">
              <Breadcrumb breadcrumbs={breadcrumbs} />
            </div>
          </div>
        )}
      </nav>
      <article id="docs-article" className="container">
        {children}
      </article>
      <style jsx global>{`
        :root {
          --anchor-margin: calc(var(--header-height) + 2.5rem);
        }
      `}</style>
      <style jsx>{`
        .docs-backdrop {
          @apply pointer-events-none fixed inset-0 cursor-pointer opacity-0 transition-opacity;

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
          @apply appearance-none rounded text-gray-700;
        }
        .docs-btn:hover,
        .docs-btn:focus {
          @apply bg-gray-200 outline-none;
        }
        .docs-btn:hover:active {
          @apply bg-gray-300 outline-none;
        }
        .docs-btn:focus-visible {
          @apply ring-1 ring-white ring-offset-2;
        }

        .docs-btn :global(.docs-btn-close-icon) {
          @apply h-8 w-8;
        }
        .docs-btn :global(.docs-btn-open-drawer-icon) {
          @apply h-8 w-8 p-1;
        }

        #docs-nav {
          @apply bg-background fixed inset-0 w-64 -translate-x-full transform overflow-hidden border-r outline-none;

          transition-property: box-shadow, transform;
          z-index: 60;
        }
        #docs-nav.active {
          @apply duration-300;
        }
        #docs-nav.open {
          @apply transform-none overflow-auto shadow-2xl;
        }

        .docs-topbar {
          @apply fixed inset-0 top-16 z-50 flex h-10 items-stretch bg-white shadow-sm;
        }
        .docs-breadcrumb-container {
          @apply flex flex-1 snap-x snap-proximity scroll-px-2 items-center overflow-x-auto;

          mask: linear-gradient(to right, transparent, #000 0.5rem, #000)
            no-repeat left top;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .docs-breadcrumb-container::-webkit-scrollbar {
          display: none;
        }
        .docs-breadcrumb {
          @apply relative mr-auto px-2;
          @apply after:pointer-events-none after:absolute after:inset-0 after:mx-2 after:snap-end;
        }
        .docs-breadcrumb :global(li) {
          @apply snap-start;
        }

        #docs-article {
          @apply mx-auto p-6 pt-16;

          --root-font-size: 0.9rem;
        }
      `}</style>
    </>
  )
}
