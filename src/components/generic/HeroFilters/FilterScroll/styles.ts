import styled from '@emotion/styled'

export const FilterScrollContainer = styled.div`
  height: 64px;
  width: calc(100% - 64px);
  display: flex;
  align-items: center;
`

export const FilterCategory = styled.div`
  display: flex;
  margin-right: 48px;
  align-items: center;
  min-width: 120px;
`

export const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
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
  font-size: 24px;
  font-weight: 600;
  color: #40404a;
  white-space: nowrap;
`

export const FilterCounter = styled.span`
  display: flex;
  font-size: 10px;
  font-weight: 600;
  color: #a0a0b0;
  width: 32px;
  height: 16px;
  border: 1px solid #ebebf0;
  border-radius: 8px;
  margin-left: 4px;
  justify-content: center;
`
