import styled from '@emotion/styled'
import { InfoCardProps } from '@/components/generic/InfoCard/InfoCard'

export const Container = styled.div<InfoCardProps>`
  width: 100%;
  display: flex;
  border-radius: 32px;
  padding: 32px 32px 24px 32px;
  margin: 8px 0;
  border: 1px solid ${({ theme }) => theme.grayScale[2]};
  justify-content: space-between;
  align-items: center;
  flex-flow: column wrap;
`

export const Description = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.grayScale[4]};
`

export const Left = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 16px;
`

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.grayScale[5]};
  font-weight: 500;
  margin-right: 4px;
  line-height: 24px;
`

export const Details = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.grayScale[3]};
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  margin-right: 4px;
`

export const Timer = styled.div`
  display: flex;
  align-items: center;

  & span {
    line-height: 24px;
    color: ${({ theme }) => theme.grayScale[3]};
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`

export const IconWrapperAdditions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 8px;
  height: 40px;
  width: 40px;
  border: 1px solid ${({ theme }) => theme.grayScale[2]};
`

export const MainInfo = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`
//     &:hover {
//   ${ToggleButton} {
//     svg {
//       fill: ${({ theme }) => theme.grayScale[3]};
// }
// }
// }
//
// svg {
//   margin-right: 8px;
// }

export const BottomRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 24px;
  align-items: center;
  padding-left: 58px;
`

export const Price = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.grayScale[5]};
  font-weight: 600;
  height: 40px;
  display: flex;
  line-height: 32px;
  align-items: flex-end;
`

export const Suffix = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 600;
  line-height: 28px;
  display: flex;
  align-items: flex-end;
`