import {
  Container,
  Wrapper,
  CtaBlock,
  Title,
  Left,
  Right,
  ImageWrapper,
} from './styles'
import Link from 'next/link'
import { CustomButton } from '@/components/generic'
export const ErrorPage: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <CtaBlock>
            <Title>whooops... this page is not available</Title>
            <Link href="/" passHref>
              <CustomButton isLink styleType="primary">
                Turn back
              </CustomButton>
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
