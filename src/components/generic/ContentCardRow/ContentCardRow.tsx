import { Swiper } from 'swiper/react'
import { Pagination, SwiperOptions, FreeMode } from 'swiper'

import {
  ContentCardRowContainer,
  TopLine,
  Title,
  RightWidget,
  ContentRow,
  CounterTitle,
  Quantity,
  Counter,
} from './styles'
import { useState } from 'react'

export const ContentCardRow: React.FC<{
  title: string
  counter: number
  counterTitle: string
  itemsToShow: number
}> = ({ children, title, counterTitle, counter, itemsToShow }) => {
  const swiperSettings: SwiperOptions = {
    loop: true,
    freeMode: true,
    slidesPerView: itemsToShow,
    spaceBetween: 16,
    modules: [Pagination, FreeMode],
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 12,
      },
      600: {
        slidesPerView: itemsToShow,
        spaceBetween: 12,
      },
      1400: {
        slidesPerView: itemsToShow,
        spaceBetween: 16,
      },
    },
  }

  const [initSlider, setInitSlider] = useState<boolean>(false)
  return (
    <ContentCardRowContainer>
      <TopLine>
        <Title>{title}</Title>
        <RightWidget>
          <Counter>
            <CounterTitle>{counterTitle}</CounterTitle>
            <Quantity>{counter}</Quantity>
          </Counter>
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
