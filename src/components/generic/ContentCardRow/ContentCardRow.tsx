import { Swiper } from 'swiper/react'
import { SwiperOptions, Navigation } from 'swiper'
import {
  ContentCardRowContainer,
  TopLine,
  Title,
  RightWidget,
  ContentRow,
  BottomLine,
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
  itemsToShow?: Array<number>
  withControls?: boolean
  bottomControl?: boolean
  href?: string
  spaceBetween?: number
}> = ({
  children,
  title,
  counterTitle,
  counter,
  withControls = false,
  href = '/',
  spaceBetween = 16,
  bottomControl,
}) => {
  const navigationPrevRef = useRef<HTMLDivElement>(null)
  const navigationNextRef = useRef<HTMLDivElement>(null)

  const swiperSettings: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: spaceBetween,
    modules: [Navigation],
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      599: {
        slidesPerView: 'auto',
      },
    },
    allowSlidePrev: true,
    allowSlideNext: true,
    centeredSlidesBounds: true,
    cssMode: true,
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
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
      {bottomControl && (
        <BottomLine>
          <NextPrevWrapper>
            <PrevButton ref={navigationPrevRef}>
              <ArrowLeftIcon />
            </PrevButton>
            <NextButton ref={navigationNextRef}>
              <ArrowRightIcon />
            </NextButton>
          </NextPrevWrapper>
        </BottomLine>
      )}
    </ContentCardRowContainer>
  )
}
