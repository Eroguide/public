import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  height: auto;
  border-radius: 32px;
  margin-bottom: 24px;
  padding: 64px 0;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.grayScale[1]};
`

export const Inner = styled.div`
  width: 100%;
  padding: 0 68px;
`
