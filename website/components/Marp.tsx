import { Marp as MarpCore } from '@marp-team/marp-core'
import { browser } from '@marp-team/marp-core/browser'
import classNames from 'classnames'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { Swiper as SwiperClass } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'

export type RenderedMarp = ReturnType<typeof generateRenderedMarp>

export type MarpProps = {
  border?: boolean
  className?: string
  rendered: Pick<RenderedMarp, 'css' | 'html'>
  page?: number
}

export const generateRenderedMarp = (markdown: string) => {
  const marp = new MarpCore({
    container: false,
    script: false,
    printable: false,
    math: 'mathjax', // KaTeX web fonts won't load in shadow DOM so we have to use prerendered MathJax SVG
  })

  return { markdown, ...marp.render(markdown, { htmlAsArray: true }) }
}

export const Marp = ({
  border = true,
  className,
  rendered: { css, html },
  page = 1,
}: MarpProps) => {
  const element = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!element.current) return
    if (!element.current.shadowRoot)
      element.current.attachShadow({ mode: 'open' })

    // Render Marp slide to shadow root (tailwind default styles will break Marp slide CSS)
    const root = element.current.shadowRoot as ShadowRoot

    root.innerHTML =
      html[page - 1] +
      `<style>${css}</style><style>:host{all:initial;}:host>[data-marpit-svg]{vertical-align:top;}</style>`

    return browser(root)
  }, [css, html, page])

  return (
    <div className={classNames(border && 'border shadow-lg', className)}>
      <span ref={element} />
    </div>
  )
}

export const MarpSlides = (props) => {
  const htmlRaw: string = props['data-html']
  const css: string = props['data-css']

  const [activePageIdx, setActivePageIdx] = useState(0)
  const swiper = useRef<SwiperClass>()
  const html = useMemo(() => JSON.parse(htmlRaw) as string[], [htmlRaw])
  const multiple = html.length > 1

  const handleActiveIndexChange = useCallback((instance: SwiperClass) => {
    setActivePageIdx(instance.activeIndex)
  }, [])

  const handleSwiper = useCallback(
    (instance: SwiperClass) => {
      swiper.current = instance
      handleActiveIndexChange(instance)
    },
    [handleActiveIndexChange]
  )

  return (
    <section className={classNames('marp-slides', multiple && 'multiple')}>
      {multiple && (
        <button
          aria-label="Prev"
          className="marp-navigation left-0"
          disabled={activePageIdx <= 0}
          onClick={() => swiper.current?.slidePrev()}
          translate="no"
        >
          &laquo;
        </button>
      )}
      <Swiper
        enabled={multiple.toString() as any}
        allowTouchMove={multiple}
        speed={200}
        onActiveIndexChange={handleActiveIndexChange}
        onSwiper={handleSwiper}
      >
        {html.map((h, i) => (
          <SwiperSlide key={h}>
            <div inert={activePageIdx === i ? undefined : ''}>
              <Marp border={false} rendered={{ html, css }} page={i + 1} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {multiple && (
        <button
          aria-label="Next"
          className="marp-navigation right-0"
          disabled={activePageIdx >= html.length - 1}
          onClick={() => swiper.current?.slideNext()}
          translate="no"
        >
          &raquo;
        </button>
      )}
      <style jsx>{`
        .marp-slides {
          @apply relative bg-gray-200 my-6 w-full max-w-sm mx-auto border shadow-lg lg:max-w-lg;
        }
        .marp-slides.multiple {
          @apply px-8;
        }

        .marp-navigation {
          @apply absolute appearance-none inset-y-0 w-8 z-10 bg-gray-300 text-gray-600 text-4xl outline-none;

          user-select: none;
        }
        .marp-navigation:hover:not(:disabled) {
          @apply bg-gray-400;
        }
        .marp-navigation:hover:active {
          @apply text-gray-700;
        }
        .marp-navigation:disabled {
          @apply text-opacity-30 pointer-events-none;
        }
        .marp-navigation:focus-visible {
          @apply ring-2 ring-marp-brand;
        }
      `}</style>
    </section>
  )
}
