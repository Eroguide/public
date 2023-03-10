import styled from '@emotion/styled'

export const SalonScheduleCardContainer = styled.div`
  display: flex;
  border-radius: 32px;
  padding: 16px 24px;
  margin: 8px 0;
  border: 1px solid ${({ theme }) => theme.grayScale[1]};
  min-height: 135px;
  overflow-x: hidden;
`

export const DayList = styled.div`
  width: 100%;
  display: flex;
  margin-left: 16px;
`
