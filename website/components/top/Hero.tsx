import Head from 'next/head'
import { Button } from 'components/Button'
import Marp from 'public/assets/marp.svg'

const heroBg = '/assets/hero-background.svg' as const

export const Hero = () => (
  <>
    <Head>
      <link rel="preload" href={heroBg} as="image" />
    </Head>
    <section className="py-16 px-4 border-b md:py-24 md:tracking-wider">
      <h1 className="text-center font-rounded font-bold sm:text-xl md:text-2xl">
        <Marp className="mx-auto w-4/5 h-auto max-w-xl mb-5 p-3" />
        <span className="sr-only">Marp:</span>
        Markdown Presentation Ecosystem
      </h1>
      <p className="text-center mt-10">
        <Button
          href="#get-started"
          color="primary"
          className="text-xl md:text-2xl"
        >
          Get started!
        </Button>
      </p>
      <p className="text-center mt-5">
        <Button
          href="https://github.com/marp-team/marp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-base"
          color="primary"
          outline
        >
          Find Marp tools on GitHub!
        </Button>
      </p>
      <style jsx>{`
        section {
          background: #fcfcfc url('${heroBg}') no-repeat right center;
          background-size: cover;
        }
      `}</style>
    </section>
  </>
)
