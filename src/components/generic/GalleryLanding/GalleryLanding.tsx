import { Container, Wrapper, HeroTitle, DescriptionText } from './styles'
export const GalleryLanding: React.FC<{ title: string; text: string }> = ({
  title,
  text,
}) => {
  return (
    <Container>
      <Wrapper>
        <HeroTitle>{title}</HeroTitle>
        <DescriptionText>{text}</DescriptionText>
      </Wrapper>
    </Container>
  )
}
