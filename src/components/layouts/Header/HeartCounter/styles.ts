import styled from '@emotion/styled'
// import { css, keyframes } from '@emotion/react'
import { theme } from '@/src/theme'
//
// const like = keyframes`
//   0% {
//     stroke-dashoffset: 54;
//     stroke:${theme.grayScale[1]};
//   }
//
//   70% {
//     stroke-dashoffset: 0;
//     stroke:${theme.grayScale[1]};
//   }
//
//   100% {
//     stroke-dashoffset: 0;
//     fill:${theme.primary[0]};
//   }
// `
//
// const unlike = keyframes`
//   0% {
//     stroke-dashoffset: 0;
//     fill:${theme.primary[0]};
//   }
//
//   30% {
//     stroke-dashoffset: 0;
//     stroke:${theme.grayScale[1]};
//   }
//
//   100% {
//     stroke-dashoffset: 54;
//     stroke:${theme.grayScale[1]};
//   }
// `
// const beat = keyframes`
//   0% {
//     transform: scale(1, 1);
//   }
//
//   50% {
//     transform: scale(0.9, 0.9);
//   }
//
//   100% {
//     transform: scale(1, 1);
//   }
// `
//
// const anim1 = css`
//   animation: 1s ${like} ease-in forwards, 0.6s linear 1s 2 forwards ${beat};
// `
// const anim2 = css`
//   animation: 1s ${unlike} ease-out forwards;
// `

export const HeartCounterWrapper = styled.div<{ hasItems: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 100%;
  padding: 0 20px;
  svg {
    width: 24px;
    stroke: ${theme.primary[0]};
    fill: ${theme.grayScale[1]};
    //stroke-dasharray: 54;
    //stroke-dashoffset: 54;
    ${({ hasItems }) =>
      hasItems
        ? `fill:${theme.primary[0]}; stroke:${theme.primary[0]}`
        : `fill: white; stroke: ${theme.grayScale[3]};`};
  }

  &:hover {
    svg {
      ${({ hasItems }) =>
        hasItems
          ? `fill:${theme.primary[1]}; stroke:${theme.primary[1]}`
          : `fill: white; stroke: ${theme.primary[0]};`};
    }
  }
`
// ${({ hasItems }) =>
// hasItems
//     ? `fill:${theme.primary[0]}; stroke:${theme.primary[0]}`
//     : `fill: white; stroke: ${theme.grayScale[3]};`};
export const Counter = styled.div`
  position: absolute;
  ${({ theme }) => theme.typography.h7};
  color: #ff005d;
  background-color: white;
  width: 16px;
  height: 16px;
  display: flex;
  right: 0;
  top: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`
