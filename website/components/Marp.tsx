import { Marp as MarpCore } from '@marp-team/marp-core'
import { browser } from '@marp-team/marp-core/browser'
import classNames from 'classnames'
import { useEffect, useRef } from 'react'

export type RenderedMarp = ReturnType<typeof generateRenderedMarp>

export type MarpProps = {
  className?: string
  rendered: Pick<RenderedMarp, 'css' | 'html'>
  page?: number
}

export const generateRenderedMarp = (markdown: string) => {
  const marp = new MarpCore({
    container: false,
    script: false,
    printable: false,
  })

  return { markdown, ...marp.render(markdown, { htmlAsArray: true }) }
}

export const Marp = ({
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
    <div className={classNames('border shadow-lg', className)}>
      <span ref={element} />
    </div>
  )
}
