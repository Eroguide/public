import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, SwiperOptions } from 'swiper'
import { Container, Wrapper, DayCard, Day, Time, DateTop } from './styles'
import PlaneIcon from '/public/img/plane-icon.svg'

export const SchedyleCardWorkingDays: React.FC<{
  withDateTop?: boolean
  withDateBottom?: boolean
  itemsToShow?: number
  fadeRight?: boolean
}> = ({ withDateTop, itemsToShow, withDateBottom, fadeRight }) => {
  const days = [
    {
      name: 'Mon',
      time: '12-20',
    },
    {
      name: 'Thu',
      time: '12-20',
    },
    {
      name: 'Wed',
      time: '12-20',
      isFree: true,
    },
    {
      name: 'Tho',
      time: '12-20',
    },
    {
      name: 'Fri',
      time: '12-20',
    },
    {
      name: 'Sat',
      time: '12-20',
    },
    {
      name: 'Sun',
      time: '12-20',
    },
  ]
  const swiperSettings: SwiperOptions = {
    slidesPerView: itemsToShow ?? 4,
    modules: [Pagination],
    loop: true,
    spaceBetween: 8,
    breakpoints: {
      0: {
        slidesPerView: 3,
      },
      700: {
        slidesPerView: 3,
      },
      960: {
        slidesPerView: 5,
      },
      1280: {
        slidesPerView: 7,
      },
    },
  }
  const [initSlider, setInitSlider] = useState<boolean>(false)
  return (
    <Container>
      <Wrapper fadeRight={fadeRight}>
        <Swiper {...swiperSettings} onAfterInit={() => setInitSlider(true)}>
          {initSlider && days
            ? days.map((day) => (
                <SwiperSlide key={day.name}>
                  {withDateTop && <DateTop>{day.name}</DateTop>}
                  <DayCard key={day.name}>
                    <Day isFree={day?.isFree}>{day.name}</Day>
                    {day?.isFree ? <PlaneIcon /> : <Time>{day.time}</Time>}
                  </DayCard>
                  {withDateBottom && <DateTop>{day.name}</DateTop>}
                </SwiperSlide>
              ))
            : 'loading'}
        </Swiper>
      </Wrapper>
    </Container>
  )
}
