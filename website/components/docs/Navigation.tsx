import classNames from 'classnames'
import Link from 'next/link'

export type NavigationProps = {
  manifest: Record<string, any>
  slug: string[]
}

export const Navigation = ({
  manifest,
  slug: currentSlug,
}: NavigationProps) => {
  const activePage = `/docs/${currentSlug.join('/')}`

  return (
    <div>
      {Object.entries<any>(manifest).map(([slug, meta]) => (
        <ul className="category" key={slug}>
          <li>
            {meta.title && <h3 className="category-title">{meta.title}</h3>}
            {meta.pages && (
              <ul>
                {Object.entries<any>(meta.pages).map(([pSlug, pMeta]) => {
                  const href = `/docs/${slug}/${pSlug}`

                  return (
                    <Link href={href} key={pSlug}>
                      <a
                        className={classNames(
                          'page-link custom-anchor',
                          href === activePage && 'active'
                        )}
                      >
                        <li>{pMeta.title}</li>
                      </a>
                    </Link>
                  )
                })}
              </ul>
            )}
          </li>
        </ul>
      ))}
      <style jsx>{`
        .category {
          @apply mt-6;
        }
        .category:first-child {
          @apply mt-0;
        }
        .category-title {
          @apply font-rounded font-bold text-gray-700 text-xl uppercase mb-2;
        }

        .page-link {
          @apply block py-1 px-2 mt-1 rounded text-marp-darken transition-colors outline-none;
        }
        .page-link:hover,
        .page-link:focus {
          @apply bg-gray-200 text-marp-dark duration-300;
        }
        .page-link:hover:active {
          @apply bg-gray-300 duration-0;
        }
        .page-link:focus-visible {
          @apply shadow-outline;
        }

        .page-link.active {
          @apply font-bold text-white bg-gradient-to-br from-marp-brand to-marp-dark duration-0;
        }
        .page-link.active:hover:active {
          @apply bg-marp-dark from-marp-dark to-marp-darkest;
        }
      `}</style>
    </div>
  )
}
