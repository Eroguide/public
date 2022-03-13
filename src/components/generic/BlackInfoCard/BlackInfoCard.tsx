import { useState } from 'react'
import {
  Container,
  Left,
  Right,
  Subtitle,
  Title,
  IconWrapper,
  BgOverlay,
  Inner,
  BackSide,
  FrontSide,
} from './styles'
import RightArrowIcon from '/public/img/arrow-right.svg'
import CloseIcon from '/public/img/exit-icon.svg'

export const BlackInfoCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)

  return (
    <>
      <BgOverlay isFlipped={isFlipped} onClick={() => setIsFlipped(false)} />
      <Container isFlipped={isFlipped}>
        <Inner isFlipped={isFlipped}>
          {!isFlipped ? (
            <FrontSide>
              <Left>
                <Title>
                  When not all topics are covered in the questionnaire
                </Title>
                <Subtitle>looks good, I&apos;ll take a chance</Subtitle>
              </Left>
              <Right>
                <IconWrapper onClick={() => setIsFlipped(true)}>
                  <RightArrowIcon />
                </IconWrapper>
              </Right>
            </FrontSide>
          ) : (
            <BackSide>
              <Left>
                <Title>Lorem ipsum dolor sit amet.</Title>
                <Subtitle>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores enim quo ullam. Architecto at dolore ducimus nobis
                  odio pariatur quibusdam repellendus totam? Deleniti deserunt
                  eaque ipsam iure non nulla officia?
                </Subtitle>
              </Left>
              <Right>
                <IconWrapper onClick={() => setIsFlipped(false)}>
                  <CloseIcon />
                </IconWrapper>
              </Right>
            </BackSide>
          )}
        </Inner>
      </Container>
    </>
  )
}
