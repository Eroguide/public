import {
  Divider,
  IconWrapper,
  WidgetInner,
  Prefix,
  Price,
  PriceBlock,
  Suffix,
  LastCheckDate,
  ScheduleBlockWidget,
  WorkingDaysWrapper,
} from './styles'

import GreenCheck from '/public/img/green-check.svg'
import { CustomButton, WorkingDays } from '@/components/generic'

export const ScheduleSinglePageWidget: React.FC = () => {
  return (
    <WidgetInner>
      <ScheduleBlockWidget>
        <LastCheckDate>
          <IconWrapper>
            <GreenCheck />
          </IconWrapper>
          Schedule checked Nov 18. 2021
        </LastCheckDate>
      </ScheduleBlockWidget>
      <WorkingDaysWrapper>
        <WorkingDays withDateTop />
      </WorkingDaysWrapper>
      <Divider />
      <PriceBlock>
        <Prefix>from</Prefix>
        <Price>2500</Price>
        <Suffix>Kč/h</Suffix>
      </PriceBlock>
      <CustomButton styleType="tertiary" sizeType="medium" margin={'auto'}>
        Salons price
      </CustomButton>
    </WidgetInner>
  )
}
