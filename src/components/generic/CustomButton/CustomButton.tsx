// local libs
import { Button, ButtonLink, IconWrapperChevron } from './styles'
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
  ...buttonProps
}) => {
  if (isLink && href) {
    return (
      <Link href={href} passHref>
        <ButtonLink
          sizeType={sizeType}
          styleType={styleType}
          iconRight={iconRight || !!counter}
          iconLeft={iconLeft}
        >
          <>
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
          </>
        </ButtonLink>
      </Link>
    )
  }
  return (
    <Button
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
