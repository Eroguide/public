import styled from '@emotion/styled'

export const Title = styled.span<{ forFilter?: boolean }>`
  ${({ theme }) => theme.typography.pl};
  font-weight: 400;
  margin-left: 16px;
  color: ${({ theme }) => theme.grayScale[5]};
`
export const Input = styled.input`
  display: none;
`

export const Container = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  cursor: pointer;
  margin-right: 16px;
`
