import { Container, Title } from './styles'
import { CheckBox } from '@/components/generic'

export const RadioButton: React.FC<{ title: string; forFilter?: boolean }> = ({
  title,
  forFilter,
}) => {
  return (
    <Container>
      <CheckBox />
      <input type="radio" className="custom-radio" name={'radio1'} />
      <Title forFilter={forFilter}>{title}</Title>
    </Container>
  )
}
