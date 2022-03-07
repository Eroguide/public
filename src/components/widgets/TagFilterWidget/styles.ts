import styled from '@emotion/styled'

export const TagFilterWidgetContainer = styled.div`
  width: 300px;
  height: auto;
  min-height: 250px;
  border-radius: 32px;
  box-shadow: 0 4px 8px rgba(26, 26, 26, 0.2);
  position: sticky;
  flex-grow: 1;
  flex-basis: 300px;
  align-self: start;
  top: 150px;
  float: right;
`

export const Inner = styled.div`
  width: 100%;
  display: flex;
  padding: 16px 24px;
  flex-flow: row wrap;
`

export const Tag = styled.div`
  color: ${({ theme }) => theme.grayScale[4]};
  background-color: ${({ theme }) => theme.grayScale[1]};
  border: 2px solid ${({ theme }) => theme.grayScale[1]};
  height: 40px;
  border-radius: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
  font-size: ${({ theme }) => theme.fontSize['m']};
  font-weight: 600;
  cursor: pointer;
  margin: 4px;
  span {
    margin-left: 8px;
  }
  &:hover {
    color: ${({ theme }) => theme.grayScale[4]};
    background-color: ${({ theme }) => theme.grayScale[1]};
    border: 2px solid ${({ theme }) => theme.grayScale[4]};
  }
  &:active {
    color: ${({ theme }) => theme.grayScale[5]};
    background-color: ${({ theme }) => theme.grayScale[2]};
    border: 2px solid ${({ theme }) => theme.grayScale[2]};
  }
`
