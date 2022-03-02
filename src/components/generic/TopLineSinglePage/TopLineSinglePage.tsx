import { TopLineContainer, ButtonShadow, IconWrapper } from './styles'
import { Breadcrumbs } from '@/components/generic'
import ArrowLeftChevron from '/public/img/chevron-left.svg'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { breakpoints, BreakpointsEnum } from '@/src/theme'

export const TopLineSinglePage: React.FC = () => {
  const isSmall = useBreakpoint({
    min: breakpoints[BreakpointsEnum.xxs].min,
    max: breakpoints[BreakpointsEnum.sm].max,
  })

  return (
    <TopLineContainer>
      {!isSmall && (
        <ButtonShadow href={'/'}>
          <IconWrapper>
            <ArrowLeftChevron />
          </IconWrapper>
          Go home
        </ButtonShadow>
      )}
      <Breadcrumbs />
    </TopLineContainer>
  )
}
