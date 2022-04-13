import { Container } from './styles'

export enum StrokeColorTypes {
  gray = 'gray',
  yellow = 'yellow',
  green = 'green',
}

export type InfoCardProps = {
  padding?: string
  margin?: string
  borderRad?: number
  strokeColor?: keyof typeof StrokeColorTypes
  isOpen?: boolean
}

export const InfoCard: React.FC<InfoCardProps> = ({
  children,
  padding,
  margin,
  strokeColor,
  borderRad,
}) => {
  return (
    <Container
      borderRad={borderRad}
      padding={padding}
      margin={margin}
      strokeColor={strokeColor}
    >
      {children}
    </Container>
  )
}
