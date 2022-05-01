// eslint-disable-next-line @typescript-eslint/ban-types
export const Typography: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => (
  <div className="typography">
    {children}
    <style jsx>{`
      .typography {
        @apply break-words text-base leading-relaxed;
      }
      .typography :global(p) {
        @apply my-4;
      }
      .typography :global(h1) {
        @apply relative mt-8 mb-5 text-3xl font-bold;
      }
      .typography :global(h2) {
        @apply relative mt-8 mb-5 text-2xl font-bold;
      }
      .typography :global(h3) {
        @apply relative mt-8 mb-4 text-xl font-bold;
      }
      .typography :global(h4) {
        @apply relative mt-6 mb-4 text-lg font-bold;
      }
      .typography :global(h5) {
        @apply relative mt-6 mb-4 text-base font-bold;
      }
      .typography :global(h6) {
        @apply relative mt-6 mb-4 text-sm font-bold text-gray-600;
      }
      .typography :global(.anchor-link) {
        @apply absolute inset-0 my-auto -ml-5 hidden w-5 overflow-hidden whitespace-nowrap bg-left bg-no-repeat;

        background-size: 1rem 1rem;
        background-image: url('https://icongr.am/octicons/link.svg?color=718096');
      }
      .typography :global(h1:hover > .anchor-link),
      .typography :global(h2:hover > .anchor-link),
      .typography :global(h3:hover > .anchor-link),
      .typography :global(h4:hover > .anchor-link),
      .typography :global(h5:hover > .anchor-link),
      .typography :global(h6:hover > .anchor-link) {
        @apply block;
      }
      .typography :global(hr) {
        @apply my-8;
      }
      .typography :global(blockquote) {
        @apply border-marp-light my-6 border-l-4 pl-5 text-gray-600;
      }
      .typography :global(blockquote blockquote) {
        border-left-width: 3px;
      }
      .typography :global(blockquote blockquote blockquote) {
        @apply border-l-2;
      }
      .typography :global(ul) {
        @apply my-6 ml-8 mr-3 list-disc;
      }
      .typography :global(ul ul) {
        list-style-type: circle;
      }
      .typography :global(ul ul ul) {
        list-style-type: square;
      }
      .typography :global(ol:not(.code-block)) {
        @apply my-6 ml-8 mr-3 list-decimal;
      }
      .typography :global(ul ul),
      .typography :global(ul ol:not(._)),
      .typography :global(ol:not(._) ul),
      .typography :global(ol:not(._) ol:not(._)) {
        @apply my-0 mr-0;
      }
      .typography :global(li:not(.code-block)) {
        @apply my-1;
      }
      .typography :global(code:not(.code-block)) {
        @apply rounded border border-gray-400 bg-gray-200;

        font-size: 0.9em;
        padding: 0.15em 0.35em;
      }
      .typography :global(pre) {
        @apply my-6;
      }
      .typography :global(img) {
        @apply inline;
      }
      .typography :global(figure) {
        @apply my-6;
      }
      .typography :global(figure img) {
        @apply mx-auto block;
        max-width: min(theme('screens.md'), 100%);
      }
      .typography :global(figcaption) {
        @apply mx-auto my-4 w-11/12 text-center text-sm text-gray-600;
      }
      .typography :global(table) {
        @apply mx-auto my-8 max-w-full;
      }
      .typography :global(td),
      .typography :global(th) {
        @apply border-b border-gray-400 p-2 text-sm;
      }
      .typography :global(thead tr:last-child td),
      .typography :global(thead tr:last-child th) {
        @apply border-b-2;
      }

      @screen sm {
        .typography :global(td),
        .typography :global(th) {
          @apply py-2 px-4;
        }
      }

      @screen md {
        .typography :global(td),
        .typography :global(th) {
          @apply text-base;
        }
      }

      .typography > :global(*:first-child),
      .typography > :global(*:first-child *:first-child) {
        @apply mt-0;
      }
      .typography > :global(*:last-child),
      .typography > :global(*:last-child *:last-child) {
        @apply mb-0;
      }
    `}</style>
  </div>
)
