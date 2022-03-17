import {
  Container,
  Wrapper,
  CtaBlock,
  Title,
  Left,
  Right,
  ImageWrapper,
} from './styles'
import { CustomButton } from '@/components/generic'
export const ErrorPage: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <CtaBlock>
            <Title>whooops... this page is not available</Title>
            <CustomButton isLink styleType="primary" href="/">
              Turn back
            </CustomButton>
          </CtaBlock>
        </Left>
        <Right>
          <ImageWrapper />
        </Right>
      </Wrapper>
    </Container>
  )
}
