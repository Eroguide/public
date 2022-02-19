export enum BackGroundColorUnion {
  green = 'green',
  white = 'white',
}

export type ChevronButtonProps = {
  handleIsOpen: () => void
  isOpen: boolean
  title: string
  bgColor: keyof typeof BackGroundColorUnion
}
