export const Title: React.FC = ({ children }) => (
  <section className="border-b bg-marp-brand text-white  py-3">
    <h1 className="text-3xl font-bold text-center font-rounded uppercase">
      {children}
      <style jsx>{`
        & :global(a),
        & :global(a:hover),
        & :global(a:hover:active) {
          @apply no-underline text-current;
        }
        & :global(a:focus-visible) {
          @apply underline outline-none;
        }
      `}</style>
    </h1>
  </section>
)
