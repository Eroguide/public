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
} from './styles'
import BlueCheckIcon from '/public/img/check-blue-lg.svg'
import StartIcon from '/public/img/start-lined.svg'
// import HeartLined from '/public/img/heart-lined.svg'
import Heart from '/public/img/heart.svg'
import Cloud from '/public/img/cloud-icon.svg'
import Whazaap from '/public/img/whazaap-icon.svg'
import GreenCheck from '/public/img/green-check.svg'
import { WorkingDays } from '@/components/generic'

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
            <ScheduleBlockWidget>
              <LastCheckDate>
                <IconWrapper>
                  <GreenCheck />
                </IconWrapper>
                Schedule checked Nov 18. 2021
              </LastCheckDate>
              <WorkingDays />
            </ScheduleBlockWidget>
          </Widget>
        </LeftWidgets>
      </SinglePageBody>
    </SinglePageContentContainer>
  )
}
