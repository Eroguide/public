import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper'
import { Container, Wrapper, DayCard, Day, Time, DateTop } from './styles'
import PlaneIcon from '/public/img/plane-icon.svg'

export const SchedyleCardWorkingDays: React.FC<{
  withDateTop?: boolean
  withDateBottom?: boolean
}> = ({ withDateTop, withDateBottom }) => {
  const days = [
    {
      name: 'Mon',
      time: '12-20',
      active: true,
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
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 0,
    breakpoints: {
      0: {
        slidesPerView: 4,
      },
      599: {
        slidesPerView: 'auto',
      },
    },
  }
  const [initSlider, setInitSlider] = useState<boolean>(false)
  return (
    <Container>
      <Wrapper>
        <Swiper {...swiperSettings} onAfterInit={() => setInitSlider(true)}>
          {initSlider && days
            ? days.map((day) => (
                <SwiperSlide key={day.name}>
                  {withDateTop && <DateTop>{day.name}</DateTop>}
                  <DayCard key={day.name} isActive={day.active}>
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
