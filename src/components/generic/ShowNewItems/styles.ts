import styled from '@emotion/styled'

export const ContentCardRowContainer = styled.div`
  width: 100%;
  padding: 0 9px;
  margin-top: 64px;
  .swiper {
    overflow: visible;
  }
  ${({ theme }) => theme.media.mobile`
       padding: 0;
      .swiper {
        overflow: hidden;
      }
  `}
`
export const TopLine = styled.div`
  width: 100%;
  height: 40px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`

export const Title = styled.h3`
  display: flex;
  ${({ theme }) => theme.typography.h2};
  color: ${({ theme }) => theme.grayScale[4]};
  font-weight: 600;
`

export const RightWidget = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.media.mobile`
       margin:0;
  `}
`

export const ContentRow = styled.div`
  //min-width: 1298px;
  margin: 0 -9px;
  .swiper {
    overflow: visible;
  }
  & .swiper {
    width: 100%;
    display: flex;
  }
  & .swiper-slide {
    width: auto;
  }
  ${({ theme }) => theme.media.mobile`
       padding: 0;
      .swiper {
        overflow: hidden;
      }
  `}
  ${({ theme }) => theme.media.mobile`
       min-width: auto;
  `}
`

export const ControlButton = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.grayScale[0]};
  transition: background-color 0.2s ease-in-out;

  svg path {
    transition: fill 0.2s ease-in-out;
  }
  &:hover {
    background-color: ${({ theme }) => theme.grayScale[6]};
    svg path {
      fill: ${({ theme }) => theme.grayScale[2]};
      transition: fill 0.2s ease-in-out;
    }
    transition: background-color 0.2s ease-in-out;
  }
  &:active {
    background-color: ${({ theme }) => theme.grayScale[1]};
    svg path {
      fill: ${({ theme }) => theme.grayScale[3]};
      transition: fill 0.2s ease-in-out;
    }
    transition: background-color 0.2s ease-in-out;
  }
  &.swiper-button-disabled {
    cursor: not-allowed;
    svg path {
      fill: ${({ theme }) => theme.grayScale[1]};
      transition: fill 0.2s ease-in-out;
    }
    transition: background-color 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.grayScale[0]};
  }
`
export const NextButton = styled(ControlButton)``
export const PrevButton = styled(ControlButton)``
export const NextPrevWrapper = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`
export const DateTag = styled.span<{ date: number }>`
  margin-left: 12px;
  margin-top: 8px;
  font-weight: 600;
  ${({ theme }) => theme.typography.h5};
  ${({ theme, date }) =>
    date === 1
      ? `color: ${theme.primary[0]};`
      : date === 2
      ? `color: ${theme.primary[1]};`
      : date === 3
      ? `color: ${theme.primary[2]};`
      : `color: ${theme.grayScale[3]};`};
`

export const TimeLine = styled.div<{ date: number; isLast: boolean }>`
  ${({ theme, date }) =>
    date === 1
      ? `background: ${theme.primary[0]};`
      : date === 2
      ? `background: ${theme.primary[1]};`
      : date === 3
      ? `background: ${theme.primary[2]};`
      : `background: ${theme.grayScale[3]};`};
  height: 8px;
  border-radius: 8px;
  margin-top: 32px;
  margin-left: 12px;
  width: ${({ isLast }) => (isLast ? `calc(99% - 12px);` : `105%;`)};
`
