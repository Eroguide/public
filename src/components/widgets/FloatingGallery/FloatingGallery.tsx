import {
  FloatingGalleryContainer,
  CardInner,
  Title,
  InfoLine,
  TopPanel,
  LocationText,
  LocationWrapper,
  IconWrapper,
  ContentGallery,
  ButtonRow,
  Content,
  Left,
} from './styles'
import LocationIcon from '/public/img/location-pin-icon.svg'
import WazappIcon from '/public/img/whazaap-icon.svg'
import PathNavIcon from '/public/img/nav-path-icon.svg'
import { CloseButton, CustomButton } from '@/components/generic'
import { LadiesGalleryWidget } from '@/components/widgets/LadiesGalleryWidget'
import Scrollbars from 'react-custom-scrollbars'

export const FloatingGallery: React.FC<{ handleClose: () => void }> = ({
  handleClose,
}) => {
  return (
    <FloatingGalleryContainer>
      <CardInner>
        <Content>
          <TopPanel>
            <CloseButton handleClose={handleClose} distance={32} />
            <Title> Chocolate ladies</Title>
            <InfoLine>
              <Left>
                <LocationWrapper>
                  <LocationIcon />
                  <LocationText>Prague 13</LocationText>
                </LocationWrapper>
                <IconWrapper>
                  <PathNavIcon />
                </IconWrapper>
                <IconWrapper>
                  <WazappIcon />
                </IconWrapper>
              </Left>

              <CustomButton styleType="primary" sizeType="medium">
                Contact
              </CustomButton>
            </InfoLine>
          </TopPanel>
          <ContentGallery>
            <Scrollbars
              autoHeight
              autoHeightMin={300}
              renderThumbHorizontal={() => <div />}
              renderThumbVertical={() => <div />}
              universal
            >
              <LadiesGalleryWidget girls={[]} />
            </Scrollbars>
          </ContentGallery>
        </Content>
        <ButtonRow>
          <CustomButton styleType="tertiary">Contact</CustomButton>
        </ButtonRow>
      </CardInner>
    </FloatingGalleryContainer>
  )
}
