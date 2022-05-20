import { Container, Title, TopLine } from './styles'
import ToolTipIcon from '/public/img/tooltip-icon.svg'

export const SinglePageContentBlock: React.FC<{
  title: string
  withIcon?: boolean
}> = ({ children, title, withIcon }) => {
  return (
    <Container>
      <TopLine>
        <Title>{title}</Title>
        {withIcon && <ToolTipIcon />}
      </TopLine>
      {children}
    </Container>
  )
}
