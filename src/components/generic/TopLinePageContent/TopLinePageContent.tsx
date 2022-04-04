import { TopLineContainer } from './styles'
import { Breadcrumbs, CustomButton } from '@/components/generic'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { breakpoints, BreakpointsEnum } from '@/src/theme'
import Link from 'next/link'
export const TopLinePageContent: React.FC = () => {
  const isSmall = useBreakpoint({
    min: breakpoints[BreakpointsEnum.xxs].min,
    max: breakpoints[BreakpointsEnum.sm].max,
  })

  return (
    <TopLineContainer>
      {!isSmall && (
        <Link href={'/'} passHref shallow>
          <CustomButton iconLeft styleType="tertiary" sizeType="medium">
            Zpět
          </CustomButton>
        </Link>
      )}
      <Breadcrumbs />
    </TopLineContainer>
  )
}
