import styled from '@emotion/styled'

export const Label = styled.span`
  font-size: ${({ theme }) => theme.fontSize['m']};
  font-weight: 600;
  margin-left: 16px;
`

export const Container = styled.label`
  align-items: center;
  text-align: center;
  display: flex;
  cursor: pointer;
`
