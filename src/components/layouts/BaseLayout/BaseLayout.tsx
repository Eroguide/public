import { Header } from '@/src/components/layouts/Header'
import { PageContent } from '@/src/components/layouts/PageContent'
import { Footer } from '@/src/components/layouts/Footer'
import { Layout, Inner, Container } from './styles'

// types
import { BaseLayoutProps } from './types'
import { ScrollButtonTop } from '@/components/generic'

export const BaseLayout: React.FC<BaseLayoutProps> = ({
  children,
  noFooter,
}) => (
  <Layout>
    <Header />
    <Container>
      <Inner>
        <PageContent>{children}</PageContent>
        <ScrollButtonTop />
        {!noFooter && <Footer />}
      </Inner>
    </Container>
  </Layout>
)
