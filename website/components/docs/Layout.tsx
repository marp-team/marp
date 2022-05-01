import { useMedia, useMediaLayout } from 'use-media'
import { BreadcrumbProps } from './Breadcrumb'
import { NavigationProps } from './Navigation'
import { Desktop } from './layouts/Desktop'
import { Mobile } from './layouts/Mobile'
import { Layout } from 'components/Layout'

export type LayoutProps = React.PropsWithChildren<
  BreadcrumbProps & NavigationProps
>

const useMediaIsomorphic =
  typeof window === 'undefined' ? useMedia : useMediaLayout

const DocsLayout: React.FC<LayoutProps> = (props) => {
  const isDesktop = useMediaIsomorphic({ minWidth: '768px' }, false)
  const Container = isDesktop ? Desktop : Mobile

  return (
    <Layout
      activeItem="docs"
      canonical={`/docs/${props.slug.join('/')}`}
      title={[props.breadcrumbs.map((b) => b.title).join(' > '), 'Docs']}
      noIndex={!process.env.NEXT_PUBLIC_DOCS}
    >
      <Container {...props} />
    </Layout>
  )
}

export { DocsLayout as Layout }
