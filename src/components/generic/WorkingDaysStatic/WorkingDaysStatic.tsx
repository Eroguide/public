import {
  Container,
  Wrapper,
  DayCard,
  Day,
  Time,
  DateTop,
  DayCardWrapper,
} from './styles'
import PlaneIcon from '/public/img/plane-icon.svg'

export const WorkingDaysStatic: React.FC<{
  withDateTop?: boolean
  withDateBottom?: boolean
}> = ({ withDateTop, withDateBottom }) => {
  const days = [
    {
      name: 'Sun',
      time: '12-20',
      isFree: true,
    },
    {
      name: 'Mon',
      time: '12-20',
    },
    {
      name: 'Thu',
      time: '12-20',
      isActive: true,
    },
    {
      name: 'Wed',
      time: '12-20',
    },
    {
      name: 'Tho',
      time: '12-20',
    },
  ]

  return (
    <Container>
      <Wrapper>
        {days.map((day) => (
          <DayCardWrapper key={day.name}>
            {withDateTop && <DateTop>{day.name}</DateTop>}
            <DayCard isActive={day.isActive} key={day.name}>
              <Day isFree={day?.isFree}>{day.name}</Day>
              {day?.isFree ? <PlaneIcon /> : <Time>{day.time}</Time>}
            </DayCard>
            {withDateBottom && <DateTop>{day.name}</DateTop>}
          </DayCardWrapper>
        ))}
      </Wrapper>
    </Container>
  )
}
