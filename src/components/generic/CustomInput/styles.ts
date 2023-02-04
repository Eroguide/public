import styled from '@emotion/styled'
import { HTMLInputTypeAttribute } from 'react'

export const Input = styled.input<{
  type: HTMLInputTypeAttribute
  placeholder?: string
}>`
  height: 48px;
  width: 304px;
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.grayScale[1]};
  ${({ theme }) => theme.typography.pm};
  transition: border 0.2s ease-in-out;
  &:hover {
    border: 1px solid ${({ theme }) => theme.grayScale[2]};
    transition: border 0.2s ease-in-out;
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.grayScale[3]};
    transition: border 0.2s ease-in-out;
  }
  margin-bottom: 16px;
`
