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
      id: 1,
      icon: <CovidStarsIcon />,
      text: 'treat rooms with a disinfectant',
    },
    {
      id: 2,
      icon: <CovidTermoIcon />,
      text: 'measure temperature of masseuses',
    },
    {
      id: 3,
      icon: <CovidAntisepIcon />,
      text: 'at the entrance antiseptic',
    },
    { id: 4, icon: <CovidMaskIcon />, text: 'mask massage (optional)' },
  ]

  const { headPhoto, staff, services, advantages, gallery, status, isTurnoff } =
    getSalon

  const isOn = !isTurnoff
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
          {isOn ? (
            <>
              <SinglePageContentBlock title="Covid protection">
                <InfoCard
                  borderRad={32}
                  strokeColor="gray"
                  padding={'32px 40px'}
                >
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
                      Any programs and additions exclude sex. In the presence of
                      the services of the show "Mistress", Role-playing games ",
                      Foot fetish, Lesbian show, they are held in the form of a
                      staged show.
                    </Description>
                  </InfoCard>
                  <InfoCardCollapse
                    borderRad={16}
                    margin={'0 0 32px 0'}
                    strokeColor={'green'}
                  />
                  {services.length ? (
                    <>
                      {services.map((x) => (
                        <MassageProgramCard key={x.id} {...x} />
                      ))}
                      {services.length > 5 ? (
                        <ButtonRow>
                          <CustomButton
                            styleType="tertiary"
                            counter={services.length - 5}
                          >
                            all additions
                          </CustomButton>
                        </ButtonRow>
                      ) : null}
                    </>
                  ) : null}
                </SinglePageContentBlock>
                {getSalon.extraServices.length ? (
                  <SinglePageContentBlock title="Program additions">
                    {getSalon.extraServices.map((x) => (
                      <AdditionsCard key={x.id} {...x} />
                    ))}

                    {getSalon.extraServices.length > 5 ? (
                      <ButtonRow>
                        <CustomButton
                          styleType="tertiary"
                          counter={getSalon.extraServices.length}
                        >
                          all programs
                        </CustomButton>
                      </ButtonRow>
                    ) : null}
                  </SinglePageContentBlock>
                ) : null}
              </DetailsSection>
            </>
          ) : null}
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
        {listSalons.length
          ? listSalons?.map((item) => (
              <SwiperSlide key={item.id}>
                <SalonCard {...item} inSwipe />
              </SwiperSlide>
            ))
          : null}
      </ContentCardRow>
    </SinglePageContentContainer>
  )
}
