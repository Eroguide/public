// local libs
import { Button, IconWrapperLeft, IconWrapperRight } from './styles'
// types
import { ButtonStylesEnum, ButtonStylesSizeEnum } from '@/src/theme'
import { ButtonProps } from './types'
import ChevronRight from '/public/img/chevron-right.svg'
import ChevronLeft from '/public/img/chevron-left.svg'
import Link from 'next/link'

export const CustomButton: React.FC<ButtonProps> = ({
  children,
  isLink,
  sizeType = ButtonStylesSizeEnum.default,
  styleType = ButtonStylesEnum.primary,
  iconRight = false,
  iconLeft = false,
  counter,
  href,
  isActive,
  ...buttonProps
}) => {
  if (isLink && href) {
    return (
      <Link href={href} passHref>
        <Button
          as={'a'}
          sizeType={sizeType}
          styleType={styleType}
          iconRight={iconRight || !!counter}
          iconLeft={iconLeft}
          isActive={isActive}
          {...buttonProps}
        >
          <>
            {iconLeft && (
              <IconWrapperLeft>
                <ChevronLeft />
              </IconWrapperLeft>
            )}
            {children}
            {(iconRight || !!counter) && (
              <IconWrapperRight>
                {counter ? <span>{counter}</span> : <ChevronRight />}
              </IconWrapperRight>
            )}
          </>
        </Button>
      </Link>
    )
  }
  return (
    <Button
      as={'button'}
      sizeType={sizeType}
      styleType={styleType}
      iconRight={iconRight || !!counter}
      iconLeft={iconLeft}
      isActive={isActive}
      {...buttonProps}
    >
      {iconLeft && (
        <IconWrapperLeft>
          <ChevronLeft />
        </IconWrapperLeft>
      )}
      {children}
      {(iconRight || !!counter) && (
        <IconWrapperRight>
          {counter ? counter : <ChevronRight />}
        </IconWrapperRight>
      )}
    </Button>
  )
}
