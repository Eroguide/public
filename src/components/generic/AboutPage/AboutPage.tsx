import { Container, Row } from './styles'
import { BigInfoCard } from '@/components/generic/'

export const AboutPage: React.FC = () => {
  return (
    <Container>
      <Row>
        <BigInfoCard />
        <BigInfoCard />
      </Row>
      <Row>black card</Row>
    </Container>
  )
}
