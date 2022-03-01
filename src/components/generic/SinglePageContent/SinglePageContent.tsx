import {
  SinglePageContentContainer,
  Banner,
  SinglePageBody,
  LeftWidgets,
  Widget,
  AvatarImage,
  Name,
  NameWrapper,
  ReviewsCounter,
  ParametersList,
  Parameter,
  ParameterTitle,
  ParameterCounter,
  FirstSection,
  Divider,
  ButtonsRow,
  IconWrapper,
  ButtonLined,
  MemberSince,
  ScheduleBlockWidget,
  LastCheckDate,
  WorkingDaysWrapper,
  PriceBlock,
  Prefix,
  Price,
  Suffix,
  WidgetInner,
  SalonImage,
  Row,
  Left,
  Right,
  RatingSalon,
  TitleSalon,
  GlobusText,
  LocationText,
  IconWrapperChevron,
  BodyContent,
  DetailsSection,
} from './styles'
import Link from 'next/link'
import { ButtonShadowLink } from '@/components/generic/ButtonStyled/styles'
import BlueCheckIcon from '/public/img/check-blue-lg.svg'
import StartIcon from '/public/img/start-lined.svg'
// import HeartLined from '/public/img/heart-lined.svg'
import Heart from '/public/img/heart.svg'
import Cloud from '/public/img/cloud-icon.svg'
import Whazaap from '/public/img/whazaap-icon.svg'
import GreenCheck from '/public/img/green-check.svg'
import AttentionIcon from '/public/img/attention-icon.svg'
import GlobusIcon from '/public/img/globus-icon.svg'
import LocationIcon from '/public/img/location-pin-icon.svg'
import ChevronRight from '/public/img/chevron-right.svg'
import {
  ProductSlider,
  SinglePageContentBlock,
  WorkingDays,
} from '@/components/generic'
import { SalonWidget } from '@/components/widgets/SalonWidget'
import { ApperianceWidget } from '@/components/widgets/ApperianceWidget'
import { ExperianceWidget } from '@/components/widgets/ExperianceWidget'
import { VideoPlayerWidget } from '@/components/widgets/VideoPlayerWidget'
import { AudioPlayerWidget } from '@/components/widgets/AudioPlayerWidget'
import { LadiesGalleryWidget } from '@/components/widgets/LadiesGalleryWidget'

export const SinglePageContent: React.FC = () => {
  return (
    <SinglePageContentContainer>
      <Banner />
      <SinglePageBody>
        <LeftWidgets>
          <Widget>
            <FirstSection>
              <AvatarImage src="/img/bg.jpg" alt="" />
              <NameWrapper>
                <Name>Victoria</Name>
                <BlueCheckIcon />
              </NameWrapper>

              <ReviewsCounter>
                <StartIcon />
                256 reviews
              </ReviewsCounter>

              <ParametersList>
                <Parameter>
                  <ParameterTitle>interview</ParameterTitle>
                  <ParameterCounter>1</ParameterCounter>
                </Parameter>
                <Parameter>
                  <ParameterTitle>photo</ParameterTitle>
                  <ParameterCounter>65</ParameterCounter>
                </Parameter>
                <Parameter>
                  <ParameterTitle>video</ParameterTitle>
                  <ParameterCounter>4</ParameterCounter>
                </Parameter>
                <Parameter>
                  <ParameterTitle>audio</ParameterTitle>
                  <ParameterCounter>8</ParameterCounter>
                </Parameter>
              </ParametersList>
            </FirstSection>
            <Divider />
            <ButtonsRow>
              <IconWrapper>
                {/*<HeartLined />*/}
                <Heart />
              </IconWrapper>
              <IconWrapper>
                <Cloud />
              </IconWrapper>
              <IconWrapper>
                <Whazaap />
              </IconWrapper>
              <ButtonLined> Contact</ButtonLined>
            </ButtonsRow>
            <Divider />
            <MemberSince>Member 655054 since Mar 15. 2021</MemberSince>
          </Widget>
          <Widget>
            <WidgetInner>
              <ScheduleBlockWidget>
                <LastCheckDate>
                  <IconWrapper>
                    <GreenCheck />
                  </IconWrapper>
                  Schedule checked Nov 18. 2021
                </LastCheckDate>
              </ScheduleBlockWidget>
              <WorkingDaysWrapper>
                <WorkingDays withDateTop />
              </WorkingDaysWrapper>
              <Divider />
              <PriceBlock>
                <Prefix>from</Prefix>
                <Price>2500</Price>
                <Suffix>Kč/h</Suffix>
              </PriceBlock>
              <ButtonShadowLink>Salons price</ButtonShadowLink>
            </WidgetInner>
          </Widget>
          <SalonWidget>
            <SalonImage src="/img/bg.jpg" />
            <Row>
              <Left>
                <TitleSalon>Chocolate ladies club</TitleSalon>
              </Left>
              <Right>
                <RatingSalon>
                  5.0 <AttentionIcon />
                </RatingSalon>
              </Right>
            </Row>
            <Row>
              <Left>
                <GlobusIcon />
                <GlobusText> chocolate ladies club</GlobusText>
              </Left>
            </Row>
            <Row>
              <Left>
                <LocationIcon />
                <LocationText>Prague 15</LocationText>
              </Left>
              <Right>
                <Link href="/map" passHref>
                  <ButtonShadowLink>
                    Show map
                    <IconWrapperChevron>
                      <ChevronRight />
                    </IconWrapperChevron>
                  </ButtonShadowLink>
                </Link>
              </Right>
            </Row>
          </SalonWidget>
        </LeftWidgets>

        <BodyContent>
          <SinglePageContentBlock title="Photo">
            <ProductSlider />
          </SinglePageContentBlock>
          <DetailsSection>
            <SinglePageContentBlock title="Appearance">
              <ApperianceWidget />
            </SinglePageContentBlock>
            <SinglePageContentBlock title="Preferences and experience">
              <ExperianceWidget />
            </SinglePageContentBlock>
            <SinglePageContentBlock title="Interview for Eroguide">
              <h3 style={{ marginBottom: '8px' }}>Lorem ipsum dolor.</h3>
              <p>
                Mohu se u Vás před masáží nebo po masáži osprchovat? Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Imperdiet aliquet
                risus, libero egestas enim at. Quis maecenas at sit massa
                suspendisse. Mohu se u Vás před masáží nebo po masáži
                osprchovat? Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Imperdiet aliquet risus, libero egestas enim at. Quis
                maecenas at sit massa suspendisse.
              </p>
            </SinglePageContentBlock>
            <SinglePageContentBlock title="Video">
              <VideoPlayerWidget />
            </SinglePageContentBlock>
            <SinglePageContentBlock title="Audio">
              <AudioPlayerWidget />
            </SinglePageContentBlock>
            <SinglePageContentBlock title="Salon ladies">
              <LadiesGalleryWidget />
            </SinglePageContentBlock>
          </DetailsSection>
        </BodyContent>
      </SinglePageBody>
    </SinglePageContentContainer>
  )
}
