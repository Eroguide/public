import { Container, Wrapper, CardImage, Tag } from './styles'

export const LadyCard: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <CardImage>
          <Tag>New</Tag>
        </CardImage>
      </Wrapper>
    </Container>
  )
}
