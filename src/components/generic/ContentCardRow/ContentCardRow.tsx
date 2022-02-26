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
  itemsToShow: Array<number>
}> = ({ children, title, counterTitle, counter, itemsToShow }) => {
  const swiperSettings: SwiperOptions = {
    slidesPerView: 'auto',
    loop: true,
    freeMode: true,
    modules: [Pagination, FreeMode],
    spaceBetween: 16,
    breakpoints: {
      0: {
        slidesPerView: itemsToShow[3],
        spaceBetween: 12,
      },
      700: {
        slidesPerView: itemsToShow[2],
        spaceBetween: 12,
      },
      991: {
        slidesPerView: itemsToShow[1],
        spaceBetween: 16,
      },
      1420: {
        slidesPerView: itemsToShow[0],
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
