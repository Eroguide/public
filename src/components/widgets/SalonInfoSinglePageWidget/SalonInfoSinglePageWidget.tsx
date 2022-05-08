import Link from 'next/link'
import {
  Container,
  AvatarImage,
  Name,
  NameWrapper,
  ButtonsRow,
  Divider,
  IconWrapper,
  MemberSince,
  Row,
  ImageWrapper,
  RatingSalon,
  Left,
  LocationText,
  Right,
  IconWrapperLocation,
} from './styles'
import Heart from '/public/img/heart.svg'
import Cloud from '/public/img/cloud-icon.svg'
import Whazaap from '/public/img/whazaap-icon.svg'
import AttentionIcon from '/public/img/attention-icon.svg'
import LocationIcon from '/public/img/location-pin-icon.svg'
import { CustomButton } from '@/components/generic'
import { useState } from 'react'
import { GetSalon_getSalon } from '@/graphql/types/GetSalon'

export const SalonInfoSinglePageWidget: React.FC<{
  getSalon: GetSalon_getSalon
}> = ({ getSalon }) => {
  const { title, headPhoto, phone } = getSalon
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Container>
      <Row>
        <NameWrapper>
          <Name>{title}</Name>
          <RatingSalon>
            5.0 <AttentionIcon />
          </RatingSalon>
        </NameWrapper>

        <ImageWrapper>
          <AvatarImage src={headPhoto ?? '/img/fake.png'} alt={title} />
        </ImageWrapper>
      </Row>
      <Divider />

      <Row>
        <Left>
          <IconWrapperLocation>
            <LocationIcon />
          </IconWrapperLocation>
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
          {isOpen ? phone : 'Contact'}
        </CustomButton>
      </ButtonsRow>
      <Divider />
      <MemberSince>Member 655054 since Mar 15. 2021</MemberSince>
    </Container>
  )
}
