import {
  Container,
  Wrapper,
  CtaBlock,
  Title,
  Left,
  Right,
  ImageWrapper,
} from './styles'
import { ButtonPrimaryLink } from '@/components/generic/ButtonStyled/styles'
import Link from 'next/link'
export const ErrorPage: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <CtaBlock>
            <Title>whooops... this page is not available</Title>
            <Link href="/">
              <ButtonPrimaryLink>Turn back</ButtonPrimaryLink>
            </Link>
          </CtaBlock>
        </Left>
        <Right>
          <ImageWrapper />
        </Right>
      </Wrapper>
    </Container>
  )
}
