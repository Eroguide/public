import Link from 'next/link'
import { ButtonShadowLink } from '@/components/generic/ButtonStyled/styles'
import {
  Container,
  AvatarImage,
  Name,
  NameWrapper,
  ButtonLined,
  ButtonsRow,
  Divider,
  IconWrapper,
  MemberSince,
  Row,
  ImageWrapper,
  RatingSalon,
  IconWrapperChevron,
  Left,
  LocationText,
  Right,
} from './styles'
import Heart from '/public/img/heart.svg'
import Cloud from '/public/img/cloud-icon.svg'
import Whazaap from '/public/img/whazaap-icon.svg'
import AttentionIcon from '/public/img/attention-icon.svg'
import LocationIcon from '/public/img/location-pin-icon.svg'
import { CustomButton } from '@/components/generic'
import { useState } from 'react'

export const SalonInfoSinglePageWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Container>
      <Row>
        <NameWrapper>
          <Name>Chocolate ladies club</Name>
          <RatingSalon>
            5.0 <AttentionIcon />
          </RatingSalon>
        </NameWrapper>

        <ImageWrapper>
          <AvatarImage src="/img/bg.jpg" alt="" />
        </ImageWrapper>
      </Row>
      <Divider />

      <Row>
        <Left>
          <LocationIcon />
          <LocationText>Prague 15</LocationText>
        </Left>
        <Right>
          <Link href="/map" passHref>
            <CustomButton
              iconRight
              isLink
              styleType="tertiary"
              sizeType="small"
            >
              Show map
            </CustomButton>
          </Link>
        </Right>
      </Row>

      <Divider />
      <ButtonsRow>
        <IconWrapper>
          <Heart />
        </IconWrapper>
        <IconWrapper>
          <Cloud />
        </IconWrapper>
        <IconWrapper>
          <Whazaap />
        </IconWrapper>
        <CustomButton
          styleType="secondary"
          sizeType="medium"
          onClick={handleOnClick}
        >
          {isOpen ? '+420 254256444' : 'Contact'}
        </CustomButton>
      </ButtonsRow>
      <Divider />
      <MemberSince>Member 655054 since Mar 15. 2021</MemberSince>
    </Container>
  )
}
