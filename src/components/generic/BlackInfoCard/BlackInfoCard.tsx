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
  IconCloseWrapper,
} from './styles'
import RightArrowIcon from '/public/img/arrow-right.svg'
import CloseIcon from '/public/img/exit-icon.svg'

export const BlackInfoCard: React.FC<{
  title1?: string
  title2?: string
  details1?: string
  details2?: string
  image?: string
  image2?: string
}> = ({ title1, title2, details1, details2, image, image2 }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)

  return (
    <>
      {isFlipped && (
        <BgOverlay isFlipped={isFlipped} onClick={() => setIsFlipped(false)} />
      )}
      <Container isFlipped={isFlipped}>
        <Inner isFlipped={isFlipped}>
          {!isFlipped ? (
            <FrontSide image={image}>
              <Left>
                <Title>{title1}</Title>
                <Subtitle>{details1}</Subtitle>
              </Left>
              <Right>
                <IconWrapper onClick={() => setIsFlipped(true)}>
                  <RightArrowIcon />
                </IconWrapper>
              </Right>
            </FrontSide>
          ) : (
            <BackSide image={image2}>
              <Left>
                <Title>{title2}</Title>
                <Subtitle>{details2}</Subtitle>
              </Left>
              <Right>
                <IconCloseWrapper onClick={() => setIsFlipped(false)}>
                  <CloseIcon />
                </IconCloseWrapper>
              </Right>
            </BackSide>
          )}
        </Inner>
      </Container>
    </>
  )
}
