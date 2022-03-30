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
import { memo } from 'react'
export const ScheduleFilters: React.FC = memo(() => {
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
              <CustomButton styleType="tertiary" sizeType="small">
                {tag}
              </CustomButton>
            </FilterItem>
          ))}
        </FilterOptions>
      </Wrapper>
    </Container>
  )
})
