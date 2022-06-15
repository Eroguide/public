import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions, FreeMode } from 'swiper'

// import 'swiper/css'
// import 'swiper/css/effect-fade'
// import 'swiper/css/pagination'
import { CategoryEnum } from '../types'
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
import { Loader } from '@/components/widgets/LoaderWidget'

const options: Array<{ name: string; slug: keyof typeof CategoryEnum }> = [
  { name: 'Vše', slug: 'all' },
  { name: 'Nové', slug: 'new' },
  { name: 'Top', slug: 'top' },
  { name: 'Na směně', slug: 'shift' },
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
  }

  return (
    <FilterScrollContainer>
      <InnerContainer>
        <Swiper {...swiperSettings} onAfterInit={() => setInitSlider(true)}>
          {initSlider ? (
            options.map((option, i) => (
              <SwiperSlide key={`${option.name}-${i}`}>
                <Link href={`/category/${option.slug}`} passHref>
                  <FilterCategory isActive={slug === option.slug}>
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
          ) : (
            <Loader />
          )}
        </Swiper>
      </InnerContainer>
    </FilterScrollContainer>
  )
}
