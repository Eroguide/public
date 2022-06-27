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

const options: Array<{ name: string; type: keyof typeof CategoryEnum }> = [
  { name: 'Vše', type: 'all' },
  { name: 'Nové', type: 'new' },
  { name: 'Top', type: 'top' },
  { name: 'Na směně', type: 'shift' },
  { name: 'Privat', type: 'privat' },
  { name: 'Masáže', type: 'massage' },
]

export const FilterScroll: React.FC = () => {
  const [initSlider, setInitSlider] = useState<boolean>(false)
  const { query } = useRouter()
  const { type } = query

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
                <Link
                  href={`/category?type=${option.type}`}
                  passHref
                  shallow={true}
                >
                  <FilterCategory
                    isActive={type === option.type}
                    // onClick={() => handleChangeCategory(option.type)}
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
          ) : (
            <Loader />
          )}
        </Swiper>
      </InnerContainer>
    </FilterScrollContainer>
  )
}
