import {
  HeroBannerContainer,
  HeroTitle,
  HeroSubtitle,
  MobileTitleContainer,
} from './styles'
import { breakpoints, BreakpointsEnum } from '@/src/theme'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { Responsive } from '@/components/generic'

export const HeroBanner: React.FC = () => {
  const isSmall = useBreakpoint({
    min: breakpoints[BreakpointsEnum.xxs].min,
    max: breakpoints[BreakpointsEnum.sm].max,
  })

  return (
    <>
      <HeroBannerContainer>
        <Responsive desktop>
          <HeroTitle>Show, tell, prove</HeroTitle>
          <HeroSubtitle>
            Já Eroguide - fotograf, romantik a milovník něžného pohlaví.
          </HeroSubtitle>
        </Responsive>
      </HeroBannerContainer>

      <Responsive mobile>
        <MobileTitleContainer>
          <HeroTitle>Show, tell, prove</HeroTitle>
          <HeroSubtitle>
            Já Eroguide - fotograf, romantik a milovník něžného pohlaví.
          </HeroSubtitle>
        </MobileTitleContainer>
      </Responsive>
    </>
  )
}
