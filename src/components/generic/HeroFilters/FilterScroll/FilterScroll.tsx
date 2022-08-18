import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions, FreeMode } from 'swiper'

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
import { AllCounters_getCounters } from '@/graphql/types/GetAllCounters'

export const FilterScroll: React.FC<{ counters: AllCounters_getCounters }> = ({
  counters,
}) => {
  const [initSlider, setInitSlider] = useState<boolean>(false)
  const { query } = useRouter()
  const { type } = query

  const options: Array<{
    name: string
    type: keyof typeof CategoryEnum
    counter: number
  }> = [
    { name: 'Vše', type: 'all', counter: counters.allEmployees },
    { name: 'Nové', type: 'new', counter: counters.newEmployees },
    { name: 'Top', type: 'top', counter: counters.topEmployees },
    { name: 'Na směně', type: 'shift', counter: counters.availableEmployees },
    { name: 'Privat', type: 'privat', counter: counters.allPrivateEmployees },
    { name: 'Masáže', type: 'massage', counter: counters.allMasseurs },
  ]

  const swiperSettings: SwiperOptions = {
    slidesPerView: 'auto',
    freeMode: true,
    modules: [FreeMode],
    spaceBetween: 40,
    cssMode: true,
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
                        <FilterCounter>{option.counter ?? 0}</FilterCounter>
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
