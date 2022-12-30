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
                    <Link href={href} key={pSlug} legacyBehavior>
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
          @apply font-rounded mb-2 text-xl font-bold uppercase text-gray-700;
        }

        .page-link {
          @apply text-marp-darken mt-1 block rounded py-1 px-2 outline-none;

          transition-property: background-color, border-color, fill, stroke;
        }
        .page-link:hover,
        .page-link:focus {
          @apply text-marp-dark bg-gray-200 duration-300;
        }
        .page-link:hover:active {
          @apply duration-0 bg-gray-300;
        }
        .page-link:focus-visible {
          @apply ring-1 ring-white ring-offset-2;
        }

        .page-link.active {
          @apply from-marp-brand to-marp-dark duration-0 bg-gradient-to-br font-bold text-white;
        }
        .page-link.active:hover:active {
          @apply bg-marp-dark from-marp-dark to-marp-darkest;
        }
      `}</style>
    </div>
  )
}
