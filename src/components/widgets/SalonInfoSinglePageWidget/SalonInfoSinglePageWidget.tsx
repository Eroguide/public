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
import { CustomButton, InfoCard } from '@/components/generic'
import { useState } from 'react'
import { GetSalon_getSalon } from '@/graphql/types/GetSalon'
import { format } from 'date-fns'
import { theme } from '@/src/theme'
import BlueCheckIcon from '../../../../public/img/check-blue-lg.svg'

export const SalonInfoSinglePageWidget: React.FC<{
  getSalon: GetSalon_getSalon
}> = ({ getSalon }) => {
  const {
    title,
    phone,
    createdAt,
    province,
    address,
    logo,
    isTurnoff,
    status,
  } = getSalon
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }
  const isOn = !isTurnoff
  return (
    <Container>
      <Row>
        <NameWrapper>
          <Name>{title}</Name>
          {isOn ? (
            <RatingSalon>
              5.0 <AttentionIcon />
              {isOn && status ? (
                <span>
                  <BlueCheckIcon />
                </span>
              ) : null}
            </RatingSalon>
          ) : null}
        </NameWrapper>

        <ImageWrapper>
          <AvatarImage
            src={isOn && logo ? logo : '/img/fake.png'}
            alt={title}
          />
        </ImageWrapper>
      </Row>

      {!isOn ? (
        <InfoCard strokeColor="yellow">
          <p style={{ color: theme.support[1] }}>
            Attention, information about the salon may be not up to date
          </p>
        </InfoCard>
      ) : null}

      {isOn ? (
        <>
          <Divider />
          <Row>
            <Left>
              <IconWrapperLocation>
                <LocationIcon />
              </IconWrapperLocation>
              <LocationText>{province}</LocationText>
            </Left>
            <Right>
              <Link href="/map" passHref>
                <>
                  <CustomButton
                    iconRight
                    isLink
                    styleType="tertiary"
                    sizeType="small"
                  >
                    Show map
                  </CustomButton>
                  <address style={{ display: 'none' }}>{address}</address>
                </>
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
        </>
      ) : null}
      <MemberSince>
        Member since {format(new Date(createdAt), ' MMM dd. yyyy')}
      </MemberSince>
    </Container>
  )
}
