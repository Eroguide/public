import AnimateHeight, { AnimateHeightProps } from 'react-animate-height'
// export type ShowMoreType = {
//   onCLick?: () => void
// } &

export const ShowMore: React.FC<AnimateHeightProps> = ({
  children,
  ...props
}) => {
  return (
    <AnimateHeight duration={500} height={300} {...props}>
      {children}
    </AnimateHeight>
  )
}
