import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions, FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

import {
  FilterScrollContainer,
  FilterCategory,
  FilterCounter,
  CategoryTitle,
  InnerContainer,
} from './styles'
import { useState } from 'react'
import Link from 'next/link'
const options = [
  'All',
  'New',
  'Best',
  'On shift',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
]

export const FilterScroll: React.FC = () => {
  const [initSlider, setInitSlider] = useState<boolean>(false)
  const swiperSettings: SwiperOptions = {
    slidesPerView: 7,
    freeMode: true,
    modules: [FreeMode],
    spaceBetween: 48,
    breakpoints: {
      0: {
        slidesPerView: 4,
        spaceBetween: 12,
      },
      700: {
        slidesPerView: 5,
        spaceBetween: 12,
      },
      991: {
        slidesPerView: 6,
        spaceBetween: 16,
      },
      1420: {
        slidesPerView: 7,
        spaceBetween: 16,
      },
    },
  }
  return (
    <FilterScrollContainer>
      <InnerContainer>
        <Swiper {...swiperSettings} onAfterInit={() => setInitSlider(true)}>
          {initSlider
            ? options.map((option, i) => (
                <SwiperSlide key={`${option}-${i}`}>
                  <Link href={`/category/${option}`} passHref>
                    <FilterCategory>
                      <CategoryTitle>{option}</CategoryTitle>
                      <FilterCounter>232</FilterCounter>
                    </FilterCategory>
                  </Link>
                </SwiperSlide>
              ))
            : 'loading'}
        </Swiper>
      </InnerContainer>
    </FilterScrollContainer>
  )
}
