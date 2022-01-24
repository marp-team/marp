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
      <h2 className="text-gradient mx-auto w-5/6 text-center text-3xl font-bold md:text-4xl">
        Create beautiful slide decks using an intuitive Markdown experience
      </h2>
      <p className="mx-auto mt-8 w-5/6 md:text-lg lg:w-2/3">
        Marp (also known as the Markdown Presentation Ecosystem) provides an
        intuitive experience for creating beautiful slide decks. You only have
        to focus on writing your story in a Markdown document.
      </p>
      <figure className="m-8 mb-0 text-center">
        <Marp
          rendered={example}
          page={1}
          className="inline-block w-full max-w-sm"
        />
        <Marp
          rendered={example}
          page={2}
          className="mt-5 inline-block w-full max-w-sm lg:ml-5 lg:mt-0"
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
          @apply mx-auto mt-8 w-5/6 text-center;
        }
        .show-example-section :global(.show-example-btn) {
          @apply text-sm;
        }
        .show-example-section :global(.show-example-btn-chevron) {
          @apply ml-1 h-4 w-4 transform transition-transform duration-300 md:-my-1 md:h-6 md:w-6;
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
