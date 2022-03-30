import { SalonScheduleCardContainer, DayList } from './styles'
import { LadyCard, SchedyleCardWorkingDays } from '@/components/generic'
import { memo } from 'react'

export const SalonScheduleCard: React.FC = memo(() => {
  return (
    <SalonScheduleCardContainer>
      <LadyCard href="/" />
      <DayList>
        <SchedyleCardWorkingDays withDateBottom />
      </DayList>
    </SalonScheduleCardContainer>
  )
})
