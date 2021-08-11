type CardProps = {
  name: string
  icon: string
  index: number
}

const Card: React.FC<CardProps> = ({ children, name, icon, index }) => (
  <section className="card">
    <div>
      <img
        className="mx-auto w-12 h-12 m-2 lg:w-16 lg:h-16"
        src={icon}
        alt={name}
        width={48}
        height={48}
      />
      <h2 className="text-gradient text-2xl text-center font-semibold my-4">
        {name}
      </h2>
      <p className="text-sm lg:text-base">{children}</p>
    </div>
    <style jsx>{`
      .card {
        @apply flex justify-center items-center bg-white shadow-lg rounded-lg mx-4 my-8 p-6 mb-0 relative z-10;

        grid-column: 1;
      }

      @screen md {
        .card {
          grid-row: ${index + 1} / span 2;
        }

        .card:first-child {
          @apply mt-0;
        }

        .card:nth-of-type(even) {
          grid-column: 2;
        }
      }
    `}</style>
  </section>
)

const cards = [
  ({ index }) => (
    <Card
      index={index}
      name="Based on CommonMark"
      icon="https://icongr.am/octicons/markdown.svg?color=4a5568"
    >
      If you know how to write document with Markdown, you already know how to
      write a Marp slide deck. Marp's format is based on{' '}
      <a
        href="https://commonmark.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        CommonMark
      </a>
      , a consistent Markdown specification. The only important difference is{' '}
      <a
        href="https://marpit.marp.app/markdown"
        rel="noopener noreferrer"
        target="_blank"
      >
        a ruler <code>---</code> for splitting pages.
      </a>
    </Card>
  ),
  ({ index }) => (
    <Card
      index={index}
      name="Directives and extended syntax"
      icon="https://icongr.am/octicons/code-square.svg?color=4a5568"
    >
      Sometimes simple text content isn't enough to emphasize your voice, so
      Marp supports a variety of{' '}
      <a
        href="https://marpit.marp.app/directives"
        rel="noopener noreferrer"
        target="_blank"
      >
        directives
      </a>{' '}
      and extended syntax (
      <a
        href="https://marpit.marp.app/image-syntax"
        rel="noopener noreferrer"
        target="_blank"
      >
        image syntax
      </a>
      ,{' '}
      <a
        href="https://github.com/marp-team/marp-core#math-typesetting"
        rel="noopener noreferrer"
        target="_blank"
      >
        math typesetting
      </a>
      ,{' '}
      <a
        href="https://github.com/marp-team/marp-core#auto-scaling-features"
        rel="noopener noreferrer"
        target="_blank"
      >
        auto-scaling
      </a>
      , etc...) to create beautiful slides.
    </Card>
  ),
  ({ index }) => (
    <Card
      index={index}
      name="Built-in themes and CSS theming"
      icon="https://icongr.am/octicons/paintbrush.svg?color=4a5568"
    >
      <a
        href="https://github.com/marp-team/marp-core/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Our core engine
      </a>{' '}
      has{' '}
      <a
        href="https://github.com/marp-team/marp-core/tree/main/themes"
        rel="noopener noreferrer"
        target="_blank"
      >
        3 built-in themes called <code>default</code>, <code>gaia</code>, and{' '}
        <code>uncover</code>
      </a>
      , to tell your story beautifully. If you'd rather customize your design,
      you can use Marp to{' '}
      <a
        href="https://marpit.marp.app/theme-css?id=tweak-style-through-markdown"
        rel="noopener noreferrer"
        target="_blank"
      >
        tweak styles with Markdown
      </a>
      , or{' '}
      <a
        href="https://marpit.marp.app/theme-css"
        rel="noopener noreferrer"
        target="_blank"
      >
        create your own Marp theme with plain CSS
      </a>
      .
    </Card>
  ),
  ({ index }) => (
    <Card
      index={index}
      name="Export to HTML, PDF, and PowerPoint"
      icon="https://icongr.am/octicons/file.svg?color=4a5568"
    >
      Have you finished writing? It&apos;s time to share your deck! Marp can
      convert Markdown into presentation-ready HTML, PDF and PowerPoint files
      directly! (Powered by{' '}
      <a
        href="https://www.google.com/chrome/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Google Chrome
      </a>{' '}
      /{' '}
      <a
        href="https://www.chromium.org/Home"
        rel="noopener noreferrer"
        target="_blank"
      >
        Chromium
      </a>
      )
    </Card>
  ),
  ({ index }) => (
    <Card
      index={index}
      name="Marp family: The official toolset"
      icon="https://icongr.am/octicons/package.svg?color=4a5568"
    >
      The Marp ecosystem contains a rich toolset to assist your work.{' '}
      <a
        href="https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode"
        rel="noopener noreferrer"
        target="_blank"
      >
        <b>Marp for VS Code</b>
      </a>{' '}
      is an extension that allows you to edit and preview slide Markdown and
      custom theming within VS Code.{' '}
      <a
        href="https://github.com/marp-team/marp-cli/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <b>Marp CLI</b>
      </a>{' '}
      is a command line tool allows you to convert Markdown with a simple CLI
      interface.{' '}
      <a
        href="https://github.com/marp-team/marp/"
        rel="noopener noreferrer"
        target="_blank"
      >
        ... and much more!
      </a>
    </Card>
  ),
  ({ index }) => (
    <Card
      index={index}
      name="Pluggable architecture"
      icon="https://icongr.am/octicons/plug.svg?color=4a5568"
    >
      As a matter of fact,{' '}
      <em>Marp is essentially just a converter for Markdown.</em> The Marp
      ecosystem is built on{' '}
      <a
        href="https://marpit.marp.app"
        rel="noopener noreferrer"
        target="_blank"
      >
        <b>the Marpit framework</b>
      </a>
      , a skinny framework for creating HTML/CSS slide decks. It has a pluggable
      architecture and any developer can{' '}
      <a
        href="https://marpit.marp.app/usage?id=extend-marpit-by-plugins"
        rel="noopener noreferrer"
        target="_blank"
      >
        extend features via plugins
      </a>
      .
    </Card>
  ),
  ({ index }) => (
    <Card
      index={index}
      name="Fully open-source"
      icon="https://icongr.am/octicons/heart-fill.svg?color=4a5568"
    >
      The Marp team loves open source! All tools and related libraries are built
      by{' '}
      <a
        href="https://github.com/marp-team"
        rel="noopener noreferrer"
        target="_blank"
      >
        the Marp team
      </a>{' '}
      and are MIT-licensed.
    </Card>
  ),
]

export const Features = () => (
  <div className="features">
    <div className="container features-grid">
      {cards.map((Card, i) => (
        <Card index={i} key={i} />
      ))}
    </div>
    <style jsx>{`
      .features {
        @apply relative py-5;
      }

      .features::before {
        @apply absolute block inset-0;

        background-image: url('/assets/noise.png'),
          linear-gradient(
            -8deg,
            rgba(120, 197, 233, 0),
            rgba(120, 197, 233, 0) 50%,
            rgba(120, 197, 233, 0.5)
          );
        clip-path: polygon(0 15vw, 100% 0, 100% 100%, 0 100%);
        content: '';
      }

      .features-grid {
        @apply grid mx-auto px-4;

        grid-template-columns: 1fr;
        grid-template-rows: repeat(${cards.length + 1}, auto);
      }

      @screen md {
        .features-grid {
          grid-template-columns: 1fr 1fr;
        }
      }
    `}</style>
  </div>
)
