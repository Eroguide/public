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
import { useState } from 'react'

export const ScheduleFilters: React.FC = () => {
  const [isActive, setIsActive] = useState<number>(0)
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
          {['by schedule', 'by name', 'by latest'].map((tag, index) => (
            <FilterItem key={tag}>
              <CustomButton
                isActive={isActive === index}
                styleType="tertiary"
                sizeType="small"
                onClick={() => setIsActive(index)}
              >
                {tag}
              </CustomButton>
            </FilterItem>
          ))}
        </FilterOptions>
      </Wrapper>
    </Container>
  )
}
