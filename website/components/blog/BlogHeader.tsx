import Link from 'next/link'
import { formatDate, formatDateShort } from 'utils/date'

export type BlogHeaderProps = {
  author?: string
  date?: Date
  github?: string
  slug: string
  title: string
}

export const BlogHeader = ({
  author,
  date,
  github,
  slug,
  title,
}: BlogHeaderProps) => (
  <div className="text-center text-gray-600">
    <Link href={`/blog/${slug}`}>
      <a>
        <h1 className="text-gradient text-3xl font-bold md:text-4xl">
          {title}
        </h1>
      </a>
    </Link>
    {date && (
      <p className="mt-4">
        <time dateTime={formatDateShort(date)}>{formatDate(date)}</time>
      </p>
    )}
    <p className="author">
      {(author || github) && (
        <>
          {github && (
            <img
              src={`https://github.com/${github}.png`}
              alt={author || github}
              className="h-16 w-16 rounded-full shadow-md bg-white mr-4"
              width={64}
              height={64}
            />
          )}
          <span className="leading-relaxed">
            by{' '}
            {author && (
              <>
                {author}
                {github && <br />}
              </>
            )}
            {github && (
              <a
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{github}
              </a>
            )}
          </span>
        </>
      )}
      <style jsx>{`
        .author {
          @apply mt-5 flex text-left items-center -mx-6;
        }

        .author::before,
        .author::after {
          @apply block flex-1 h-px mx-6 bg-gray-400;

          content: '';
        }

        .author:empty {
          @apply h-px mx-0;
        }

        .author:empty::before,
        .author:empty::after {
          @apply mx-0;
        }
      `}</style>
    </p>
  </div>
)
