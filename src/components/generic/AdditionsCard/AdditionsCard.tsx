import {
  Container,
  MainInfo,
  Description,
  IconWrapperAdditions,
  Left,
  Timer,
  IconWrapper,
  BottomRow,
  Price,
  Suffix,
} from './styles'
import TimerIcon from '/public/img/timer-icon.svg'

// const addtiionsList = [
//   {
//     id: '1sads',
//   },
// ]
//
// import { useState } from 'react'

export type InfoCardProps = {
  title?: string
  price?: number
}

export const AdditionsCard: React.FC<InfoCardProps> = ({ title, price }) => {
  return (
    <Container>
      <MainInfo>
        <Left>
          <IconWrapperAdditions>
            <TimerIcon />
          </IconWrapperAdditions>
        </Left>
        <Description>{title}</Description>
      </MainInfo>

      <BottomRow>
        <Timer>
          <IconWrapper>
            <TimerIcon />
          </IconWrapper>
          <span>1 hour</span>
        </Timer>
        <Price>
          {price} <Suffix>Kč/h</Suffix>
        </Price>
      </BottomRow>
    </Container>
  )
}