import { Container, Content, Title, Details } from './styles'

export const BigInfoCard: React.FC<{ title: string; details?: string }> = ({
  title,
  details,
}) => {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        {details && <Details>{details}</Details>}
      </Content>
    </Container>
  )
}
