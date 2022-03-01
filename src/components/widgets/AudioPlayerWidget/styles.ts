import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
`

export const Inner = styled.div`
  width: 100%;
  display: flex;
`

export const AudioWrapper = styled.div`
  width: 100%;
  height: 136px;
  border-radius: 32px;
  overflow: hidden;
  position: relative;
  background: ${({ theme }) => theme.grayScale[1]};
  padding: 32px;
  display: flex;
  align-items: center;
`

export const PlayIconWrapper = styled.span`
  border-radius: 12px;
  height: 72px;
  width: 72px;
  background: gray url('/img/bg.jpg') no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  bottom: 48px;
  left: 24px;
  cursor: pointer;
  margin-right: 24px;
`

export const TimeLine = styled.span<{ percentage: number }>`
  height: 8px;
  width: 100%;
  background: ${({ theme }) => theme.grayScale[2]};
  position: absolute;
  left: 0;
  bottom: 0;
  transition: width 0.3s linear;
  &::after {
    content: '';
    width: ${({ percentage }) => (percentage ? `${percentage}%` : 0)};
    background: ${({ theme }) => theme.support[0]};
    z-index: 50;
    height: 8px;
    border-radius: 4px;
    position: absolute;
    inset: 0;
    ${({ percentage }) =>
      percentage > 0 &&
      percentage < 100 &&
      `
      transition: 0.3s linear;
  `}
  }
`

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.grayScale[5]};
  font-weight: 600;
`

export const Details = styled.div`
  display: flex;
  justify-content: space-between;

  width: 80%;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const Genre = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.grayScale[3]};
`

export const UploadDate = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.grayScale[3]};
`

export const UploadTag = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.grayScale[3]};
`
