import { Container } from './styles'

export enum StrokeColorTypes {
  gray = 'gray',
  yellow = 'yellow',
  green = 'green',
}

export type InfoCardProps = {
  padding?: string
  margin?: string
  strokeColor?: keyof typeof StrokeColorTypes
}

export const InfoCard: React.FC<InfoCardProps> = ({
  children,
  padding,
  margin,
  strokeColor,
}) => {
  return (
    <Container padding={padding} margin={margin} strokeColor={strokeColor}>
      {children}
    </Container>
  )
}
