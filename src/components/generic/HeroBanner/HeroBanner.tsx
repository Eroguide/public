import {
  HeroBannerContainer,
  HeroTitle,
  HeroSubtitle,
  MobileTitleContainer,
  HeroContentDesktop,
  HeroImage,
} from './styles'
import { Responsive } from '@/components/generic'

export const HeroBanner: React.FC = () => {
  return (
    <>
      <HeroBannerContainer>
        <HeroContentDesktop>
          <HeroTitle>Ukážu, povím, dokážu</HeroTitle>
          <HeroSubtitle>
            Já Eroguide - fotograf, romantik a milovník něžného pohlaví.
          </HeroSubtitle>
        </HeroContentDesktop>
        <HeroImage />
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
