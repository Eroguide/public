import { TopLineContainer } from './styles'
import { Breadcrumbs, CustomButton } from '@/components/generic'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { breakpoints, BreakpointsEnum } from '@/src/theme'
import { useRouter } from 'next/router'
export const TopLinePageContent: React.FC = () => {
  const isSmall = useBreakpoint({
    min: breakpoints[BreakpointsEnum.xxs].min,
    max: breakpoints[BreakpointsEnum.sm].max,
  })
  const { back } = useRouter()
  return (
    <TopLineContainer>
      {!isSmall && (
        <CustomButton
          onClick={() => back()}
          iconLeft
          styleType="tertiary"
          sizeType="medium"
        >
          Zpět
        </CustomButton>
      )}
      <Breadcrumbs />
    </TopLineContainer>
  )
}
