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
  Photo,
  PhotoWrapper,
  Circle,
  StatusTag,
  Tag,
  GirlsNameWrapper,
  Name,
} from './styles'
import LocationIcon from '/public/img/location-pin-icon.svg'
import WazappIcon from '/public/img/whazaap-icon.svg'
import PathNavIcon from '/public/img/nav-path-icon.svg'
import { CloseButton, CustomButton } from '@/components/generic'
import { LadiesGalleryWidget } from '@/components/widgets/LadiesGalleryWidget'
import Scrollbars from 'react-custom-scrollbars'
import { ListLocation_listLocation } from '@/graphql/types/ListLocations'
import BlueCheckIcon from '/public/img/check-blue-lg.svg'
import { ApperianceWidget } from '@/components/widgets/ApperianceWidget'
import { useRouter } from 'next/router'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useRef } from 'react'

export const FloatingGallery: React.FC<{
  handleClose: () => void
  data: ListLocation_listLocation
}> = ({ handleClose, data }) => {
  const { salon, employee } = data
  const province = employee?.province ?? salon?.province
  const title = employee?.name ?? salon?.title
  const staff = salon?.staff
  const { push } = useRouter()

  const handleContactRedirectLink = (): void => {
    if (salon) {
      push(`/salons/${salon?.id}`)
    }
    if (employee) {
      push(`/employee/${employee?.id}`)
    }
  }
  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref, handleClose)

  return (
    <FloatingGalleryContainer ref={ref}>
      <CardInner>
        <Content>
          <TopPanel>
            <CloseButton handleClose={handleClose} distance={32} />
            {staff && <Title>{title}</Title>}
            {employee && (
              <PhotoWrapper>
                <Photo image={employee.headPhoto}>
                  <Tag>{employee.topDate && 'new'}</Tag>
                  <StatusTag>
                    <Circle />
                  </StatusTag>
                </Photo>
                <GirlsNameWrapper>
                  <Name>{title}</Name>
                  <BlueCheckIcon />
                </GirlsNameWrapper>
              </PhotoWrapper>
            )}
            <InfoLine>
              <Left>
                <LocationWrapper>
                  <LocationIcon />
                  <LocationText>{province}</LocationText>
                </LocationWrapper>
                <IconWrapper>
                  <PathNavIcon />
                </IconWrapper>
                <IconWrapper>
                  <WazappIcon />
                </IconWrapper>
              </Left>
              <CustomButton
                onClick={handleContactRedirectLink}
                styleType="primary"
                sizeType="medium"
              >
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
              {staff && <LadiesGalleryWidget girls={staff} />}
              {employee && (
                <ApperianceWidget employee={employee} size={'small'} />
              )}
            </Scrollbars>
          </ContentGallery>
        </Content>
        <ButtonRow>
          <CustomButton
            onClick={handleContactRedirectLink}
            styleType="tertiary"
          >
            Contact
          </CustomButton>
        </ButtonRow>
      </CardInner>
    </FloatingGalleryContainer>
  )
}
