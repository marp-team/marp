import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'
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

export const Mobile: React.FC = ({ children }) => {
  const [drawer, setDrawer] = useState<HTMLElement | null>(null)
  const { active, handleClose, toggle, open } = useDrawer(drawer ?? undefined)

  return (
    <>
      <div
        className={classNames('docs-backdrop', { active, open })}
        onClick={handleClose}
        aria-hidden
      />
      <div className={classNames('docs-nav', { active, open })} ref={setDrawer}>
        <p className="mb-6">
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
        </p>
        <Navigation />
      </div>
      <div
        className="bg-white fixed inset-0 h-8 z-50 shadow-sm"
        style={{ top: 64 }}
      >
        <button type="button" onClick={toggle}>
          Toggle
        </button>
      </div>
      <article className="container p-6 pt-16 -mt-2 mx-auto text-sm">
        {children}
      </article>
      <style jsx>{`
        .docs-backdrop {
          @apply fixed inset-0 opacity-0 transition-opacity pointer-events-none cursor-pointer;

          -webkit-tap-highlight-color: transparent;
          backdrop-filter: blur(2px);
          background: rgba(255, 255, 255, 0.6);
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
      `}</style>
    </>
  )
}
