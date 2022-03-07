// local libs
import { Button, IconWrapperChevron } from './styles'
// types
import { ButtonStylesEnum, ButtonStylesSizeEnum } from '@/src/theme'
import { ButtonProps } from './types'
import ChevronRight from '/public/img/chevron-right.svg'
import ChevronLeft from '/public/img/chevron-left.svg'

export const CustomButton: React.FC<ButtonProps> = ({
  children,
  isLink,
  sizeType = ButtonStylesSizeEnum.default,
  styleType = ButtonStylesEnum.primary,
  iconRight = false,
  iconLeft = false,
  counter,
  ...buttonProps
}) => {
  return (
    <Button
      as={(isLink && 'a') || 'button'}
      sizeType={sizeType}
      styleType={styleType}
      iconRight={iconRight || !!counter}
      iconLeft={iconLeft}
      {...buttonProps}
    >
      {iconLeft && (
        <IconWrapperChevron>
          <ChevronLeft />
        </IconWrapperChevron>
      )}
      {children}
      {(iconRight || !!counter) && (
        <IconWrapperChevron>
          {counter ? <p>{counter}</p> : <ChevronRight />}
        </IconWrapperChevron>
      )}
    </Button>
  )
}
