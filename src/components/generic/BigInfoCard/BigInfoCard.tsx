import {
  Container,
  Content,
  Title,
  Details,
  CardImage,
  CardImageWrapper,
} from './styles'

export const BigInfoCard: React.FC<{
  title: string
  image?: string
  details?: string
}> = ({ title, details, image }) => {
  return (
    <Container>
      <CardImageWrapper>
        <CardImage src={image} />
      </CardImageWrapper>
      <Content>
        <Title>{title}</Title>
        {details && <Details>{details}</Details>}
      </Content>
    </Container>
  )
}
