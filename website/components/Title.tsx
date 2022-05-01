// eslint-disable-next-line @typescript-eslint/ban-types
export const Title: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <section className="bg-marp-brand border-b py-3  text-white">
    <h1 className="font-rounded text-center text-3xl font-bold uppercase">
      {children}
      <style jsx>{`
        & :global(a),
        & :global(a:hover),
        & :global(a:hover:active) {
          @apply text-current no-underline;
        }
        & :global(a:focus-visible) {
          @apply underline outline-none;
        }
      `}</style>
    </h1>
  </section>
)
