import { Desktop, Mobile } from './styles'

type ResponsiveProps = {
  mobile?: boolean
  desktop?: boolean
  displayType?: 'flex' | 'block' | string
}

export const Responsive: React.FC<ResponsiveProps> = ({
  children,
  mobile,
  desktop,
  displayType,
}) => {
  return (
    <>
      {desktop && <Desktop displayType={displayType}>{children}</Desktop>}
      {mobile && <Mobile displayType={displayType}>{children}</Mobile>}
    </>
  )
}
