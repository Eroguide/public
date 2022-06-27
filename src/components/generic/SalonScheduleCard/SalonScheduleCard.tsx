import { SalonScheduleCardContainer, DayList } from './styles'
import {
  // LadyCard,

  SchedyleCardWorkingDays,
} from '@/components/generic'

export const SalonScheduleCard: React.FC = () => {
  return (
    <SalonScheduleCardContainer>
      {/*<LadyCard href="#" />*/}
      <DayList>
        <SchedyleCardWorkingDays withDateBottom />
      </DayList>
    </SalonScheduleCardContainer>
  )
}
