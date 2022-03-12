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
import Link from 'next/link'

export const ContentCardRow: React.FC<{
  title: string
  counter: number
  counterTitle: string
  itemsToShow: number
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
    loop: true,
    freeMode: true,
    slidesPerView: itemsToShow,
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
      700: {
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
            <Link href={href} passHref>
              <CustomButton
                styleType="tertiary"
                sizeType="medium"
                counter={counter}
              >
                {counterTitle}
              </CustomButton>
            </Link>
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
