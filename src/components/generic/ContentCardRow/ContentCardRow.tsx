import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, SwiperOptions, FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

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
    slidesPerView: itemsToShow,
    loop: true,
    freeMode: true,
    modules: [Pagination, FreeMode],
    spaceBetween: 16,
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
