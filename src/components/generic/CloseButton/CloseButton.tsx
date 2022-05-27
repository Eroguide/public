import CloseIcon from '/public/img/cross-icon.svg'
import { CloseButtonWrapper } from './styles'

export const CloseButton: React.FC<{
  handleClose: () => void
  distance?: number
}> = ({ handleClose, distance }) => {
  return (
    <CloseButtonWrapper onClick={handleClose} distance={distance}>
      <CloseIcon />
    </CloseButtonWrapper>
  )
}
