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
import { SalonInfoSinglePageWidget } from '@/components/widgets/SalonInfoSinglePageWidget'
import { ServiceFeaturesSalonWidget } from '@/components/widgets/ServiceFeaturesSalonWidget'
import GenderIcon from '/public/img/gender-icon.svg'
import CovidStarsIcon from '/public/img/covid-icon-stars.svg'
import CovidTermoIcon from '/public/img/covid-icon-termo.svg'
import CovidAntisepIcon from '/public/img/covid-icon-antisep.svg'
import CovidMaskIcon from '/public/img/covid-icon-mask.svg'
import { SwiperSlide } from 'swiper/react'
import { ScheduleFilters } from '@/components/generic/ScheduleFilters'
import { GetSalon } from '@/graphql/types/GetSalon'
import { ListSalons_listSalons_edges_node } from '@/graphql/types/ListSalons'

export const SalonSinglePageContent: React.FC<
  GetSalon & {
    listSalons: Array<ListSalons_listSalons_edges_node>
  }
> = ({ getSalon, listSalons }) => {
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
  const { headPhoto, staff, services, advantages, gallery, status } = getSalon
  console.log('getSalon', getSalon)
  return (
    <SinglePageContentContainer>
      <Banner image={headPhoto} />
      <SinglePageBody>
        <LeftWidgets>
          <Widget>
            <SalonInfoSinglePageWidget getSalon={getSalon} />
          </Widget>
          <ServiceFeaturesSalonWidget advantages={advantages} />
        </LeftWidgets>

        <BodyContent>
          {gallery.length > 0 ? (
            <SinglePageContentBlock title="Photo">
              <ProductSlider status={!!status} sliderGallery={gallery} />
            </SinglePageContentBlock>
          ) : null}

          <SinglePageContentBlock title="Covid protection">
            <InfoCard borderRad={32} strokeColor="gray" padding={'32px 40px'}>
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
            <SinglePageContentBlock withIcon title="Schedule">
              <ScheduleFilters />
              {staff.map((x) => (
                <SalonScheduleCard key={x.id} {...x} />
              ))}
            </SinglePageContentBlock>

            <SinglePageContentBlock title="Massage programs">
              <InfoCard
                borderRad={24}
                margin={'0 0 16px 0'}
                strokeColor="yellow"
              >
                <IconWrapper>
                  <GenderIcon />
                </IconWrapper>
                <Description>
                  Any programs and additions exclude sex. In the presence of the
                  services of the show "Mistress", Role-playing games ", Foot
                  fetish, Lesbian show, they are held in the form of a staged
                  show.
                </Description>
              </InfoCard>
              <InfoCardCollapse
                borderRad={16}
                margin={'0 0 32px 0'}
                strokeColor={'green'}
              />

              {services.map((x) => (
                <MassageProgramCard key={x.id} {...x} />
              ))}

              <ButtonRow>
                <CustomButton styleType="tertiary" counter={32}>
                  all additions
                </CustomButton>
              </ButtonRow>
            </SinglePageContentBlock>

            <SinglePageContentBlock title="Program additions">
              {additions.map((x) => (
                <AdditionsCard key={x.title} {...x} />
              ))}
              <ButtonRow>
                <CustomButton styleType="tertiary" counter={43}>
                  all programs
                </CustomButton>
              </ButtonRow>
            </SinglePageContentBlock>
          </DetailsSection>
        </BodyContent>
      </SinglePageBody>
      <ContentCardRow
        title="Recent salons"
        counter={535}
        spaceBetween={8}
        counterTitle="Recent salons"
        href="/salons"
        withControls
      >
        {listSalons?.map((item) => (
          <SwiperSlide key={item.id}>
            <SalonCard {...item} inSwipe />
          </SwiperSlide>
        ))}
      </ContentCardRow>
    </SinglePageContentContainer>
  )
}
