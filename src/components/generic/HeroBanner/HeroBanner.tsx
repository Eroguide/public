import {
  HeroBannerContainer,
  HeroTitle,
  HeroSubtitle,
  MobileTitleContainer,
} from './styles'
import useBreakpoint from 'use-breakpoint'
import { breakpoints, BreakpointsEnum } from '@/src/theme'
// import { useBreakpoints } from '@/hooks/useBreakpoints'
// import { useBreakpointValue } from '@/hooks/useBreakpointValue'
// const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 }

export const HeroBanner: React.FC = () => {
  const isSmall = useBreakpoint({
    min: breakpoints[BreakpointsEnum.xxs].min,
    max: breakpoints[BreakpointsEnum.sm].max,
  })
  // const da = useBreakpoint(BREAKPOINTS, 'desktop')
  // const isSmall = da.breakpoint === 'mobile'
  // console.log('da', da)
  // const brk = useBreakpoints()
  // console.log('brk', brk)
  // // const isSmall = brk === 'sm'
  // console.log('isSmall', isSmall)
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
