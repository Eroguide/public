import { Header } from '@/src/components/layouts/Header'
import { PageContent } from '@/src/components/layouts/PageContent'
import { Footer } from '@/src/components/layouts/Footer'
import { Layout, Inner, Container } from './styles'
import { headerHeight } from '@/src/components/layouts/Header'
// types
import { BaseLayoutProps } from './types'

export const BaseLayout: React.FC<BaseLayoutProps> = ({
  children,
  noFooter,
}) => (
  <Layout>
    <Header />
    <Container>
      <Inner topOffset={headerHeight}>
        <PageContent>{children}</PageContent>
        {!noFooter && <Footer />}
      </Inner>
    </Container>
  </Layout>
)
