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
  flex-basis: 120px;
`

export const ThumbHorizontal = styled.div`
  border-radius: 2px;
  background-color: #ff005d;
  height: 2px;
`

export const TrackHorizontal = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  height: 2px;
  left: 0;
  right: 0;
`

export const InnerContainer = styled.div<{ width: number }>`
  height: 64px;
  display: flex;
  width: ${({ width }) => (width ? `${width}px` : 0)};
`

export const CategoryTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: #40404a;
  width: 100%;
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
