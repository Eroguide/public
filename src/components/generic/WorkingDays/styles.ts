import styled from '@emotion/styled'

export const Container = styled.div`
  align-items: center;
  text-align: center;
  display: flex;

  ${({ theme }) => theme.media.mobile`
      width: 100%;
  `}
`

export const Wrapper = styled.ul<{ noFade?: boolean }>`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  position: relative;
  width: 100%;
  margin-left: -9px;
  margin-right: -9px;

  ${({ noFade }) =>
    !noFade &&
    ` &:before {
    content: '';
    position: absolute;
    inset: 0 auto 0 0;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0) 32%,
      rgba(255, 255, 255, 1) 83%,
      rgba(255, 255, 255, 1) 100%
    );
    width: 80px;
    z-index: 5;
  }
`}

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

export const DayCard = styled.div`
  height: 66px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.grayScale[1]};
  position: relative;
  background: ${({ theme }) => theme.grayScale[0]};
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    inset: 0 0 0 0;
    filter: blur(0);
    transition: filter 0.15s ease-in-out;
    z-index: -1;
    border-radius: 4px;
  }
  &:hover {
    &:before {
      content: '';
      background-color: ${({ theme }) => theme.opacity[70][0]};
      transition: filter 0.15s ease-in-out;
      filter: blur(4px);
    }
  }

  &:active {
    &:before {
      content: '';
      background-color: ${({ theme }) => theme.opacity[70][0]};
      transition: filter 0.2s ease-out;
      filter: blur(2px);
    }
  }
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
