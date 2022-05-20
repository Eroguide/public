import {
  HeroBannerContainer,
  HeroTitle,
  HeroSubtitle,
  MobileTitleContainer,
  HeroContentDesktop,
  HeroImage,
} from './styles'
import { Responsive } from '@/components/generic'
import MainMascotImg from '/public/img/main-banner-image.svg'

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
        <HeroImage>
          <MainMascotImg />
        </HeroImage>
      </HeroBannerContainer>

      <Responsive mobile>
        <MobileTitleContainer>
          <HeroTitle>Ukážu, povím, dokážu</HeroTitle>
          <HeroSubtitle>
            Já Eroguide - fotograf, romantik a milovník něžného pohlaví.
          </HeroSubtitle>
        </MobileTitleContainer>
      </Responsive>
    </>
  )
}
