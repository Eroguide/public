import { SalonScheduleCardContainer, DayList } from './styles'
import { LadyCard, ScheduleCardWorkingDays } from '@/components/generic'
import { ListSalons_listSalons_edges_node_staff } from '@/graphql/types/ListSalons'

export const SalonScheduleCard: React.FC<
  ListSalons_listSalons_edges_node_staff
> = ({ schedule, id, ...props }) => {
  return (
    <SalonScheduleCardContainer>
      <LadyCard href={id} girl={props} />
      <DayList>
        <ScheduleCardWorkingDays withDateBottom schedule={schedule} />
      </DayList>
    </SalonScheduleCardContainer>
  )
}
