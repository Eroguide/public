import { ButtonStylesEnum, ButtonStylesSizeEnum } from '@/src/theme'

export type ButtonProps = {
  disabled?: boolean
  isLink?: boolean
  iconRight?: boolean
  iconLeft?: boolean
  href?: string
  counter?: number
  type?: 'submit' | 'button'
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
} & Partial<StyledComponentProps>

export type StyledComponentProps = {
  styleType: keyof typeof ButtonStylesEnum
  sizeType: keyof typeof ButtonStylesSizeEnum
  width?: string
  margin?: string
  padding?: string
  iconRight?: boolean
  iconLeft?: boolean
}
