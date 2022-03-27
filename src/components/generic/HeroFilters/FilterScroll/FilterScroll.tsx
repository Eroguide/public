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
  { name: 'Vše', slug: 'all' },
  { name: 'Nové', slug: 'new' },
  { name: 'Top', slug: 'top' },
  { name: 'Na směně', slug: 'on-shift' },
  { name: 'Privat', slug: 'privat' },
  { name: 'Masáže', slug: 'massage' },
]

export const FilterScroll: React.FC = () => {
  const [initSlider, setInitSlider] = useState<boolean>(false)
  const { query } = useRouter()

  const { slug } = query

  const swiperSettings: SwiperOptions = {
    slidesPerView: 'auto',
    freeMode: true,
    modules: [FreeMode],
    spaceBetween: 40,
    grabCursor: true,
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
                <SwiperSlide key={`${option.name}-${i}`}>
                  <Link
                    href={i === 0 ? '/category' : `/category/${option.slug}`}
                    passHref
                    shallow={!(i === 0)}
                  >
                    <FilterCategory
                      isActive={slug ? slug === option.slug : i === 0}
                    >
                      <FlexBox>
                        <FlexRow>
                          <CategoryTitle>{option.name}</CategoryTitle>
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
