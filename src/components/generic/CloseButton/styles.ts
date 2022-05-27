import styled from '@emotion/styled'

export const CloseButtonWrapper = styled.div<{ distance?: number }>`
  position: absolute;
  height: 24px;
  width: 24px;
  right: ${({ distance }) => (distance ? `${distance}px` : '64px')};
  top: ${({ distance }) => (distance ? `${distance}px` : '64px')};
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.grayScale[1]};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;

  svg path {
    stroke: ${({ theme }) => theme.grayScale[1]};
  }
  &:hover {
    border: 2px solid ${({ theme }) => theme.grayScale[2]};

    svg path {
      stroke: ${({ theme }) => theme.grayScale[2]};
      fill: ${({ theme }) => theme.grayScale[0]};
    }
  }
  &:active {
    border: 2px solid ${({ theme }) => theme.grayScale[3]};

    svg path {
      stroke: ${({ theme }) => theme.grayScale[3]};
    }
  }
`
