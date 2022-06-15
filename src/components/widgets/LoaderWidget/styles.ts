import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const LoaderIcon = styled.div`
  svg {
    width: 72px;
    height: 72px;
  }
`

export const GridLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  align-content: center;
  -webkit-align-content: center;
  width: 45px;
  height: 45px;
`

const quickGlow = keyframes`
    15% {
      z-index: 99;
      background: #ff2995;
      box-shadow: 0 0 10px 2px #ff2995;
    }
`

export const Cell = styled.div<{ idx: number; index: number }>`
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  margin: 2px;

  &:nth-of-type(1) {
    animation: ${quickGlow} 1s 0s infinite;
  }
  &:nth-of-type(2) {
    animation: ${quickGlow} 1s 0.1s infinite;
  }
  &:nth-of-type(3) {
    animation: ${quickGlow} 1s 0.2s infinite;
  }
  &:nth-of-type(6) {
    animation: ${quickGlow} 1s 0.3s infinite;
  }
  &:nth-of-type(9) {
    animation: ${quickGlow} 1s 0.4s infinite;
  }
  &:nth-of-type(8) {
    animation: ${quickGlow} 1s 0.5s infinite;
  }
  &:nth-of-type(7) {
    animation: ${quickGlow} 1s 0.6s infinite;
  }
  &:nth-of-type(4) {
    animation: ${quickGlow} 1s 0.7s infinite;
  }
  &:nth-of-type(5) {
    animation: ${quickGlow} 1s 0.8s infinite;
  }
`
