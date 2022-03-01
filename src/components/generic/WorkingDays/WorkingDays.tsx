import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, SwiperOptions } from 'swiper'
import { Container, Wrapper, DayCard, Day, Time } from './styles'
import PlaneIcon from '/public/img/plane-icon.svg'
export const WorkingDays: React.FC = () => {
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
    slidesPerView: 5,
    modules: [Pagination],
    spaceBetween: 4,
  }
  const [initSlider, setInitSlider] = useState<boolean>(false)
  return (
    <Container>
      <Wrapper>
        <Swiper {...swiperSettings} onAfterInit={() => setInitSlider(true)}>
          {initSlider && days
            ? days.map((day) => (
                <SwiperSlide key={day.name}>
                  <DayCard key={day.name}>
                    <Day isFree={day?.isFree}>{day.name}</Day>
                    {day?.isFree ? <PlaneIcon /> : <Time>{day.time}</Time>}
                  </DayCard>
                </SwiperSlide>
              ))
            : 'loading'}
        </Swiper>
      </Wrapper>
    </Container>
  )
}
