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
  FlexBox,
  Line,
  FlexRow,
} from './styles'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
const options = [
  'All',
  'New',
  'Best',
  'On shift',
  'Privat',
  'Salons',
  'Privat1',
  'Salons1',
  'Privat2',
  'Salons2',
  'Privat3',
  'Salons3',
  'Privat4',
  'Salons4',
  'Privat5',
  'Salons5',
  'Privat6',
  'Salons6',
]

export const FilterScroll: React.FC = () => {
  const [initSlider, setInitSlider] = useState<boolean>(false)
  const { query } = useRouter()

  const { slug } = query

  const swiperSettings: SwiperOptions = {
    slidesPerView: 'auto',
    freeMode: true,
    modules: [FreeMode],
    spaceBetween: 48,
    // breakpoints: {
    //   0: {
    //     slidesPerView: 3,
    //     spaceBetween: 12,
    //   },
    //   700: {
    //     slidesPerView: 4,
    //     spaceBetween: 12,
    //   },
    //   991: {
    //     slidesPerView: 5,
    //     spaceBetween: 16,
    //   },
    //   1420: {
    //     slidesPerView: 6,
    //     spaceBetween: 16,
    //   },
    // },
  }

  return (
    <FilterScrollContainer>
      <InnerContainer>
        <Swiper {...swiperSettings} onAfterInit={() => setInitSlider(true)}>
          {initSlider
            ? options.map((option, i) => (
                <SwiperSlide key={`${option}-${i}`}>
                  <Link
                    href={i === 0 ? '/category' : `/category/${option}`}
                    passHref
                    shallow={!(i === 0)}
                  >
                    <FilterCategory isActive={slug ? slug === option : i === 0}>
                      <FlexBox>
                        <FlexRow>
                          <CategoryTitle>{option}</CategoryTitle>
                          <FilterCounter>232</FilterCounter>
                        </FlexRow>
                        <Line />
                      </FlexBox>
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
