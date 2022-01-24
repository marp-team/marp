/* eslint-disable react/jsx-key */
import classNames from 'classnames'
import Highlight, {
  defaultProps,
  Language,
  PrismTheme,
} from 'prism-react-renderer'
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight'
import { useRef, useState, MouseEvent } from 'react'
import { Button } from 'components/Button'

const theme: PrismTheme = {
  plain: {
    ...nightOwlLight.plain,
    backgroundColor: '#f5f5f5',
  },
  styles: [
    ...nightOwlLight.styles,
    { types: ['italic'], style: { fontStyle: 'italic' } },
    { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
  ],
}

export type CodeBlockProps = {
  children: string
  copyButton?: boolean
  language: Language
  lineNumber?: boolean
  [key: string]: unknown
}

export const CodeBlock = ({
  children,
  className,
  copyButton,
  language,
  lineNumber = false,
  ...rest
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false)
  const copiedTimer = useRef<number | undefined>(undefined)

  return (
    <>
      <Highlight
        {...defaultProps}
        code={children}
        language={language}
        theme={theme}
      >
        {({ className: cn, style, tokens, getLineProps, getTokenProps }) => (
          <div className={classNames('code-block-container', className as any)}>
            <pre
              className={classNames(lineNumber && 'line-number', cn)}
              style={style}
              {...rest}
            >
              <code className="code-block">
                <ol className="code-block">
                  {tokens.map((line, i) => {
                    const lineProps = getLineProps({ line, key: i })

                    return (
                      <li
                        {...lineProps}
                        className={classNames(
                          lineProps.className,
                          'code-block'
                        )}
                      >
                        {line.map((token, key) =>
                          token.empty ? (
                            <br key={key} />
                          ) : (
                            <span {...getTokenProps({ token, key })} />
                          )
                        )}
                      </li>
                    )
                  })}
                </ol>
              </code>
            </pre>
            {copyButton && (
              <div className="copy-btn-container">
                <Button
                  className={copied ? 'copied' : undefined}
                  onClick={(e: MouseEvent<HTMLButtonElement>) => {
                    const tmpTextarea = document.createElement('textarea')
                    tmpTextarea.value = children

                    tmpTextarea.style.position = 'absolute'
                    tmpTextarea.style.left = '0'
                    tmpTextarea.style.top = '0'
                    tmpTextarea.style.opacity = '0'
                    tmpTextarea.style.pointerEvents = 'none'

                    document.body.appendChild(tmpTextarea)
                    tmpTextarea.select()

                    document.execCommand('copy')
                    document.body.removeChild(tmpTextarea)
                    e.currentTarget.focus()

                    // Update React state
                    setCopied(true)

                    if (copiedTimer.current !== undefined) {
                      window.clearTimeout(copiedTimer.current)
                    }

                    copiedTimer.current = window.setTimeout(() => {
                      copiedTimer.current = undefined
                      setCopied(false)
                    }, 1000)
                  }}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
              </div>
            )}
          </div>
        )}
      </Highlight>
      <style jsx>{`
        .code-block-container {
          @apply relative;
        }

        .prism-code {
          @apply overflow-x-auto overflow-y-hidden whitespace-pre break-words rounded-md border text-sm leading-5;

          font-family: inherit;
          background-image: var(--noise-image);
        }

        .prism-code code {
          @apply inline-block min-w-full p-4 font-mono;
        }

        .prism-code.line-number {
          @apply whitespace-pre-wrap;
        }

        .prism-code.line-number ol {
          counter-reset: line 0;
        }

        .prism-code.line-number li {
          @apply relative pl-12;

          counter-increment: line;
        }

        .prism-code.line-number li::before {
          @apply absolute inset-0 w-12 pr-3 text-right text-xs leading-5 text-gray-500;

          content: counter(line);
        }

        .copy-btn-container {
          @apply absolute top-0 right-0 m-3;
        }

        .copy-btn-container :global(button) {
          @apply w-24 py-1 text-xs opacity-0 transition-opacity duration-300;
        }

        .code-block-container:hover .copy-btn-container :global(button),
        .copy-btn-container :global(button):focus {
          @apply opacity-100;
        }
      `}</style>
    </>
  )
}
