export const Typography: React.FC = ({ children }) => (
  <div className="typography">
    {children}
    <style jsx>{`
      .typography {
        @apply break-words leading-relaxed text-base;
      }
      .typography :global(p) {
        @apply my-4;
      }
      .typography :global(h1) {
        @apply relative font-bold text-3xl mt-8 mb-5;
      }
      .typography :global(h2) {
        @apply relative font-bold text-2xl mt-8 mb-5;
      }
      .typography :global(h3) {
        @apply relative font-bold text-xl mt-8 mb-4;
      }
      .typography :global(h4) {
        @apply relative font-bold text-lg mt-6 mb-4;
      }
      .typography :global(h5) {
        @apply relative font-bold text-base mt-6 mb-4;
      }
      .typography :global(h6) {
        @apply relative font-bold text-sm text-gray-600 mt-6 mb-4;
      }
      .typography :global(.anchor-link) {
        @apply absolute inset-0 w-5 -ml-5 overflow-hidden whitespace-no-wrap my-auto bg-no-repeat bg-left hidden;

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
        @apply text-gray-600 border-l-4 border-marp-light pl-5 my-6;
      }
      .typography :global(blockquote blockquote) {
        border-left-width: 3px;
      }
      .typography :global(blockquote blockquote blockquote) {
        @apply border-l-2;
      }
      .typography :global(ul) {
        @apply list-disc ml-8 mr-3 my-6;
      }
      .typography :global(ul ul) {
        list-style-type: circle;
      }
      .typography :global(ul ul ul) {
        list-style-type: square;
      }
      .typography :global(ol:not(.code-block)) {
        @apply list-decimal ml-8 mr-3 my-6;
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
        @apply bg-gray-200 border rounded border-gray-400;

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
        @apply block mx-auto max-w-screen-md w-full;
      }
      .typography :global(figcaption) {
        @apply text-gray-600 text-sm text-center mx-auto w-11/12 my-4;
      }
      .typography :global(table) {
        @apply max-w-full mx-auto my-8;
      }
      .typography :global(td),
      .typography :global(th) {
        @apply p-2 border-b border-gray-500 text-sm;
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
