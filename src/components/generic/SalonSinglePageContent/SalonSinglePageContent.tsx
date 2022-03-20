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
  AdditionsCard,
  InfoCard,
  InfoCardCollapse,
  MassageProgramCard,
  ProductSlider,
  SalonScheduleCard,
  SinglePageContentBlock,
} from '@/components/generic'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { breakpoints, BreakpointsEnum } from '@/src/theme'
import { SalonInfoSinglePageWidget } from '@/components/widgets/SalonInfoSinglePageWidget'
import { ServiceFeaturesSalonWidget } from '@/components/widgets/ServiceFeaturesSalonWidget'
import GenderIcon from '/public/img/gender-icon.svg'
import CircleCheckIcon from '/public/img/green-circle-check.svg'
import CovidStarsIcon from '/public/img/covid-icon-stars.svg'
import CovidTermoIcon from '/public/img/covid-icon-termo.svg'
import CovidAntisepIcon from '/public/img/covid-icon-antisep.svg'
import CovidMaskIcon from '/public/img/covid-icon-mask.svg'
import { ScheduleFilters } from '@/components/generic/ScheduleFilters'

const covidInfoList = [
  {
    id: 213213,
    icon: <CovidStarsIcon />,
    text: 'treat rooms with a disinfectant',
  },
  {
    id: 2123213,
    icon: <CovidTermoIcon />,
    text: 'measure temperature of masseuses',
  },
  {
    id: 2134213,
    icon: <CovidAntisepIcon />,
    text: 'at the entrance antiseptic',
  },
  { id: 215213, icon: <CovidMaskIcon />, text: 'mask massage (optional)' },
]

const additions = [
  {
    title:
      '3rd level of frankness of touch. Weasels without "Uncle Ku" (you can touch the masseuse everywhere).',
    price: 500,
  },
  { title: 'Imitations (each masseuse has its own)', price: 900 },
  {
    title:
      '3rd level of frankness of touch. Weasels without "Uncle Ku" (you can touch the masseuse everywhere). 3rd level of frankness of touch.',
    price: 1200,
  },
  { title: 'Imitations (each masseuse has its own)', price: 1500 },
]

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
            <InfoCard strokeColor="gray" padding={'32px 40px'}>
              <CovidProtectionCardContent>
                {covidInfoList.map((covid) => (
                  <InfoCardItem key={covid.id}>
                    <IconWrapper>{covid.icon}</IconWrapper>
                    <span>{covid.text}</span>
                  </InfoCardItem>
                ))}
              </CovidProtectionCardContent>
            </InfoCard>
          </SinglePageContentBlock>

          <SinglePageContentBlock title="Schedule">
            <ScheduleFilters />
            <SalonScheduleCard />
            <SalonScheduleCard />
            <SalonScheduleCard />
            <SalonScheduleCard />
          </SinglePageContentBlock>

          <DetailsSection>
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
              <InfoCardCollapse />
              <MassageProgramCard />
            </SinglePageContentBlock>

            <SinglePageContentBlock title="Program additions">
              {additions.map((x) => (
                <AdditionsCard key={x.title} {...x} />
              ))}
            </SinglePageContentBlock>
          </DetailsSection>
        </BodyContent>
      </SinglePageBody>
    </SinglePageContentContainer>
  )
}
