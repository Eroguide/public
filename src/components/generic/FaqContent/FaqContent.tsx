import { Container, Wrapper } from './styles'
import { Accordion } from '@/components/generic/Accordion'
export const FaqContent: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Accordion />
      </Wrapper>
    </Container>
  )
}
