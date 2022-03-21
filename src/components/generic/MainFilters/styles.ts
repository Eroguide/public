import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  max-width: 410px;
  margin: auto;
  ${({ theme }) => theme.media.mobile`
      width: 100%;
  `}
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const Left = styled.div`
  width: 100%;
`

export const Right = styled(Left)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 16px 8px 16px 0;
  flex: 1 1;
  & span {
    display: flex;
    flex-flow: nowrap row;
    flex-grow: 1;
    color: ${({ theme }) => theme.grayScale[3]};
    font-size: ${({ theme }) => theme.fontSize.xs};
    line-height: ${({ theme }) => theme.fontSize.m};
    margin-right: 8px;
  }
`

export const IconWrapper = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg path {
    stroke: ${({ theme }) => theme.primary[0]};
  }
`

export const ReturnButton = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.grayScale[2]};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg path {
    stroke: ${({ theme }) => theme.grayScale[2]};
  }
  &:hover {
    border: 2px solid ${({ theme }) => theme.grayScale[3]};
    svg path {
      stroke: ${({ theme }) => theme.grayScale[3]};
    }
  }
`

export const TopMainFiltersPanel = styled.div`
  width: 100%;
  display: flex;
`

export const FiltersList = styled.div`
  width: 100%;
`

export const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.grayScale[2]};
`
