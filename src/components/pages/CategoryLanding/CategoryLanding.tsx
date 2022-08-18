import { CategoryLandingContainer } from './styles'
import { GalleryLanding, HeroFilters } from '@/components/generic'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { breakpoints, BreakpointsEnum } from '@/src/theme'
import { AllCounters_getCounters } from '@/graphql/types/GetAllCounters'

export const CategoryLanding: React.FC<{
  counters: AllCounters_getCounters
  type: string
}> = ({ counters, type }) => {
  const isSmall = useBreakpoint({
    min: breakpoints[BreakpointsEnum.xxs].min,
    max: breakpoints[BreakpointsEnum.sm].max,
  })
  return (
    <>
      <CategoryLandingContainer>
        <GalleryLanding
          title={type}
          text="Sekce Čerstvé obsahuje profily označené jako NOVÉ. Jedná se o slečny, které nedávno (před méně než 30 dny) zveřejnily nebo nedávno změnily svoje působiště."
        />
      </CategoryLandingContainer>
      {!isSmall && <HeroFilters counters={counters} />}
    </>
  )
}
