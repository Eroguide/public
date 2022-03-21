import { Container, Label } from './styles'

export const RadioButton: React.FC<{ title: string }> = (
  { title },
  ...props
) => {
  return (
    <Container {...props}>
      <input type="radio" className="custom-radio" name={'radio1'} />
      <Label>{title}</Label>
    </Container>
  )
}
