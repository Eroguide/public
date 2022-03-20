import styled from '@emotion/styled'
import { InfoCardProps } from '@/components/generic/InfoCard/InfoCard'

export const Container = styled.div<InfoCardProps>`
  width: 100%;
  display: flex;
  box-shadow: 0 4px 8px rgba(26, 26, 26, 0.2);
  border-radius: 32px;
  padding: ${({ padding }) => padding ?? '24px 40px'};
  margin: ${({ margin }) => margin ?? '8px 0'};
  border: 1px solid ${({ theme }) => theme.grayScale[2]};
  justify-content: space-between;
  align-items: center;
  flex-flow: column wrap;
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
  flex-wrap: wrap;
`

export const IconsRow = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 150px);
  flex-flow: wrap row;
  margin-left: -4px;
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
  margin: 4px;
`

export const IconWrapperHiddenContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 16px;
  height: 40px;
  width: 40px;
  border: 1px solid ${({ theme }) => theme.grayScale[2]};
`

export const Description = styled.span<{
  isOpen: boolean
}>`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.grayScale[3]};
  height: ${({ isOpen }) => (isOpen ? 'auto' : 0)};
  margin-top: ${({ isOpen }) => (isOpen ? '32px' : 0)};
  width: 100%;
  ${({ isOpen }) =>
    isOpen &&
    'transition: height 0.2s ease-in-out, margin-top 0.2s ease-in-out;'};
  will-change: height, margin-top;
  overflow: hidden;
`

export const HiddenContentItem = styled.div<{
  delay: number
  isOpen: boolean
}>`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  opacity: ${({ isOpen }) => (isOpen ? '1' : 0)};
  transition: opacity 0.15s ease-in-out;
  transition-delay: ${({ delay, isOpen }) => (isOpen && `0.${delay}s`) || 0};
`
