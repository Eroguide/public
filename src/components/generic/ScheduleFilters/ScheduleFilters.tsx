import {
  Container,
  Wrapper,
  Notifier,
  IconWrapper,
  FilterOptions,
  FilterItem,
} from './styles'
import CalendarIcon from '/public/img/icon-calendar.svg'
import { CustomButton } from '@/components/generic'
export const ScheduleFilters: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Notifier>
          <IconWrapper>
            <CalendarIcon />
          </IconWrapper>
          <span>updated yesterday 18:17</span>
        </Notifier>
        <FilterOptions>
          {['by schedule', 'by name', 'by latest'].map((tag) => (
            <FilterItem key={tag}>
              <CustomButton styleType="tertiary" sizeType="medium">
                {tag}
              </CustomButton>
            </FilterItem>
          ))}
        </FilterOptions>
      </Wrapper>
    </Container>
  )
}
