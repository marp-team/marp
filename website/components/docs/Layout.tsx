import { useMedia } from 'use-media'
import { Desktop } from './layouts/Desktop'
import { Mobile } from './layouts/Mobile'
import { Layout } from 'components/Layout'

// eslint-disable-next-line @typescript-eslint/ban-types
export type LayoutProps = {}

const DocsLayout: React.FC<LayoutProps> = ({ children }) => {
  const isDesktop = useMedia({ minWidth: '768px' })
  const Container = isDesktop ? Desktop : Mobile

  return (
    <Layout
      activeItem="docs"
      title={['Docs']}
      noIndex // TODO: Remove noIndex
    >
      <Container>{children}</Container>
    </Layout>
  )
}

export { DocsLayout as Layout }
