import { ChevronDownIcon } from '@primer/octicons-react'
import classNames from 'classnames'
import { useState } from 'react'
import { Button } from 'components/Button'
import { CodeBlock } from 'components/CodeBlock'
import { Marp, RenderedMarp } from 'components/Marp'

export type DescriptionProps = {
  example: RenderedMarp
}

export const Description = ({ example }: DescriptionProps) => {
  const [showExample, setShowExample] = useState(false)

  return (
    <section className="container mx-auto py-16">
      <h2 className="w-5/6 mx-auto text-gradient text-center text-3xl font-bold md:text-4xl">
        Create beautiful slide decks using an intuitive Markdown experience
      </h2>
      <p className="w-5/6 mx-auto mt-8 md:text-lg lg:w-2/3">
        Marp (also known as the Markdown Presentation Ecosystem) provides an
        intuitive experience for creating beautiful slide decks. You only have
        to focus on writing your story in a Markdown document.
      </p>
      <figure className="text-center m-8 mb-0">
        <Marp
          rendered={example}
          page={1}
          className="max-w-sm w-full inline-block"
        />
        <Marp
          rendered={example}
          page={2}
          className="max-w-sm w-full inline-block mt-5 lg:ml-5 lg:mt-0"
        />
        <figcaption className="mt-5 text-sm text-gray-700">
          The slides above are from generated directly from{' '}
          <a href="https://github.com/marp-team/marp-core">Marp Core</a>
        </figcaption>
      </figure>
      <p className="show-example-section">
        <Button
          className="show-example-btn"
          onClick={() => setShowExample((v) => !v)}
          aria-expanded={showExample}
        >
          {showExample ? 'Hide' : 'Show'} Markdown example...
          <ChevronDownIcon
            className={classNames(
              'show-example-btn-chevron',
              showExample && 'show'
            )}
          />
        </Button>
      </p>
      <div
        aria-hidden={!showExample}
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: showExample ? '1000px' : '0' }}
      >
        <CodeBlock
          language="markdown"
          lineNumber
          className="mx-auto mt-5 w-5/6 xl:w-2/3"
          copyButton={showExample}
        >
          {example.markdown}
        </CodeBlock>
      </div>
      <style jsx>{`
        .show-example-section {
          @apply text-center mt-8 mx-auto w-5/6;
        }
        .show-example-section :global(.show-example-btn) {
          @apply text-sm;
        }
        .show-example-section :global(.show-example-btn-chevron) {
          @apply w-4 h-4 ml-1 transform transition-transform duration-300 md:w-6 md:h-6 md:-my-1;
        }
        .show-example-section :global(.show-example-btn-chevron:not(.show)) {
          @apply relative;

          top: -1px;
        }
        .show-example-section :global(.show-example-btn-chevron.show) {
          @apply -rotate-180;
        }

        @screen md {
          .show-example-section :global(.show-example-btn-chevron:not(.show)) {
            top: -2px;
          }
        }
      `}</style>
    </section>
  )
}
