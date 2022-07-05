import styled from '@emotion/styled'

export const Container = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  position: relative;
  width: 100%;
  & .swiper {
    width: 100%;
    display: flex;
  }
  & .swiper-slide {
    padding: 0 4px;
    width: auto;

    &:first-of-type {
      padding: 0 4px 0 0;
    }
    &:last-of-type {
      padding: 0 0 0 4px;
    }
  }
  ${({ theme }) => theme.media.mobile`
       min-width: auto;
  `};
`

// ${({ theme }) => theme.media.mobile`
//    &:before {
//     content: '';
//     position: absolute;
//     inset: 0 0 0 auto;
//     background: rgb(255, 255, 255);
//     background: linear-gradient(
//       270deg,
//       rgba(255, 255, 255, 0) 32%,
//       rgba(255, 255, 255, 1) 83%,
//       rgba(255, 255, 255, 1) 100%
//     );
//     width: 30px;
//     z-index: 5;
//   }
//   `}

export const DayCard = styled.div<{ isActive?: boolean }>`
  width: 56px;
  height: 66px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.grayScale[1]};
  position: relative;
  background: ${({ theme }) => theme.grayScale[0]};
  margin: 4px auto;
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
  // &:hover {
  //   &:before {
  //     content: '';
  //     background-color: ${({ theme }) => theme.opacity[70][0]};
  //     transition: filter 0.15s ease-in-out;
  //     filter: blur(4px);
  //   }
  // }
  ${({ isActive, theme }) =>
    isActive &&
    `  &:before {
      content: '';
      background-color: ${theme.opacity[70][0]};
      transition: filter 0.15s ease-in-out;
      filter: blur(4px);
    }`};
  // &:active {
  //   &:before {
  //     content: '';
  //     background-color: ${({ theme }) => theme.opacity[70][0]};
  //     transition: filter 0.2s ease-out;
  //     filter: blur(2px);
  //   }
  // }
`

export const Day = styled.span<{ isFree?: boolean; isActive?: boolean }>`
  ${({ theme }) => theme.typography.ps};
  color: ${({ theme, isFree }) =>
    isFree ? theme.grayScale[2] : theme.grayScale[4]};
`

export const Time = styled.span`
  ${({ theme }) => theme.typography.h5};
  color: ${({ theme }) => theme.grayScale[5]};
  font-weight: 600;
`

export const DateTop = styled.span`
  ${({ theme }) => theme.typography.h7};
  color: ${({ theme }) => theme.grayScale[2]};
  margin-bottom: 8px;
`
