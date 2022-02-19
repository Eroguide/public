import styled from '@emotion/styled'

export const DrawerBottomContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 90vh;
  transform: ${({ isOpen }) => (isOpen ? `translateY(0)` : `translateY(90vh)`)};
  transition: transform 0.2s ease-in-out;
  padding: 0 80px;
  display: flex;
  flex-flow: column wrap;
  background: ${({ theme }) => theme.grayScale[0]};
  border-radius: 32px 32px 0 0;
  justify-content: center;
  align-items: flex-start;
  z-index: 1001;
`

export const BgOverlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: #1e1e297d;
  z-index: 1000;
`

export const CloseButton = styled.div`
  position: absolute;
  height: 24px;
  width: 24px;
  right: 64px;
  top: 64px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.grayScale[1]};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
