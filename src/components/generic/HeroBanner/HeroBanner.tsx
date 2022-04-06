import {
  HeroBannerContainer,
  HeroTitle,
  HeroSubtitle,
  MobileTitleContainer,
} from './styles'
import { Responsive } from '@/components/generic'

export const HeroBanner: React.FC = () => {
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
