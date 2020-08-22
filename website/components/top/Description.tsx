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
        The great experience to create slide deck with Markdown
      </h2>
      <p className="w-5/6 mx-auto mt-8 md:text-lg lg:w-2/3">
        Marp, Markdown Presentation Ecosystem, provides the great experience to
        create beautiful slide deck. You only have to focus writing your story
        in Markdown document.
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
          We&apos;re rendering slides generated in{' '}
          <a href="https://github.com/marp-team/marp-core">Marp Core</a>
        </figcaption>
      </figure>
      <p className="text-center mt-8 mx-auto w-5/6">
        <Button
          className="text-sm"
          onClick={() => setShowExample((v) => !v)}
          aria-expanded={showExample}
        >
          {showExample ? 'Hide' : 'Show'} Markdown example...
          <img
            className={classNames(
              'inline w-4 h-4 ml-1 transform transition-transform duration-300 md:w-6 md:h-6 md:-my-1',
              showExample && '-rotate-180'
            )}
            style={showExample ? {} : { verticalAlign: 'sub' }}
            src="https://icongr.am/octicons/chevron-down.svg?color=4a5568"
            alt=""
            width={24}
            height={24}
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
    </section>
  )
}
