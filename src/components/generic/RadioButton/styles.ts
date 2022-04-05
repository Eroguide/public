import styled from '@emotion/styled'

export const Label = styled.span<{ forFilter?: boolean }>`
  ${({ theme }) => theme.typography.pl};
  font-weight: 400;
  margin-left: 16px;
  color: ${({ theme }) => theme.grayScale[5]};
`

export const Container = styled.label`
  align-items: center;
  text-align: center;
  display: flex;
  cursor: pointer;
  margin-right: 16px;
`
