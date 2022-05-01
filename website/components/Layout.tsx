import Head from 'next/head'
import { useRouter } from 'next/router'
import { Footer } from 'components/Footer'
import { Header, ItemSlug } from 'components/Header'
import { generateTitle } from 'utils/title'
import { absoluteUrl } from 'utils/url'

export type LayoutProps = React.PropsWithChildren<{
  activeItem?: ItemSlug
  canonical?: string
  description?: string
  image?: string
  noIndex?: boolean
  title?: string | string[]
  type?: string
}>

const defaultDescription =
  'Marp (also known as the Markdown Presentation Ecosystem) provides an intuitive experience for creating beautiful slide decks. You only have to focus on writing your story in a Markdown document.'

export const Layout: React.FC<LayoutProps> = ({
  activeItem,
  canonical: _canonical,
  children,
  description = defaultDescription,
  image: _image,
  noIndex,
  title: _title,
  type = 'article',
}) => {
  const router = useRouter()

  const canonical = absoluteUrl(_canonical || router.asPath).href
  const image = _image || '/assets/og-image.png'
  const title = typeof _title === 'string' ? _title : generateTitle(_title)

  return (
    <>
      <Head>
        <title key="title">{title}</title>
        {description && (
          <>
            <meta name="description" key="description" content={description} />
            <meta
              property="og:description"
              key="og:description"
              content={description}
            />
          </>
        )}
        {canonical && (
          <>
            <link rel="canonical" key="canonical" href={canonical} />
            <meta property="og:url" key="og:url" content={canonical} />
          </>
        )}
        <meta property="og:title" key="og:title" content={title} />
        <meta property="og:type" key="og:type" content={type} />
        <meta
          property="og:image"
          key="og:image"
          content={absoluteUrl(image).href}
        />
        <meta
          property="twitter:card"
          key="twitter:card"
          content={
            type === 'website' || _image ? 'summary_large_image' : 'summary'
          }
        />
        {noIndex && <meta name="robots" content="noindex,nofollow" />}
      </Head>
      <Header activeItem={activeItem} />
      <main className="relative mt-16 md:mt-20">
        {children}
        <style jsx>{`
          main {
            min-height: calc(100vh - 8.5rem);
          }

          @screen md {
            main {
              min-height: calc(100vh - 9.5rem);
            }
          }
        `}</style>
      </main>
      <Footer />
    </>
  )
}
