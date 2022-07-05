import { useMemo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper'
import { Container, Wrapper, DayCard, Day, Time, DateTop } from './styles'
import PlaneIcon from '/public/img/plane-icon.svg'
import { EmployeeSchedule } from '@/graphql/types/globalTypes'

export const ScheduleCardWorkingDays: React.FC<{
  withDateTop?: boolean
  withDateBottom?: boolean
  schedule?: Array<EmployeeSchedule>
}> = ({ withDateTop, withDateBottom, schedule }) => {
  const swiperSettings: SwiperOptions = {
    slidesPerView: 'auto',
    setWrapperSize: true,
    loop: false,
    spaceBetween: 0,
    cssMode: true,
  }
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const d = new Date()
  const dayName = days[d.getDay()]
  const [initSlider, setInitSlider] = useState<boolean>(false)

  const shortTime = useMemo(
    () =>
      (time: string): string => {
        return time.split(':')[0]
      },
    []
  )

  const getWorkingTime = (startTime: string, endTime: string): string => {
    const start = shortTime(startTime)
    const end = shortTime(endTime)
    return start + '-' + end
  }

  return (
    <Container>
      <Wrapper>
        <Swiper {...swiperSettings} onAfterInit={() => setInitSlider(true)}>
          {initSlider && schedule
            ? schedule.map(({ day, status, startTime, endTime }) => (
                <SwiperSlide key={day}>
                  {withDateTop && <DateTop>{day}</DateTop>}
                  <DayCard key={day}>
                    <Day isFree={status !== 'work'}>{day.split('', 3)}</Day>
                    {status !== 'work' ? (
                      <PlaneIcon />
                    ) : (
                      <Time>{getWorkingTime(startTime, endTime)}</Time>
                    )}
                  </DayCard>
                  {withDateBottom && (
                    <DateTop>{dayName === day ? 'Today' : day}</DateTop>
                  )}
                </SwiperSlide>
              ))
            : 'loading'}
        </Swiper>
      </Wrapper>
    </Container>
  )
}
