import styled from '@emotion/styled'

export const Container = styled.div<{ isFlipped: boolean }>`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.grayScale[5]};
  border-radius: 24px;
  flex-direction: row;
  padding: 40px 32px;
  height: 560px;
  ${({ isFlipped }) => isFlipped && 'z-index: 1000;'}
`

export const Left = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-end;
`

export const Title = styled.h4`
  color: ${({ theme }) => theme.grayScale[0]};
  font-size: ${({ theme }) => theme.fontSize.l};
`

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.grayScale[0]};
  font-size: ${({ theme }) => theme.fontSize.xxs};
`

export const Right = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  align-items: flex-end;
  a {
    cursor: pointer;
  }
`
export const IconWrapper = styled.div`
  display: flex;
  width: 64px;
  height: 24px;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  svg path {
    stroke: ${({ theme }) => theme.grayScale[3]};
  }

  &:hover {
    svg path {
      stroke: ${({ theme }) => theme.grayScale[0]};
    }
  }
`

export const BgOverlay = styled.div<{ isFlipped: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: #1e1e297d;
  z-index: 1000;
  ${({ isFlipped }) => (isFlipped && `display: block;`) || 'display:none;'};
`
