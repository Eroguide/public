import styled from '@emotion/styled'
import { HTMLInputTypeAttribute } from 'react'

export const Container = styled.div`
  margin-bottom: 16px;
`

export const Input = styled.input<{
  type: HTMLInputTypeAttribute
  placeholder?: string
}>`
  height: 48px;
  width: 304px;
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.grayScale[2]};
  ${({ theme }) => theme.typography.pm};
`
