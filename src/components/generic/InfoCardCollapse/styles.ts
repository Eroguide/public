import styled from '@emotion/styled'
import { InfoCardProps } from '@/components/generic/InfoCard/InfoCard'

export const Container = styled.div<InfoCardProps>`
  width: 100%;
  border-radius: 24px;
  border: 1px solid
    ${({ theme, strokeColor }) =>
      strokeColor === 'gray'
        ? theme.grayScale[2]
        : strokeColor === 'yellow'
        ? theme.support[1]
        : strokeColor === 'green'
        ? theme.support[2]
        : theme.grayScale[2]};
  display: flex;
  ${({ theme, strokeColor }) =>
    strokeColor === 'green' && `color: ${theme.support[2]}`};
  padding: ${({ padding }) => padding ?? '24px 40px'};
  margin: ${({ margin }) => margin ?? '8px 0'};
  justify-content: space-between;
  align-items: center;
  flex-flow: column wrap;
`

export const Description = styled.p<{ isOpen: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.grayScale[3]};
  padding-left: 32px;
  height: ${({ isOpen }) => (isOpen ? 'auto' : 0)};
  transition: height 0.2s ease-in-out;
  will-change: height;
`

export const Left = styled.span`
  display: flex;
  align-items: center;
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
  ${ToggleButton} {
    svg {
      fill: ${({ theme }) => theme.grayScale[3]};
    }
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.support[2]};
  }
  svg {
    margin-right: 8px;
  }
`
