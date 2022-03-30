import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  margin: 32px 0 64px 0;
`

export const Title = styled.h3`
  margin-bottom: 32px;
  ${({ theme }) => theme.typography.h3};
  color: ${({ theme }) => theme.grayScale[5]};
  font-weight: 600;
`
