import { useEffect, useRef, useState, RefObject } from 'react'
import SimpleBar from 'simplebar-react'
import { Breadcrumb } from 'components/docs/Breadcrumb'
import { LayoutProps } from 'components/docs/Layout'
import { Navigation } from 'components/docs/Navigation'

const useBoundingClientRect = () => {
  const ref = useRef<HTMLElement>(null)
  const [value, setValue] = useState<DOMRect | null>(null)

  useEffect(() => {
    const { current } = ref
    if (!current) return

    const handle = () => setValue(current.getBoundingClientRect())
    window.addEventListener('scroll', handle)
    window.addEventListener('resize', handle)

    const eventCleanup = () => {
      window.removeEventListener('scroll', handle)
      window.removeEventListener('resize', handle)
    }

    if (window.ResizeObserver) {
      const observer = new ResizeObserver(handle)
      observer.observe(current)

      return () => {
        observer.disconnect()
        eventCleanup()
      }
    }

    return eventCleanup
  }, [])

  return [ref as RefObject<any>, value] as const
}

export const Desktop: React.FC<LayoutProps> = ({
  breadcrumbs,
  children,
  manifest,
  slug,
}) => {
  const [docsClearfixRef, docsClearfixRect] = useBoundingClientRect()

  const footerAppearedHeight =
    docsClearfixRect &&
    document.documentElement.clientHeight - docsClearfixRect.top

  const navHeight = `calc(100vh - ${
    Math.max(0, footerAppearedHeight ?? 0) + 80
  }px)`

  return (
    <>
      <div id="docs-container" className="text-sm xl:text-base">
        <div style={{ gridArea: 'sidebar' }}>
          <div
            className="sidebar-nav-container"
            style={{
              top: 80 + Math.max(0, footerAppearedHeight ?? 0),
              height: navHeight,
            }}
          >
            <SimpleBar className="sidebar-nav" style={{ maxHeight: navHeight }}>
              <div className="sidebar-nav-content">
                <Navigation manifest={manifest} slug={slug} />
              </div>
            </SimpleBar>
          </div>
        </div>
        <div className="w-px bg-gray-400 my-6" style={{ gridArea: 'border' }} />
        <div style={{ gridArea: 'contents' }}>
          <div className="px-8 py-10">
            {breadcrumbs?.length && (
              <div className="bg-gray-300 rounded mb-6 p-2">
                <Breadcrumb breadcrumbs={breadcrumbs} />
              </div>
            )}
            <article id="docs-article" className="container">
              {children}
            </article>
          </div>
        </div>
      </div>
      <div ref={docsClearfixRef} />
      <style jsx>{`
        #docs-container {
          @apply grid;

          min-height: inherit;
          grid-template-areas: 'sidebar border contents contents';
          grid-template-rows: 1fr;
          grid-template-columns: minmax(16rem, 20%) 1px 1fr minmax(8rem, 15%);
        }

        #docs-article {
          @apply mx-auto px-6;

          --root-font-size: 0.9rem;
        }

        .sidebar-nav-container {
          @apply sticky overflow-hidden;
        }

        & :global(.sidebar-nav) {
          @apply overflow-y-auto max-h-full;
        }

        & :global(.sidebar-nav .simplebar-track.simplebar-vertical) {
          width: 9px;
        }
        & :global(.sidebar-nav .simplebar-scrollbar::before) {
          @apply bg-gray-600;
        }

        .sidebar-nav-content {
          @apply px-8 py-10 w-64 mx-auto;

          min-width: 16rem;
        }

        @screen xl {
          #docs-container {
            grid-template-areas: 'sidebar border contents nav';
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
