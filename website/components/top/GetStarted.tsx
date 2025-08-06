import classNames from 'classnames'
import { Button } from 'components/Button'

type CardProps = React.PropsWithChildren<{
  badge?: string
  className?: string
  description: string
  href: string
  name: string
  screenShot?: string
  ssWidth?: number
  ssHeight?: number
  summary: string
}>

const Card: React.FC<CardProps> = ({
  badge,
  children,
  className,
  description,
  href,
  name,
  screenShot: screenshot,
  ssWidth,
  ssHeight,
  summary,
}) => (
  <section className={classNames('card', className, { screenshot })}>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="custom-anchor card-link"
    >
      <h4 className="text-gradient inline-block pr-3 pb-1 text-xl font-bold sm:text-2xl md:text-3xl">
        {name}
      </h4>
      {badge && (
        <img
          src={badge}
          alt=""
          className="inline rounded-sm align-text-top sm:align-baseline"
          loading="lazy"
        />
      )}
      <p className="pt-1 text-sm leading-tight text-gray-700">{summary}</p>
    </a>
    {screenshot && (
      <figure>
        <img
          src={screenshot}
          alt={name}
          loading="lazy"
          width={ssWidth}
          height={ssHeight}
        />
      </figure>
    )}
    <p className="mx-5 lg:my-3">{description}</p>
    <p className="mx-5 my-4 text-sm">{children}</p>
    <style jsx>{`
      .card {
        @apply text-foreground relative my-8 grid overflow-hidden rounded-lg bg-white p-2 shadow-xl;

        grid-template-columns: 1fr;
      }
      .card::before {
        @apply absolute right-0 h-40 w-40 transform bg-contain bg-center bg-no-repeat opacity-25;

        content: '';
        top: -2rem;
        transform: rotate(-15deg);
      }
      .card.vscode::before {
        background-image: url('https://icongr.am/simple/visualstudiocode.svg?color=67b8e3');
      }
      .card.cli::before {
        background-image: url('https://icongr.am/octicons/terminal.svg?color=67b8e3');
      }
      .card.core::before {
        background-image: url('/assets/marp-logo.svg');
      }
      .card.marpit::before {
        background-image: url('/assets/marpit.svg');
      }
      .card > * {
        @apply relative col-start-1 col-end-1;
      }
      .card > figure {
        @apply mx-auto flex items-center justify-center p-4;
      }
      .card > figure > img {
        @apply max-w-full;

        width: 28rem;
      }

      .card-link {
        @apply relative z-10 block rounded p-5 transition-all duration-150;
      }
      .card-link:hover,
      .card-link:focus {
        @apply shadow;

        background-color: rgba(255, 255, 255, 0.5);
      }
      .card-link:hover:active,
      .card-link:focus {
        @apply duration-0 outline-none ring-1 ring-white ring-offset-2;
      }

      @screen lg {
        .card.screenshot {
          grid-template-columns: 3fr 2fr;
        }
        .card > figure {
          @apply col-start-2 col-end-2 h-full w-full object-contain px-6 py-0;

          grid-row: 1 / span 9999;
        }
        .card::before {
          @apply h-64 w-64;

          top: -4rem;
        }
      }

      @screen xl {
        .card {
          @apply mx-auto w-5/6;
        }
      }
    `}</style>
  </section>
)

