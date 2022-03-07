import { Swiper } from 'swiper/react'
import { SwiperOptions, FreeMode, Navigation } from 'swiper'

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
  itemsToShow: number
  withControls?: boolean
}> = ({
  children,
  title,
  counterTitle,
  counter,
  itemsToShow,
  withControls = false,
}) => {
  const navigationPrevRef = useRef<HTMLDivElement>(null)
  const navigationNextRef = useRef<HTMLDivElement>(null)

  const swiperSettings: SwiperOptions = {
    loop: true,
    freeMode: true,
    slidesPerView: itemsToShow,
    spaceBetween: 10,
    modules: [FreeMode, Navigation],
    allowSlidePrev: true,
    allowSlideNext: true,
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: itemsToShow,
      },
      1400: {
        slidesPerView: itemsToShow,
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
