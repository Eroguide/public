import { FloatingGalleryContainer, CardInner, CloseButton } from './styles'
import SpinnerIcon from '/public/img/spinner.svg'
import CloseIcon from '/public/img/cross-icon.svg'
export const FloatingGallery: React.FC = () => {
  return (
    <FloatingGalleryContainer>
      <CardInner>
        <CloseButton>
          <CloseIcon />
        </CloseButton>
      </CardInner>
    </FloatingGalleryContainer>
  )
}
