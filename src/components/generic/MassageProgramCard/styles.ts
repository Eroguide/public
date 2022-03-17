import styled from '@emotion/styled'
import {
  InfoCardProps,
  StrokeColorTypes,
} from '@/components/generic/InfoCard/InfoCard'

export const Container = styled.div<InfoCardProps>`
  width: 100%;
  display: flex;
  box-shadow: 0px 4px 8px rgba(26, 26, 26, 0.2);
  border-radius: 32px;
  padding: ${({ padding }) => padding ?? '24px 40px'};
  margin: ${({ margin }) => margin ?? '8px 0'};
  border: 1px solid ${({ theme }) => theme.grayScale[2]};
  justify-content: space-between;
  align-items: center;
  flex-flow: column wrap;
`

export const Description = styled.span<{
  isOpen: boolean
  strokeColor?: keyof typeof StrokeColorTypes
}>`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.grayScale[3]};
  padding-left: 32px;
  height: ${({ isOpen }) => (isOpen ? 'auto' : 0)};
  transition: height 0.2s ease-in-out;
  will-change: height;
  // & span {
  //   color: ${({ theme }) => theme.support[2]};
  //   font-weight: bold;
  // }
`

export const Left = styled.div`
  display: flex;
  align-items: flex-end;
  height: 24px;
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
`

export const Timer = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.grayScale[3]};
  width: 100%;
  margin: 12px 0;
`

export const ToggleButton = styled.span<{ isOpen: boolean }>`
  width: 24px;
  height: 24px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 8px;

  svg {
    fill: ${({ theme }) => theme.grayScale[1]};
  }

  ${({ isOpen }) => isOpen && `svg { transform: rotate(180deg); } `};
`

export const MainInfo = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: ${({ isOpen }) => (isOpen ? '24px' : 0)};
  transition: margin-bottom 0.2s ease-in-out;
  will-change: margin-bottom;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    ${ToggleButton} {
      svg {
        fill: ${({ theme }) => theme.grayScale[3]};
      }
    }
  }

  svg {
    margin-right: 8px;
  }
`

export const BottomRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const IconsRow = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
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

export const SingleIconWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 40px;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.grayScale[2]};
  &:not(:first-of-type) {
    margin-left: 4px;
  }
  &:not(:last-of-type) {
    margin-right: 4px;
  }
`
