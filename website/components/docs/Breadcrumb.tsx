export type BreadcrumbProps = {
  breadcrumbs: React.ReactNode[]
}

export const Breadcrumb = ({ breadcrumbs }: BreadcrumbProps) => (
  <div className="breadcrumb-wrapper">
    <div className="breadcrumb-container">
      <ol>
        {breadcrumbs.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ol>
    </div>
    <style jsx>{`
      .breadcrumb-wrapper {
        @apply relative overflow-hidden h-6;
      }
      .breadcrumb-container {
        @apply absolute inset-0 flex items-center justify-end;
      }
      ol {
        @apply flex-1 inline-flex flex-no-wrap whitespace-no-wrap;
      }
      li {
        @apply block;
      }
      li::after {
        @apply pl-6 bg-no-repeat;

        background-image: url('https://icongr.am/octicons/triangle-right.svg?color=718096');
        background-position: 0.25rem center;
        background-size: 1rem 1rem;
        content: '';
      }
      li:last-child {
        @apply font-bold;
      }
      li:last-child::after {
        @apply hidden;
      }
    `}</style>
  </div>
)
