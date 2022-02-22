import {
  Container,
  Wrapper,
  HeroTitle,
  DescriptionText,
  Divider,
} from './styles'
export const GalleryLanding: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <HeroTitle>Journal</HeroTitle>
        <DescriptionText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          alias commodi consequuntur debitis, dicta doloribus eveniet excepturi
          illum, natus neque odio quis quod ratione rerum temporibus ut
          voluptas. Quia, rerum.
        </DescriptionText>
      </Wrapper>
      <Divider />
    </Container>
  )
}
