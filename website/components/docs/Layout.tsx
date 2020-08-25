import { useMedia } from 'use-media'
import { Desktop } from './layouts/Desktop'
import { Mobile } from './layouts/Mobile'
import { Layout } from 'components/Layout'

// eslint-disable-next-line @typescript-eslint/ban-types
export type LayoutProps = {
  breadcrumbs?: React.ReactNode[]
}

const DocsLayout: React.FC<LayoutProps> = ({ children, ...props }) => {
  const isDesktop = useMedia({ minWidth: '768px' })
  const Container = isDesktop ? Desktop : Mobile

  return (
    <Layout
      activeItem="docs"
      title={['Docs']}
      noIndex // TODO: Remove noIndex
    >
      <Container {...props}>{children}</Container>
    </Layout>
  )
}

export { DocsLayout as Layout }
