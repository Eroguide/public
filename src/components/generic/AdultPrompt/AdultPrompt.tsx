import { useEffect, useState } from 'react'
import {
  Container,
  Card,
  SubTitle,
  Title,
  ButtonsGroup,
  BgOverlay,
  CloseButton,
} from './styles'
import { CustomButton } from '@/components/generic'
import CloseIcon from '/public/img/cross-icon.svg'

export const AdultPrompt: React.FC = () => {
  let isAdult = false

  if (process.browser) {
    const res = localStorage.getItem('is18pluseroguide')
    isAdult = res !== null && Boolean(JSON.parse(res))
  }
  const [isActive, setIsActive] = useState<boolean>(false)

  if (process.browser) {
    if (isActive) {
      document.body.style.height = '100vh'
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.height = '100%'
      document.body.style.overflowY = 'auto'
    }
  }

  useEffect(() => {
    setIsActive(!isAdult)
  }, [isAdult])

  const handleClose = () => {
    setIsActive(false)
  }

  const handleAccept = () => {
    localStorage.setItem('is18pluseroguide', '1')
    handleClose()
  }

  const handleLaterButton = () => {
    localStorage.setItem('is18pluseroguide', '0')
    handleClose()
  }

  return (
    <>
      {isActive && (
        <>
          <BgOverlay onClick={() => handleClose()} />
          <Container>
            <Card>
              <CloseButton onClick={() => handleClose()}>
                <CloseIcon />
              </CloseButton>
              <Title>Jen pro dospělé</Title>
              <SubTitle>Jsem dospělý ve věku 18 let nebo starší</SubTitle>
              <ButtonsGroup>
                <CustomButton
                  styleType={'neutral'}
                  sizeType="default"
                  onClick={handleAccept}
                  width="100%"
                  margin={'16px 0'}
                >
                  Ano
                </CustomButton>

                <CustomButton
                  onClick={handleLaterButton}
                  styleType={'tertiary'}
                  width="100%"
                  sizeType="default"
                >
                  Odejít ze stránky
                </CustomButton>
              </ButtonsGroup>
            </Card>
          </Container>
        </>
      )}
    </>
  )
}
