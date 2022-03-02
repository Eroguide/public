import {
  Container,
  Wrapper,
  CardImage,
  Tag,
  StatusTag,
  Circle,
  Title,
} from './styles'

export const LadyCard: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <CardImage>
          <Tag>New</Tag>
          <StatusTag>
            <Circle />
          </StatusTag>
        </CardImage>
        <Title>Lorem </Title>
      </Wrapper>
    </Container>
  )
}
