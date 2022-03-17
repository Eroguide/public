import { useState } from 'react'
import Link from 'next/link'
import { useStoreon } from '@/store/index'
import { ChevronButton } from '@/components/generic/ChevronButton'
import {
  CardMainContainer,
  CardInner,
  CardImageWrapper,
  ImageProduct,
  CardContent,
  TitleLink,
  Description,
  Price,
  ScheduleButton,
  BeforePrice,
  PriceValue,
  PriceSuffix,
  Row,
  Left,
  Right,
  FavoriteButton,
  TopImageTag,
  AdditionalInformation,
  AdditionalInformationContent,
  ImageOverlay,
  LeftBlock,
  RightBlock,
  ContentColumn,
  InfoItem,
  WorkingDaysWrapper,
  PhotoCounter,
  VideoIconWrapper,
} from './styles'
import HeartIcon from 'public/img/heart.svg'
import HeartLinedIcon from 'public/img/heart-lined.svg'
import PhotoIcon from 'public/img/photo-icon.svg'
import VideoIcon from 'public/img/video-icon.svg'
import { CardProps } from './types'
import { FavoritesActions } from '@/store/favoritsModule'
import { WorkingDays } from '@/components/generic'

export const Card: React.FC<CardProps> = ({
  id,
  slug,
  tagTitle,
  margin,
  inSwipe,
}) => {
  const {
    dispatch,
    favorites: { items },
  } = useStoreon('favorites')
  const isActive = items.some((element) => element.id === id)
  const [isOpenInfo, setIsOpenInfo] = useState<boolean>(false)
  const [isOpenSchedule, setIsOpenSchedule] = useState<boolean>(false)
  const handleIsOpen = () => {
    setIsOpenInfo(!isOpenInfo)
  }
  const handleIsOpenSchedule = () => {
    setIsOpenSchedule(!isOpenSchedule)
  }
  return (
    <>
      <CardMainContainer margin={margin} inSwipe={inSwipe}>
        <CardInner>
          <CardImageWrapper>
            <ImageOverlay />
            <Link href={`/gallery/${id}`}>
              <ImageProduct>
                {tagTitle && <TopImageTag>{tagTitle}</TopImageTag>}
              </ImageProduct>
            </Link>
            <AdditionalInformation>
              <ChevronButton
                title={'appearance'}
                handleIsOpen={handleIsOpen}
                isOpen={isOpenInfo}
                bgColor={'white'}
              />
            </AdditionalInformation>

            {isOpenInfo && (
              <AdditionalInformationContent>
                <LeftBlock>
                  <ContentColumn>
                    <InfoItem>Height: 170lb</InfoItem>
                    <InfoItem>Weight: 350lb</InfoItem>
                  </ContentColumn>
                  <ContentColumn>
                    <InfoItem>Breast: 3</InfoItem>
                    <InfoItem>Age: 19</InfoItem>
                  </ContentColumn>
                </LeftBlock>
                <RightBlock>
                  <PhotoCounter>
                    <PhotoIcon />
                    <span>27</span>
                    <VideoIconWrapper>
                      <VideoIcon />
                    </VideoIconWrapper>
                  </PhotoCounter>
                </RightBlock>
              </AdditionalInformationContent>
            )}
          </CardImageWrapper>
          <CardContent>
            <Row>
              {isOpenSchedule && (
                <WorkingDaysWrapper>
                  <WorkingDays />
                </WorkingDaysWrapper>
              )}
              <Left>
                <TitleLink>Alesandra,23</TitleLink>
              </Left>
              <FavoriteButton
                isActive={isActive}
                onClick={() =>
                  dispatch(FavoritesActions.addItem, {
                    id,
                    slug,
                  })
                }
              >
                {isActive ? <HeartIcon /> : <HeartLinedIcon />}
              </FavoriteButton>
            </Row>

            <Row>
              <Left>
                <Description>
                  <Link href={'/'}>Barbie SPA</Link>
                  <Link href={'/'}>Prague 1</Link>
                </Description>
              </Left>
            </Row>
            <Row>
              <Left>
                <Price>
                  <BeforePrice>od </BeforePrice>
                  <PriceValue>2000</PriceValue>
                  <PriceSuffix>Kč/h</PriceSuffix>
                </Price>
              </Left>

              <Right>
                <ScheduleButton>
                  <ChevronButton
                    title={'available'}
                    handleIsOpen={handleIsOpenSchedule}
                    isOpen={isOpenSchedule}
                    bgColor={'green'}
                  />
                </ScheduleButton>
              </Right>
            </Row>
          </CardContent>
        </CardInner>
      </CardMainContainer>
    </>
  )
}
