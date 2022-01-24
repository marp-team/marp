import Head from 'next/head'
import { Button } from 'components/Button'
import Marp from 'public/assets/marp.svg'

const heroBg = '/assets/hero-background.svg' as const

export const Hero = () => (
  <>
    <Head>
      <link rel="preload" href={heroBg} as="image" />
    </Head>
    <section className="border-b py-16 px-4 md:py-24 md:tracking-wider">
      <h1 className="font-rounded text-center font-bold sm:text-xl md:text-2xl">
        <Marp className="mx-auto mb-5 h-auto w-4/5 max-w-xl p-3" />
        <span className="sr-only">Marp:</span>
        Markdown Presentation Ecosystem
      </h1>
      <p className="mt-10 text-center">
        <Button
          href="#get-started"
          color="primary"
          className="text-xl md:text-2xl"
        >
          Get started!
        </Button>
      </p>
      <p className="mt-5 text-center">
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
