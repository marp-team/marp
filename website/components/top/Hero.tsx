import Head from 'next/head'
import { Button } from 'components/Button'

const marp = '/assets/marp.svg' as const
const heroBg = '/assets/hero-background.jpg' as const

export const Hero = () => (
  <>
    <Head>
      <link rel="preload" href={heroBg} as="image" />
      <link rel="preload" href={marp} as="image" />
    </Head>
    <section className="py-16 px-4 border-b md:py-24 md:tracking-wider">
      <h1 className="text-center font-rounded font-bold sm:text-xl md:text-2xl">
        <img
          src={marp}
          alt="Marp: Markdown Presentation Ecosystem"
          className="mx-auto w-4/5 h-auto max-w-xl mb-5 p-3"
          width={1045}
          height={320}
        />
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
          Find out Marp tools at GitHub...
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
