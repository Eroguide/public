import styled from '@emotion/styled'

export const ContentCardRowContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-top: 64px;
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
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.grayScale[4]};
`

export const RightWidget = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
`

export const ContentRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 40px;
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
      ? `background: ${theme.primary[1]};`
      : date === 2
      ? `background: ${theme.grayScale[2]};`
      : date === 3
      ? `background: ${theme.primary[2]};`
      : `background: ${theme.grayScale[3]};`};
  height: 4px;
  border-radius: 8px;

  width: ${({ isLast }) => (isLast ? `100%` : `110%`)};
`
