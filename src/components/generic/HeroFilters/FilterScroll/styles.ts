import styled from '@emotion/styled'

export const FilterScrollContainer = styled.div`
  height: 100%;
  width: calc(100% - 128px);
  display: flex;
  align-items: center;
`

export const Line = styled.div`
  height: 2px;
  transition: width 0.1s ease-in;
  background-color: ${({ theme }) => theme.primary[0]};
  width: 0;
`

export const FilterCategory = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  flex-wrap: wrap;
  ${({ isActive, theme }) =>
    isActive &&
    `
       ${Line} {
        width: ${isActive ? '100%' : 0};
        transition: width 0.1s ease-in;
        background-color: ${theme.primary[0]};
          transition: width 0.1s ease-in;
      }
  `};
`

export const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  height: 100%;
  & .swiper {
    width: 100%;
    display: flex;
  }
  & .swiper-slide {
    width: auto;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0 0 0 auto;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 32%,
      rgba(255, 255, 255, 1) 83%,
      rgba(255, 255, 255, 1) 100%
    );
    width: 80px;
    z-index: 5;
  }
`

export const CategoryTitle = styled.span`
  ${({ theme }) => theme.typography.h3};
  font-weight: 600;
  color: #40404a;
  white-space: nowrap;
`

export const FlexBox = styled.div`
  white-space: nowrap;
  display: flex;
  flex-flow: column;
`

export const FlexRow = styled.div`
  white-space: nowrap;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 32px;
  align-items: center;
`

export const FilterCounter = styled.span`
  display: flex;
  ${({ theme }) => theme.typography.h7};
  font-weight: 600;
  color: #a0a0b0;
  width: 32px;
  height: 16px;
  border: 1px solid #ebebf0;
  border-radius: 8px;
  margin-left: 4px;
  justify-content: center;
  align-items: center;
`
