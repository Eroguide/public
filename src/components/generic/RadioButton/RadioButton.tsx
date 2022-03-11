import { Container, Label } from './styles'

export const RadioButton: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Container>
      <input type="radio" className="custom-radio" name={'radio1'} />
      <Label>{title}</Label>
    </Container>
  )
}
