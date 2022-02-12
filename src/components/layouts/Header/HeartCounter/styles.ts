import styled from '@emotion/styled'

export const HeartCounterWrapper = styled.div<{ hasItems: boolean }>`
  margin-left: 40px;
  width: 24px;
  height: 24px;
  position: relative;
  cursor: pointer;
  svg {
    transition: fill 0.15s ease-in-out;
    fill: ${({ theme }) => theme.grayScale[2]};
  }
  &:hover {
    ${({ hasItems, theme }) =>
      !hasItems &&
      ` svg {
        transition:fill 0.15s ease-in-out;
        fill: ${theme.primary[0]};
        }`};
  }
`

export const Counter = styled.div`
  position: absolute;
  font-size: 10px;
  color: #ff005d;
  background-color: white;
  width: 16px;
  height: 16px;
  display: flex;
  right: 0;
  top: 6px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`
