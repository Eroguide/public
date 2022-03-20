import {
  Container,
  AvatarImage,
  Name,
  NameWrapper,
  ReviewsCounter,
  Parameter,
  ParameterCounter,
  ParametersList,
  ParameterTitle,
  ButtonsRow,
  Divider,
  IconWrapper,
  MemberSince,
} from './styles'
import BlueCheckIcon from '/public/img/check-blue-lg.svg'
import StartIcon from '/public/img/start-lined.svg'
import Heart from '/public/img/heart.svg'
import Cloud from '/public/img/cloud-icon.svg'
import Whazaap from '/public/img/whazaap-icon.svg'
import { CustomButton } from '@/components/generic'
import { useState } from 'react'

export const PersonalInfoSinglePageWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Container>
      <AvatarImage />
      <NameWrapper>
        <Name>Victoria</Name>
        <BlueCheckIcon />
      </NameWrapper>

      <ReviewsCounter>
        <span>
          <StartIcon />
        </span>
        <span> 256 reviews</span>
      </ReviewsCounter>

      <ParametersList>
        <Parameter>
          <ParameterTitle>interview</ParameterTitle>
          <ParameterCounter>1</ParameterCounter>
        </Parameter>
        <Parameter>
          <ParameterTitle>photo</ParameterTitle>
          <ParameterCounter>65</ParameterCounter>
        </Parameter>
        <Parameter>
          <ParameterTitle>video</ParameterTitle>
          <ParameterCounter>4</ParameterCounter>
        </Parameter>
        <Parameter>
          <ParameterTitle>audio</ParameterTitle>
          <ParameterCounter>8</ParameterCounter>
        </Parameter>
      </ParametersList>
      <Divider />
      <ButtonsRow>
        <IconWrapper>
          {/*<HeartLined />*/}
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
          {isOpen ? '+420 254 256 444' : 'Contact'}
        </CustomButton>
      </ButtonsRow>
      <Divider />
      <MemberSince>Member 655054 since Mar 15. 2021</MemberSince>
    </Container>
  )
}
