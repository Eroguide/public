import { ButtonBasic, ButtonLink } from './styles'
import Link from 'next/link'
// import Icon from '/public/img/heart-lined.svg'

export enum ButtonStyleTypeEnum {
  primary = 'primary',
  secondary = 'secondary',
  ghost = 'ghost',
  neutral = 'neutral',
}

export type ButtonProps = {
  isLink: boolean
  buttonType: 'submit' | 'button'
  styleType: ButtonStyleTypeEnum
  title: string
  href: string
}

export const ButtonStyled: React.FC<ButtonProps> = ({
  isLink,
  // buttonType,
  // styleType,
  title,
  href,
}) => {
  return (
    <>
      {isLink ? (
        <Link href={href} passHref>
          <ButtonLink>{title}</ButtonLink>
        </Link>
      ) : (
        <ButtonBasic>{title}</ButtonBasic>
      )}
    </>
  )
}
