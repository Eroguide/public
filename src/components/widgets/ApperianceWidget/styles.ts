import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  height: auto;
`

export const Inner = styled.div`
  width: 100%;
  display: flex;
`

export const ParameterItem = styled.div`
  width: 115px;
  border-radius: 24px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.grayScale[1]};
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  justify-content: space-between;
  margin-right: 16px;
`
