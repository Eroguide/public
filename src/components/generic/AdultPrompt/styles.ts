import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  position: fixed;
  inset: 0;
  z-index: 5000;
`

export const Card = styled.div`
  width: 375px;
  background: ${({ theme }) => theme.grayScale[1]};
  padding: 32px 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 32px;
  position: relative;
`

export const Title = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.grayScale[5]};
  font-weight: 600;
  margin-top: 64px;
`

export const ButtonsGroup = styled.div`
  width: 220px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.grayScale[3]};
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
  right: 24px;
  top: 24px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.grayScale[2]};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg path {
    stroke: ${({ theme }) => theme.grayScale[2]};
  }
  &:hover {
    border: 2px solid ${({ theme }) => theme.grayScale[3]};
    svg path {
      stroke: ${({ theme }) => theme.grayScale[3]};
    }
  }
`
