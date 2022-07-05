import {
  Container,
  MainInfo,
  Description,
  ToggleButton,
  Left,
  Title,
  Details,
  Timer,
  IconWrapper,
  BottomRow,
  IconsRow,
  SingleIconWrapper,
  Price,
  Suffix,
  HiddenContentItem,
  IconWrapperHiddenContent,
} from './styles'
import TimerIcon from '/public/img/timer-icon.svg'
import ChevronIcon from '/public/img/chevron-lg.svg'
import Image from 'next/image'

import { useState } from 'react'
import { FreeMode, SwiperOptions } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Service } from '@/graphql/types/GetSalon'
export enum StrokeColorTypes {
  gray = 'gray',
  yellow = 'yellow',
  green = 'green',
}

export type InfoCardProps = {
  padding?: string
  margin?: string
  strokeColor?: keyof typeof StrokeColorTypes
} & Service

export const MassageProgramCard: React.FC<InfoCardProps> = ({
  padding,
  margin,
  strokeColor,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const swiperSettings: SwiperOptions = {
    slidesPerView: 'auto',
    modules: [FreeMode],
    spaceBetween: 0,
  }
  const [initSlider, setInitSlider] = useState<boolean>(false)
  const { name, description, massages, price } = props
  return (
    <Container padding={padding} margin={margin} strokeColor={strokeColor}>
      <MainInfo onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <Left>
          <Title>{name}</Title>
          <Details>{description}</Details>
        </Left>
        <ToggleButton isOpen={isOpen}>
          <ChevronIcon />
        </ToggleButton>
      </MainInfo>

      <Timer>
        <IconWrapper>
          <TimerIcon />
        </IconWrapper>
        <span>1 hour</span>
      </Timer>

      <BottomRow>
        <IconsRow>
          <Swiper {...swiperSettings} onAfterInit={() => setInitSlider(true)}>
            {initSlider && massages
              ? massages.map((x) => (
                  <SwiperSlide key={x.id}>
                    <SingleIconWrapper key={x.id}>
                      <img src={x.image} alt="" />
                    </SingleIconWrapper>
                  </SwiperSlide>
                ))
              : 'loading'}
          </Swiper>
        </IconsRow>

        <Price>
          {price} <Suffix>Kč/h</Suffix>
        </Price>
      </BottomRow>

      <Description isOpen={isOpen}>
        {massages
          ? massages.map((x, i) => (
              <HiddenContentItem key={x.id} delay={i} isOpen={isOpen}>
                <IconWrapperHiddenContent>
                  <img src={x.image} />
                </IconWrapperHiddenContent>
                <span>{x.name}</span>
              </HiddenContentItem>
            ))
          : null}
      </Description>
    </Container>
  )
}
