import { Container, Input } from './styles'
import { HTMLInputTypeAttribute } from 'react'

export const CustomInput: React.FC<{
  required?: boolean
  type?: HTMLInputTypeAttribute
  placeholder?: string
}> = ({ type = 'text', placeholder, required }) => {
  return (
    <Container>
      <Input type={type} placeholder={placeholder} required={required} />
    </Container>
  )
}
