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

export const PlayIconOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
`
export const PlayButtonWrapper = styled.div`
  border-radius: 12px;
  height: 72px;
  width: 72px;
  background: url('/img/fake.png') no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  position: relative;
  cursor: pointer;
  margin-right: 24px;
  mix-blend-mode: darken;
  overflow: hidden;

  &:hover {
    ${PlayIconOverlay} {
      background: rgba(0, 0, 0, 0.5);
      transition: 0.15s ease-in-out;
    }
  }
`
export const IconWrapper = styled.div`
  z-index: 100;
  cursor: pointer;
  height: 24px;
  width: 24px;
`
export const Timer = styled.span<{ isActive?: boolean }>`
  ${({ theme }) => theme.typography.h4};
  color: ${({ theme, isActive }) =>
    isActive ? theme.grayScale[4] : theme.grayScale[3]};
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
  ${({ theme }) => theme.typography.h3};
  color: ${({ theme }) => theme.grayScale[5]};
  font-weight: 600;
`

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  ${({ theme }) => theme.typography.h4};
  color: ${({ theme }) => theme.grayScale[3]};
`

export const UploadDate = styled.span`
  ${({ theme }) => theme.typography.h4};
  color: ${({ theme }) => theme.grayScale[3]};
`

export const UploadTag = styled.span`
  ${({ theme }) => theme.typography.h4};
  color: ${({ theme }) => theme.grayScale[3]};
`
