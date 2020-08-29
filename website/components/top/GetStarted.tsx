import classNames from 'classnames'
import { Button } from 'components/Button'

type CardProps = {
  badge?: string
  className?: string
  description: string
  href: string
  name: string
  screenShot?: string
  ssWidth?: number
  ssHeight?: number
  summary: string
}

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
      <h4 className="inline-block font-bold text-gradient pr-3 pb-1 text-xl sm:text-2xl md:text-3xl">
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
      <p className="text-gray-700 text-sm pt-1 leading-tight">{summary}</p>
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
    <p className="text-sm mx-5 my-4">{children}</p>
    <style jsx>{`
      .card {
        @apply bg-white text-foreground relative grid my-8 p-2 rounded-lg shadow-xl overflow-hidden;

        grid-template-columns: 1fr;
      }
      .card::before {
        @apply absolute right-0 w-40 h-40 opacity-25 transform bg-center bg-no-repeat bg-contain;

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
        @apply flex justify-center items-center mx-auto p-4;
      }
      .card > figure > img {
        @apply max-w-full;

        width: 28rem;
      }

      .card-link {
        @apply relative block p-5 transition-all duration-150 rounded z-10;
      }
      .card-link:hover,
      .card-link:focus {
        @apply shadow;

        background-color: rgba(255, 255, 255, 0.5);
      }
      .card-link:hover:active,
      .card-link:focus {
        @apply shadow-outline outline-none duration-0;
      }

      @screen lg {
        .card.screenshot {
          grid-template-columns: 3fr 2fr;
        }
        .card > figure {
          @apply col-start-2 col-end-2 w-full h-full object-contain px-6 py-0;

          grid-row: 1 / span 9999;
        }
        .card::before {
          @apply w-64 h-64;

          top: -4rem;
        }
      }

      @screen xl {
        .card {
          @apply w-5/6 mx-auto;
        }
      }
    `}</style>
  </section>
)

export const GetStarted = () => (
  <>
    <span id="get-started" className="named-anchor" />
    <div className="get-started clearfix">
      <section className="container mx-auto py-10 px-8 lg:px-16">
        <h3 className="font-bold text-center text-2xl sm:text-3xl">
          <mark>Tools and integrations</mark>
        </h3>
        <Card
          description="Enhance VS Code's Markdown preview pane to support writing your beautiful presentation. You can see the slide deck output as soon as editting Markdown."
          name="Marp for VS Code"
          summary="Create slide deck written in Marp Markdown, in VS Code"
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
          description="CLI is the swiss army knife for Marp ecosystem. Convert your Markdown into various formats, watch changes, launch server for on-demand conversion, and customize engine."
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
        <h3 className="font-bold text-center text-2xl sm:text-3xl">
          <mark>For developers</mark>
        </h3>
        <Card
          description="All official Marp tools provided by us are using this core as the engine. It is based on Marpit framework, and includes some extended features to help creating beautiful slide deck."
          name="Marp Core"
          summary="The core of Marp converter"
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
          description="Marpit, independented from Marp, is the skinny framework to transform Markdown + CSS theme to the deck composed of HTML + CSS. It has designed to output only minimum assets."
          name="Marpit framework"
          summary="The skinny framework for creating slide deck from Markdown"
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
        <p className="text-center mt-4">
          ...and find out all tools, integrations, examples at our GitHub
          entrance repository!
        </p>
        <p className="text-center text-sm text-foreground mt-4">
          <Button
            href="https://github.com/marp-team/marp/"
            rel="noopener"
            target="_blank"
          >
            Go to the entrance repository of Marp...
          </Button>
        </p>
      </section>
    </div>
    <style jsx>{`
      .get-started {
        @apply relative bg-marp-brand text-white;

        background-image: url('/assets/noise.png'),
          linear-gradient(
            -2deg,
            theme('colors.marp.darken'),
            theme('colors.marp.brand') 500px
          );
      }

      .get-started::before,
      .get-started::after {
        @apply block absolute inset-x-0;

        background-image: url('/assets/noise.png'),
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