export const GetStarted = () => (
  <>
    <div id="get-started" className="get-started flow-root">
      <section className="container mx-auto py-10 px-8 lg:px-16">
        <h3 className="text-center text-2xl font-bold sm:text-3xl">
          <mark>Tools and integrations</mark>
        </h3>
        <Card
          description="Enhance VS Code's Markdown preview pane to support writing your beautiful presentations. You can preview the slide deck output as soon as you edit its Markdown."
          name="Marp for VS Code"
          summary="Create slide decks written in Marp Markdown right in VS Code"
          badge="https://img.shields.io/visual-studio-marketplace/v/marp-team.marp-vscode.svg?style=flat-square&amp;label=&amp;colorB=0288d1"
          href="https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode"
          screenShot="/assets/marp-for-vs-code.png"
          ssWidth={1946}
          ssHeight={1424}
          className="vscode"
        >
          <Button
            color="primary"
            className="mr-2 mb-2"
            href="https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode"
            target="_blank"
            rel="noopener noreferrer"
          >
            VS Marketplace
          </Button>
          <Button
            outline
            className="mr-2 mb-2"
            href="https://github.com/marp-team/marp-vscode"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </Card>
        <Card
          description="The Marp CLI is the swiss army knife of the Marp ecosystem. Convert your Markdown into various formats, watch changes, launch server for on-demand conversion, and customize the core engine."
          name="Marp CLI"
          summary="A CLI interface for Marp and Marpit based converters"
          badge="https://img.shields.io/npm/v/@marp-team/marp-cli.svg?style=flat-square&amp;label=&amp;colorB=0288d1"
          href="https://github.com/marp-team/marp-cli"
          screenShot="/assets/marp-cli.png"
          ssWidth={1400}
          ssHeight={800}
          className="cli"
        >
          <Button
            color="primary"
            className="mr-2 mb-2"
            href="https://github.com/marp-team/marp-cli/releases"
            target="_blank"
            rel="noopener noreferrer"
          >
            Releases
          </Button>
          <Button
            outline
            color="primary"
            className="mr-2 mb-2"
            href="https://www.npmjs.com/package/@marp-team/marp-cli"
            target="_blank"
            rel="noopener noreferrer"
          >
            npm
          </Button>
          <Button
            outline
            className="mr-2 mb-2"
            href="https://github.com/marp-team/marp-cli"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </Card>
        <h3 className="text-center text-2xl font-bold sm:text-3xl">
          <mark>For developers</mark>
        </h3>
        <Card
          description="All official Marp tooling uses this core as the engine. It is based on the Marpit framework and includes some extra features to help create beautiful slide decks."
          name="Marp Core"
          summary="The core of the Marp converter"
          badge="https://img.shields.io/npm/v/@marp-team/marp-core.svg?style=flat-square&amp;label=&amp;colorB=0288d1"
          href="https://github.com/marp-team/marp-core"
          className="core"
        >
          <Button
            outline
            color="primary"
            className="mr-2 mb-2"
            href="https://www.npmjs.com/package/@marp-team/marp-core"
            target="_blank"
            rel="noopener noreferrer"
          >
            npm
          </Button>
          <Button
            outline
            className="mr-2 mb-2"
            href="https://github.com/marp-team/marp-core"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </Card>
        <Card
          description="Marpit (independent from Marp) is the framework that transforms Markdown and CSS themes to slide decks composed of HTML/CSS. It is optimized to output only the minimum set of assets required."
          name="Marpit framework"
          summary="The skinny framework for creating slide decks from Markdown"
          badge="https://img.shields.io/npm/v/@marp-team/marpit.svg?style=flat-square&amp;label=&amp;colorB=0288d1"
          href="https://marpit.marp.app/"
          className="marpit"
        >
          <Button
            color="primary"
            className="mr-2 mb-2"
            href="https://marpit.marp.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </Button>
          <Button
            outline
            color="primary"
            className="mr-2 mb-2"
            href="https://www.npmjs.com/package/@marp-team/marpit"
            target="_blank"
            rel="noopener noreferrer"
          >
            npm
          </Button>
          <Button
            outline
            className="mr-2 mb-2"
            href="https://github.com/marp-team/marpit"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </Card>
        <p className="mt-4 text-center">
          Find all of the Marp tools, integrations, and examples in the GitHub
          repository!
        </p>
        <p className="text-foreground mt-4 text-center text-sm">
          <Button
            href="https://github.com/marp-team/marp/"
            rel="noopener"
            target="_blank"
          >
            Check out Marp GitHub repository...
          </Button>
        </p>
      </section>
    </div>
    <style jsx>{`
      .get-started {
        @apply bg-marp-brand relative text-white;

        background-image: var(--noise-image),
          linear-gradient(
            -2deg,
            theme('colors.marp.darken'),
            theme('colors.marp.brand') 500px
          );
      }

      .get-started::before,
      .get-started::after {
        @apply absolute inset-x-0 block;

        background-image: var(--noise-image),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.4), transparent 95%);
        bottom: calc(100% - 5px);
        content: '';
        transform: translateZ(0);
        z-index: -1;
      }

      .get-started::before {
        @apply bg-marp-light;

        clip-path: polygon(0 0, 100% 90%, 100% 100%, 0 100%);
        height: calc(120px + 5vw);
      }

      .get-started::after {
        @apply bg-marp-brand;

        clip-path: polygon(0 0, 100% 95%, 100% 100%, 0 100%);
        height: calc(60px + 5vw);
      }
    `}</style>
  </>
)
