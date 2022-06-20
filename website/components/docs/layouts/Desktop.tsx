import {
  CSSProperties,
  useLayoutEffect,
  useRef,
  useState,
  useMemo,
} from 'react'
import { Breadcrumb } from 'components/docs/Breadcrumb'
import { LayoutProps } from 'components/docs/Layout'
import { Navigation } from 'components/docs/Navigation'

export const Desktop: React.FC<LayoutProps> = ({
  breadcrumbs,
  children,
  manifest,
  slug,
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null)
  const sidebarContentRef = useRef<HTMLDivElement>(null)
  const headerHeightDetecterRef = useRef<HTMLDivElement>(null)

  const [stickyGap, setStickyGap] = useState(0)
  const [isScrollDown, setIsScrollDown] = useState(true)
  const [sidebarScrollable, setSidebarScrollable] = useState(false)

  useLayoutEffect(() => {
    let previousScrollY = window.scrollY

    const handleScroll = () => {
      // Get header height
      const headerHeight = headerHeightDetecterRef.current?.clientHeight || 80

      // Detect whether sidebar is scrollable
      const sidebarElm = sidebarRef.current
      const sidebarRect = sidebarElm?.getBoundingClientRect()
      const parentElm = sidebarElm?.parentElement
      const parentRect = parentElm?.getBoundingClientRect()

      if (sidebarContentRef.current && sidebarRect && parentRect) {
        const viewHeight = Math.max(
          0,
          Math.min(window.innerHeight, parentRect.bottom) - headerHeight
        )

        setSidebarScrollable(
          viewHeight < sidebarContentRef.current.clientHeight
        )
      }

      // Handle scroll
      const resetStickyGap = (base: 'top' | 'bottom') => {
        if (sidebarRect && parentRect) {
          setStickyGap(sidebarRect[base] - parentRect[base])
        }
      }

      const { scrollY } = window
      const scrollDelta = scrollY - previousScrollY

      if (scrollDelta < 0) {
        // Scroll up
        setIsScrollDown((prev) => {
          if (prev) resetStickyGap('bottom')
          return false
        })
      } else {
        // Scroll down
        setIsScrollDown((prev) => {
          if (!prev) resetStickyGap('top')
          return true
        })
      }
      previousScrollY = scrollY
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const sidebarStyle = useMemo<CSSProperties>(() => {
    if (!sidebarScrollable)
      return { alignSelf: 'start', top: 'var(--header-height)' }

    return {
      alignSelf: isScrollDown ? 'end' : 'start',
      top: !isScrollDown ? `var(--header-height)` : '',
      bottom: isScrollDown ? `0px` : '',
      marginBottom: stickyGap < 0 ? `${-stickyGap}px` : 0,
      marginTop: stickyGap >= 0 ? `${stickyGap}px` : 0,
    }
  }, [isScrollDown, sidebarScrollable, stickyGap])

  return (
    <>
      <div
        ref={headerHeightDetecterRef}
        className="fixed top-0 left-0 -z-10 h-[var(--header-height)] w-px opacity-0"
      />
      <div id="docs-container" className="text-sm xl:text-base">
        <div ref={sidebarRef} id="docs-sidebar" style={sidebarStyle}>
          <div ref={sidebarContentRef} className="sidebar-nav-content">
            <Navigation manifest={manifest} slug={slug} />
          </div>
        </div>
        <div className="my-6 w-px bg-gray-400" style={{ gridArea: 'border' }} />
        <div className="[grid-area:contents]">
          <div className="px-8 py-10">
            {breadcrumbs?.length && (
              <div className="mb-6 rounded bg-gray-300 p-2">
                <Breadcrumb breadcrumbs={breadcrumbs} />
              </div>
            )}
            <article id="docs-article" className="container">
              {children}
            </article>
          </div>
        </div>
      </div>
      {/* <div ref={docsClearfixRef} /> */}
      <style jsx>{`
        #docs-container {
          @apply grid;

          min-height: inherit;
          grid-template:
            'sidebar border contents' auto
            / minmax(16rem, 20%) 1px minmax(0, 1fr);
        }

        #docs-sidebar {
          @apply sticky [grid-area:sidebar];
        }

        #docs-article {
          @apply mx-auto px-6;

          --root-font-size: 0.9rem;
        }

        .sidebar-nav-content {
          @apply mx-auto w-64 px-8 py-10;

          min-width: 16rem;
        }

        @screen xl {
          #docs-container {
            grid-template:
              'sidebar border contents nav' auto
              / minmax(16rem, 20%) 1px minmax(0, 1fr) minmax(8rem, 15%);
          }

          #docs-article {
            --root-font-size: 1rem;
          }

          .sidebar-nav-content {
            @apply w-5/6;
          }
        }
      `}</style>
    </>
  )
}
