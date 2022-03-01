import { Container, Title } from './styles'

export const SinglePageContentBlock: React.FC<{ title: string }> = ({
  children,
  title,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  )
}
