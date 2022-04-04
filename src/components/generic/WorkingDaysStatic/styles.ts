import styled from '@emotion/styled'

export const Container = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    height: 70px;
    inset: 0 auto 0 -24px;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0) 32%,
      rgba(255, 255, 255, 1) 83%,
      rgba(255, 255, 255, 1) 100%
    );
    width: 30px;
    z-index: 5;
  }
  &:after {
    content: '';
    position: absolute;
    height: 70px;
    inset: 0 -24px 0 auto;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 32%,
      rgba(255, 255, 255, 1) 83%,
      rgba(255, 255, 255, 1) 100%
    );
    width: 30px;
    z-index: 5;
  }
  ${({ theme }) => theme.media.mobile`
      width: 100%;
  `}
`

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  position: absolute;
  margin-left: -9px;
  margin-right: -9px;
  top: 0;
  transform: translateX(-15%);

  ${({ theme }) => theme.media.sm`
     max-width: 320px;
     margin: auto;
  `}
  ${({ theme }) => theme.media.mobile`
  max-width: 320px;
  margin: auto;
  `}
`

export const DayCardWrapper = styled.li`
  padding: 0 9px;
  width: 74px;
  display: flex;
  flex-direction: column;
  margin: 4px auto;
`

export const DayCard = styled.div<{ isActive?: boolean }>`
  height: 66px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.grayScale[1]};
  position: relative;
  background: ${({ theme }) => theme.grayScale[0]};
  &:before {
    content: '';
    position: absolute;
    inset: 0 0 0 0;
    filter: blur(0);
    transition: filter 0.15s ease-in-out;
    z-index: -1;
    border-radius: 4px;
  }
  ${({ isActive, theme }) =>
    isActive &&
    `&:before {
      content: '';
      background-color: ${theme.opacity[70][0]};
      transition: filter 0.15s ease-in-out;
      filter: blur(4px);
    }`};
`

export const Day = styled.span<{ isFree?: boolean }>`
  ${({ theme }) => theme.typography.ps};
  color: ${({ theme, isFree }) =>
    isFree ? theme.grayScale[2] : theme.grayScale[3]};
`

export const Time = styled.span`
  ${({ theme }) => theme.typography.ps};
  color: ${({ theme }) => theme.grayScale[5]};
`

export const DateTop = styled.span`
  ${({ theme }) => theme.typography.h7};
  color: ${({ theme }) => theme.grayScale[2]};
  margin-bottom: 8px;
`
