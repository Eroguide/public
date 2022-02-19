import { DrawerBottomContainer, BgOverlay, CloseButton } from './styles'
import { DrawerBottomProps } from './types'
import CloseIcon from '/public/img/cross-icon.svg'
export const DrawerBottom: React.FC<DrawerBottomProps> = ({
  isOpen,
  handleClose,
}) => {
  return (
    <>
      {isOpen && <BgOverlay onClick={() => handleClose()} />}
      <DrawerBottomContainer isOpen={isOpen}>
        DRAWER
        <CloseButton onClick={() => handleClose()}>
          <CloseIcon />
        </CloseButton>
      </DrawerBottomContainer>
    </>
  )
}
