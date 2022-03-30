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
  // PriceInfoNote,
  ButtonRow,
} from './styles'

import {
  AdditionsCard,
  ContentCardRow,
  CustomButton,
  InfoCard,
  InfoCardCollapse,
  MassageProgramCard,
  ProductSlider,
  SalonCard,
  SalonScheduleCard,
  SinglePageContentBlock,
} from '@/components/generic'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { breakpoints, BreakpointsEnum } from '@/src/theme'
import { SalonInfoSinglePageWidget } from '@/components/widgets/SalonInfoSinglePageWidget'
import { ServiceFeaturesSalonWidget } from '@/components/widgets/ServiceFeaturesSalonWidget'
import GenderIcon from '/public/img/gender-icon.svg'
// import CircleCheckIcon from '/public/img/green-circle-check.svg'
import CovidStarsIcon from '/public/img/covid-icon-stars.svg'
import CovidTermoIcon from '/public/img/covid-icon-termo.svg'
import CovidAntisepIcon from '/public/img/covid-icon-antisep.svg'
import CovidMaskIcon from '/public/img/covid-icon-mask.svg'
import { SwiperSlide } from 'swiper/react'
// import { SectionBlock } from '@/components/layouts/SectionBlock'
const fixtures = [
  { id: '222dsadas', slug: 'one-project-time', best: 1 },
  { id: 'asddsad222sadasd', slug: 'two-project-time', best: 0 },
  { id: 'asdsad3242asd', slug: 'three-project-time', best: 0 },
  { id: 'asdsdadasfffsadasd', slug: 'four-project-time', best: 0 },
  { id: 'asdxfsadasd', slug: 'four-project-time', best: 0 },
  { id: 'asdsdadvadasd', slug: 'four-project-time', best: 0 },
  { id: 'xfffsadasd', slug: 'four-project-time', best: 0, tag: 'New' },
  { id: 'xfffsadssasd', slug: 'four-project-time', best: 0, tag: 'New' },
]
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
          <DetailsSection>
            <SinglePageContentBlock title="Schedule">
              <SalonSinglePageContent />
              <SalonScheduleCard />
              <SalonScheduleCard />
              <SalonScheduleCard />
              <SalonScheduleCard />
            </SinglePageContentBlock>

            <SinglePageContentBlock title="Massage programs">
              <InfoCard margin={'0 0 16px 0'} strokeColor="yellow">
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
              {/*<InfoCard strokeColor="green">*/}
              {/*  <PriceInfoNote>*/}
              {/*    <CircleCheckIcon />*/}
              {/*    Prices confirmed*/}
              {/*  </PriceInfoNote>*/}
              {/*</InfoCard>*/}
              <InfoCardCollapse margin={'0 0 32px 0'} strokeColor={'green'} />
              <MassageProgramCard />
              <MassageProgramCard />
              <MassageProgramCard />
              <MassageProgramCard />
              <MassageProgramCard />
              <MassageProgramCard />

              <ButtonRow>
                <CustomButton
                  styleType="tertiary"
                  sizeType="small"
                  counter={32}
                >
                  all programs
                </CustomButton>
              </ButtonRow>
            </SinglePageContentBlock>

            <SinglePageContentBlock title="Program additions">
              {additions.map((x) => (
                <AdditionsCard key={x.title} {...x} />
              ))}
              <ButtonRow>
                <CustomButton
                  styleType="tertiary"
                  sizeType="small"
                  counter={32}
                >
                  all programs
                </CustomButton>
              </ButtonRow>
            </SinglePageContentBlock>
          </DetailsSection>
        </BodyContent>
        <ContentCardRow
          title="Recent salons"
          counter={535}
          spaceBetween={8}
          counterTitle="Recent salons"
          href="/salons"
          withControls
        >
          {fixtures.map((item) => (
            <SwiperSlide key={item.id}>
              <SalonCard {...item} inSwipe />
            </SwiperSlide>
          ))}
        </ContentCardRow>
      </SinglePageBody>
    </SinglePageContentContainer>
  )
}
