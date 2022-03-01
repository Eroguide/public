import { Container, Inner } from './styles'

export const SalonWidget: React.FC = ({ children }) => {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  )
}
