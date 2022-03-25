import styled from '@emotion/styled'
import { ChevronButtonProps } from '@/components/generic/ChevronButton/types'
export const ChevronTitle = styled.span<{
  bgColor: ChevronButtonProps['bgColor']
}>`
  color: ${({ theme, bgColor }) =>
    bgColor === 'white' ? `${theme.grayScale[0]}` : `${theme.support[2]}`};
  font-size: ${({ theme }) => theme.fontSize['s']};
  font-weight: 500;
`

export const Container = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
`
export const ToggleInformation = styled.div<{
  isOpen: boolean
  bgColor: ChevronButtonProps['bgColor']
}>`
  width: 24px;
  height: 24px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 8px;

  &:hover {
    background-color: ${({ bgColor }) =>
      bgColor === 'white'
        ? `rgba(255, 255, 255, 0.08)`
        : 'rgba(47, 194, 125, 0.08)'};
  }

  svg {
    fill: ${({ bgColor, theme }) =>
      bgColor === 'white' ? `white` : `${theme.support[2]}`};
    transform: rotate(180deg);
  }
  ${({ isOpen, bgColor }) =>
    isOpen &&
    `
      svg {
         transform: rotate(0deg);
      }
        background-color: ${
          bgColor === 'green'
            ? `rgba(47, 194, 125, 0.08)`
            : `rgba(255, 255, 255, 0.08)`
        }
  `}
`
