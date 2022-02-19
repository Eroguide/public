import { ChevronTitle, ToggleInformation } from './styles'
import ChevronIcon from '/public/img/chevron.svg'
import { ChevronButtonProps } from './types'

export const ChevronButton: React.FC<ChevronButtonProps> = ({
  handleIsOpen,
  isOpen,
  title,
  bgColor,
}) => {
  return (
    <>
      <ChevronTitle bgColor={bgColor}>{title}</ChevronTitle>
      <ToggleInformation
        bgColor={bgColor}
        onClick={() => handleIsOpen()}
        isOpen={isOpen}
      >
        <ChevronIcon />
      </ToggleInformation>
    </>
  )
}
