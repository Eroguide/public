import styled from '@emotion/styled'

export const Inner = styled.div<{ isFlipped: boolean }>`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.grayScale[0]};
  border-radius: 24px;
  flex-direction: row;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border: 1px solid
    ${({ isFlipped, theme }) =>
      isFlipped ? theme.grayScale[5] : theme.grayScale[1]};
  transform: ${({ isFlipped }) =>
    isFlipped ? 'rotateX(180deg);' : 'rotateY(0deg);'};
`
export const Container = styled.div<{ isFlipped: boolean }>`
  width: 100%;
  height: 560px;
  display: flex;
  background-color: transparent;
  ${({ isFlipped }) => isFlipped && 'z-index: 1000;'};
  perspective: 1000px;
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.grayScale[5]};
  ${({ theme }) => theme.typography.h3};
  margin-bottom: 24px;
  max-width: 200px;
  font-weight: 600;
`

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.grayScale[4]};
  ${({ theme }) => theme.typography.pl};
  max-width: 300px;
`

export const FrontSide = styled.div<{ image?: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  backface-visibility: hidden;
  padding: 40px 32px;
  border-radius: 24px;
  background: url(${({ image }) => image}) no-repeat center center;
  ${Title} {
    color: ${({ theme }) => theme.grayScale[5]};
  }
  ${Subtitle} {
    color: ${({ theme }) => theme.grayScale[4]};
  }
`
export const BackSide = styled.div<{ image?: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  padding: 40px 32px;
  background-color: ${({ theme }) => theme.grayScale[0]};
  display: flex;
  transform: rotateX(180deg);
  border-radius: 24px;
  background: url(${({ image }) => image}) no-repeat center center;
  ${Title} {
    color: ${({ theme }) => theme.grayScale[5]};
  }
  ${Subtitle} {
    color: ${({ theme }) => theme.grayScale[4]};
  }
`
export const Left = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-end;
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
    fill: ${({ theme }) => theme.grayScale[3]};
  }
  &:hover {
    svg path {
      fill: ${({ theme }) => theme.grayScale[5]};
    }
  }
`

export const IconCloseWrapper = styled.div`
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
      stroke: ${({ theme }) => theme.grayScale[5]};
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
  opacity: ${({ isFlipped }) => (isFlipped ? 1 : 0)};
  transition: opacity 0.25s ease-in-out;
`
