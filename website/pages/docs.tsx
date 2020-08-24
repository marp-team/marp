import { useLayoutEffect, useRef, useState, RefObject } from 'react'
import Sticky from 'wil-react-sticky'
import { Layout } from 'components/Layout'

const useElementY = () => {
  const ref = useRef<HTMLElement>(null)
  const [y, setY] = useState(0)

  useLayoutEffect(() => {
    const { current } = ref
    if (!current) return

    const handleResize = () =>
      setY(current.getBoundingClientRect().y + window.scrollY)

    if (window.ResizeObserver) {
      const observer = new ResizeObserver(handleResize)

      observer.observe(current)
      return () => observer.disconnect()
    } else {
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return [ref as RefObject<any>, y] as const
}

const Docs = () => {
  const [containerRef, containerY] = useElementY()
  const sidebarStickyRef = useRef<Sticky>(null)
  const contentsStickyRef = useRef<Sticky>(null)

  useLayoutEffect(() => {
    const handleResize = () => {
      sidebarStickyRef.current?.['handleWindowScroll']()
      contentsStickyRef.current?.['handleWindowScroll']()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Layout>
      <div className="docs-container" ref={containerRef}>
        <div style={{ gridArea: 'sidebar' }}>
          <Sticky
            offsetTop={containerY}
            containerSelectorFocus=".docs-container"
            ref={sidebarStickyRef}
          >
            <div className="p-6 w-64 mx-auto">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur consequatur, officiis id, inventore laboriosam ipsa
                expedita dolore dignissimos corrupti doloribus nobis dicta modi
                unde temporibus delectus. Rerum quod earum voluptatum.
              </p>
              <p className="mt-64">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur consequatur, officiis id, inventore laboriosam ipsa
                expedita dolore dignissimos corrupti doloribus nobis dicta modi
                unde temporibus delectus. Rerum quod earum voluptatum.
              </p>
              <p className="mt-64">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur consequatur, officiis id, inventore laboriosam ipsa
                expedita dolore dignissimos corrupti doloribus nobis dicta modi
                unde temporibus delectus. Rerum quod earum voluptatum.
              </p>
              <p className="mt-64">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur consequatur, officiis id, inventore laboriosam ipsa
                expedita dolore dignissimos corrupti doloribus nobis dicta modi
                unde temporibus delectus. Rerum quod earum voluptatum.
              </p>
            </div>
          </Sticky>
        </div>
        <div className="w-px bg-gray-400 my-6" style={{ gridArea: 'border' }} />
        <div style={{ gridArea: 'contents' }}>
          <Sticky
            offsetTop={containerY}
            containerSelectorFocus=".docs-container"
            ref={contentsStickyRef}
          >
            <div className="p-6">
              <div className="container mx-auto">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur consequatur, officiis id, inventore laboriosam ipsa
                  expedita dolore dignissimos corrupti doloribus nobis dicta
                  modi unde temporibus delectus. Rerum quod earum voluptatum.
                </p>
                <p className="mt-64">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur consequatur, officiis id, inventore laboriosam ipsa
                  expedita dolore dignissimos corrupti doloribus nobis dicta
                  modi unde temporibus delectus. Rerum quod earum voluptatum.
                </p>
                <p className="mt-64">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur consequatur, officiis id, inventore laboriosam ipsa
                  expedita dolore dignissimos corrupti doloribus nobis dicta
                  modi unde temporibus delectus. Rerum quod earum voluptatum.
                </p>
                <p className="mt-64">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur consequatur, officiis id, inventore laboriosam ipsa
                  expedita dolore dignissimos corrupti doloribus nobis dicta
                  modi unde temporibus delectus. Rerum quod earum voluptatum.
                </p>
                <p className="mt-64">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur consequatur, officiis id, inventore laboriosam ipsa
                  expedita dolore dignissimos corrupti doloribus nobis dicta
                  modi unde temporibus delectus. Rerum quod earum voluptatum.
                </p>
              </div>
            </div>
          </Sticky>
        </div>
        <style jsx>{`
          .docs-wrapper {
            @apply flex;

            min-height: inherit;
          }

          .docs-container {
            @apply grid;

            min-height: inherit;
            grid-template-areas: 'sidebar border contents';
            grid-template-rows: 1fr;
            grid-template-columns: minmax(16rem, 25%) 1px 1fr;
          }
        `}</style>
      </div>
    </Layout>
  )
}

export default Docs
