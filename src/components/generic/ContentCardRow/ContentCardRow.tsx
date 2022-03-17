import { Swiper } from 'swiper/react'
import { SwiperOptions, Navigation } from 'swiper'

import {
  ContentCardRowContainer,
  TopLine,
  Title,
  RightWidget,
  ContentRow,
} from './styles'
import { useRef, useState } from 'react'
import {
  NextButton,
  NextPrevWrapper,
  PrevButton,
} from '@/components/generic/ShowNewItems/styles'
import ArrowLeftIcon from '/public/img/arrow-left.svg'
import ArrowRightIcon from '/public/img/arrow-right.svg'
import { CustomButton } from '@/components/generic'

export const ContentCardRow: React.FC<{
  title: string
  counter: number
  counterTitle: string
  itemsToShow: Array<number>
  withControls?: boolean
  href?: string
}> = ({
  children,
  title,
  counterTitle,
  counter,
  itemsToShow,
  withControls = false,
  href = '/',
}) => {
  const navigationPrevRef = useRef<HTMLDivElement>(null)
  const navigationNextRef = useRef<HTMLDivElement>(null)

  const swiperSettings: SwiperOptions = {
    loop: false,
    slidesPerView: itemsToShow[0],
    modules: [Navigation],
    watchOverflow: true,
    allowSlidePrev: true,
    allowSlideNext: true,
    centeredSlidesBounds: true,
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: itemsToShow[2],
      },
      960: {
        slidesPerView: itemsToShow[1],
      },
      1280: {
        slidesPerView: itemsToShow[0],
      },
    },
  }

  const [initSlider, setInitSlider] = useState<boolean>(false)
  return (
    <ContentCardRowContainer>
      <TopLine>
        <Title>{title}</Title>
        <RightWidget>
          {withControls ? (
            <NextPrevWrapper>
              <PrevButton ref={navigationPrevRef}>
                <ArrowLeftIcon />
              </PrevButton>
              <NextButton ref={navigationNextRef}>
                <ArrowRightIcon />
              </NextButton>
            </NextPrevWrapper>
          ) : (
            <CustomButton
              styleType="tertiary"
              sizeType="medium"
              counter={counter}
              isLink
              href={href}
            >
              {counterTitle}
            </CustomButton>
          )}
        </RightWidget>
      </TopLine>
      <ContentRow>
        <Swiper {...swiperSettings} onAfterInit={() => setInitSlider(true)}>
          {initSlider ? children : 'loading'}
        </Swiper>
      </ContentRow>
    </ContentCardRowContainer>
  )
}
