import { Marp as MarpCore } from '@marp-team/marp-core'
import classNames from 'classnames'
import postcss, { Plugin } from 'postcss'
import postcssImportUrl from 'postcss-import-url'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { Swiper as SwiperClass } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useFontFace } from 'utils/hooks/useFontFace'

export type RenderedMarp = ReturnType<
  typeof generateRenderedMarp
> extends Promise<infer T>
  ? T
  : never

export type MarpProps = {
  border?: boolean
  className?: string
  rendered: Pick<RenderedMarp, 'css' | 'html' | 'fonts'>
  page?: number
}

const postcssStripFontFace = Object.assign(
  (): Plugin => ({
    postcssPlugin: 'marp-strip-font-face',
    AtRule: (rule, { result }) => {
      if (rule.name === 'font-face') {
        result['fonts'] = [...(result['fonts'] || []), rule]
        rule.remove()
      }
    },
  }),
  { postcss: true as const }
)

export const generateRenderedMarp = async (markdown: string) => {
  const marp = new MarpCore({
    container: false,
    script: false,
    printable: false,
  })

  const { css, html } = marp.render(markdown, { htmlAsArray: true })

  const result = await postcss()
    .use(postcssImportUrl)
    .use(postcssStripFontFace)
    .process(css, { from: undefined })

  const fonts: string[] = (result['fonts'] || []).map((font) => font.toString())

  return { markdown, html, css: result.css, fonts }
}

export const Marp = ({
  border = true,
  className,
  rendered: { css, html, fonts },
  page = 1,
}: MarpProps) => {
  const element = useRef<HTMLDivElement>(null)

  useFontFace(fonts)

  useEffect(() => {
    if (!element.current) return
    if (!element.current.shadowRoot)
      element.current.attachShadow({ mode: 'open' })

    // Render Marp slide to shadow root (tailwind default styles will break Marp slide CSS)
    const root = element.current.shadowRoot as ShadowRoot

    root.innerHTML =
      html[page - 1] +
      `<style>${css}</style><style>:host{all:initial;}:host>[data-marpit-svg]{vertical-align:top;}</style>`

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require('@marp-team/marp-core/browser').browser(root)
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
  const fontsRaw: string = props['data-fonts']

  const [activePageIdx, setActivePageIdx] = useState(0)
  const swiper = useRef<SwiperClass>()
  const html = useMemo(() => JSON.parse(htmlRaw) as string[], [htmlRaw])
  const multiple = html.length > 1
  const fonts = useMemo(() => JSON.parse(fontsRaw) as string[], [fontsRaw])

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
              <Marp
                border={false}
                rendered={{ html, css, fonts }}
                page={i + 1}
              />
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
          @apply relative my-6 mx-auto w-full max-w-sm border bg-gray-200 shadow-lg lg:max-w-lg;
        }
        .marp-slides.multiple {
          @apply px-8;
        }

        .marp-navigation {
          @apply absolute inset-y-0 z-10 w-8 appearance-none bg-gray-300 text-4xl text-gray-600 outline-none;

          user-select: none;
        }
        .marp-navigation:hover:not(:disabled) {
          @apply bg-gray-400;
        }
        .marp-navigation:hover:active {
          @apply text-gray-700;
        }
        .marp-navigation:disabled {
          @apply pointer-events-none text-opacity-30;
        }
        .marp-navigation:focus-visible {
          @apply ring-marp-brand ring-2;
        }
      `}</style>
    </section>
  )
}
