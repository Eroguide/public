import { ChevronTitle, ToggleInformation, Container } from './styles'
import ChevronIcon from '/public/img/chevron.svg'
import { ChevronButtonProps } from './types'

export const ChevronButton: React.FC<ChevronButtonProps> = ({
  handleIsOpen,
  isOpen,
  title,
  bgColor,
}) => {
  return (
    <Container onClick={() => handleIsOpen()}>
      <ChevronTitle bgColor={bgColor}>{title}</ChevronTitle>
      <ToggleInformation bgColor={bgColor} isOpen={isOpen}>
        <ChevronIcon />
      </ToggleInformation>
    </Container>
  )
}
