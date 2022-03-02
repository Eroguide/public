import {
  HeroBannerContainer,
  HeroTitle,
  HeroSubtitle,
  MobileTitleContainer,
} from './styles'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { breakpoints, BreakpointsEnum } from '@/src/theme'

export const HeroBanner: React.FC = () => {
  const isSmall = useBreakpoint({
    min: breakpoints[BreakpointsEnum.xxs].min,
    max: breakpoints[BreakpointsEnum.sm].max,
  })

  return (
    <>
      <HeroBannerContainer>
        {!isSmall && (
          <>
            <HeroTitle>Show, tell, prove</HeroTitle>
            <HeroSubtitle>
              Já Eroguide - fotograf, romantik a milovník něžného pohlaví.
            </HeroSubtitle>
          </>
        )}
      </HeroBannerContainer>
      {isSmall && (
        <MobileTitleContainer>
          <HeroTitle>Show, tell, prove</HeroTitle>
          <HeroSubtitle>
            Já Eroguide - fotograf, romantik a milovník něžného pohlaví.
          </HeroSubtitle>
        </MobileTitleContainer>
      )}
    </>
  )
}
