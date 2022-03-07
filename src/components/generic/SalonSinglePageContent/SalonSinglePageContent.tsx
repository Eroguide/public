import {
  SinglePageContentContainer,
  Banner,
  SinglePageBody,
  LeftWidgets,
  Widget,
  BodyContent,
  DetailsSection,
  Description,
  IconWrapper,
  InfoCardItem,
  CovidProtectionCardContent,
  PriceInfoNote,
} from './styles'

import {
  InfoCard,
  ProductSlider,
  SinglePageContentBlock,
} from '@/components/generic'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { breakpoints, BreakpointsEnum } from '@/src/theme'
import { SalonInfoSinglePageWidget } from '@/components/widgets/SalonInfoSinglePageWidget'
import { ServiceFeaturesSalonWidget } from '@/components/widgets/ServiceFeaturesSalonWidget'
import GenderIcon from '/public/img/gender-icon.svg'
import Heart from '/public/img/heart.svg'
import CircleCheckIcon from '/public/img/green-circle-check.svg'

export const SalonSinglePageContent: React.FC = () => {
  const isSmall = useBreakpoint({
    min: breakpoints[BreakpointsEnum.xxs].min,
    max: breakpoints[BreakpointsEnum.sm].max,
  })
  return (
    <SinglePageContentContainer>
      {!isSmall && <Banner />}
      <SinglePageBody>
        <LeftWidgets>
          <Widget>
            <SalonInfoSinglePageWidget />
          </Widget>
          <ServiceFeaturesSalonWidget />
        </LeftWidgets>

        <BodyContent>
          <SinglePageContentBlock title="Photo">
            <ProductSlider />
          </SinglePageContentBlock>

          <SinglePageContentBlock title="Covid protection">
            <InfoCard strokeColor="gray" padding={'32px 64px'}>
              <CovidProtectionCardContent>
                <InfoCardItem>
                  <IconWrapper>
                    <Heart />
                  </IconWrapper>
                  <span>treat rooms with a disinfectant</span>
                </InfoCardItem>
                <InfoCardItem>
                  <IconWrapper>
                    <Heart />
                  </IconWrapper>
                  <span>measure temperature of masseuses</span>
                </InfoCardItem>
                <InfoCardItem>
                  <IconWrapper>
                    <Heart />
                  </IconWrapper>
                  <span>at the entrance antiseptic</span>
                </InfoCardItem>
                <InfoCardItem>
                  <IconWrapper>
                    <Heart />
                  </IconWrapper>
                  <span>mask massage (optional)</span>
                </InfoCardItem>
              </CovidProtectionCardContent>
            </InfoCard>
          </SinglePageContentBlock>

          <DetailsSection>
            <SinglePageContentBlock title="Schedule">
              Schedule
            </SinglePageContentBlock>
            <SinglePageContentBlock title="Massage programs">
              <InfoCard strokeColor="yellow">
                <IconWrapper>
                  <GenderIcon />
                </IconWrapper>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  ipsam modi quasi qui quo? Assumenda consectetur culpa dolorum
                  ducimus, in, ipsa laboriosam magni maiores necessitatibus
                  quasi quibusdam vel veritatis vero.
                </Description>
              </InfoCard>
              <InfoCard strokeColor="green">
                <PriceInfoNote>
                  <CircleCheckIcon />
                  Prices confirmed
                </PriceInfoNote>
              </InfoCard>
            </SinglePageContentBlock>

            <SinglePageContentBlock title="Program additions">
              Program additions
            </SinglePageContentBlock>
          </DetailsSection>
        </BodyContent>
      </SinglePageBody>
    </SinglePageContentContainer>
  )
}
