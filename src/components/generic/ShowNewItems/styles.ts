import styled from '@emotion/styled'

export const ContentCardRowContainer = styled.div`
  width: 100%;
  padding: 0 9px;
  margin-top: 64px;
  //.swiper {
  //  overflow: visible;
  //}
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
`

export const Title = styled.h3`
  display: flex;
  ${({ theme }) => theme.typography.h2};
  color: ${({ theme }) => theme.grayScale[4]};
`

export const RightWidget = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.media.mobile`
       margin:0;
  `}
`

export const ContentRow = styled.div`
  min-width: 1298px;
  margin: 40px -9px 0 -9px;
  ${({ theme }) => theme.media.mobile`
       min-width: auto;
  `}
`
export const NextButton = styled.div``
export const PrevButton = styled.div``
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

export const DateTag = styled.span`
  margin-left: 12px;
`
