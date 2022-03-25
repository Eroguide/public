import { Container, Label } from './styles'

export const RadioButton: React.FC<{ title: string; forFilter?: boolean }> = ({
  title,
  forFilter,
}) => {
  return (
    <Container>
      <input type="radio" className="custom-radio" name={'radio1'} />
      <Label forFilter={forFilter}>{title}</Label>
    </Container>
  )
}
