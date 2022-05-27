import { useState } from 'react'
import Link from 'next/link'
import { useStoreon } from '@/store/index'
import { ChevronButton } from '@/components/generic/ChevronButton'
import {
  RowGroup,
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
import { WorkingDaysStatic } from '@/components/generic'
import { numberWithSpaces } from '@/utils/helpers'

export const Card: React.FC<CardProps> = ({
  id,
  tagTitle,
  inSwipe,
  weight,
  name,
  age,
  price,
  height,
  breastSize,
  address,
  mainPhoto,
  margin,
  ...props
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
          <CardImageWrapper image={mainPhoto}>
            <ImageOverlay />
            <Link href={`/employee/${id}`} passHref>
              <ImageProduct>
                {tagTitle && <TopImageTag>{tagTitle}</TopImageTag>}
              </ImageProduct>
            </Link>
            <AdditionalInformation>
              <ChevronButton
                title={'míry'}
                handleIsOpen={handleIsOpen}
                isOpen={isOpenInfo}
                bgColor={'white'}
              />
            </AdditionalInformation>

            {isOpenInfo && (
              <AdditionalInformationContent>
                <LeftBlock>
                  <ContentColumn>
                    <InfoItem>Height: {height}cm</InfoItem>
                    <InfoItem>Weight: {weight}kg</InfoItem>
                  </ContentColumn>
                  <ContentColumn>
                    <InfoItem>Breast: {breastSize}</InfoItem>
                    <InfoItem>Age: {age}</InfoItem>
                  </ContentColumn>
                </LeftBlock>
                <RightBlock>
                  <PhotoCounter>
                    <PhotoIcon />
                    <span>{age}</span>
                    <VideoIconWrapper>
                      <VideoIcon />
                    </VideoIconWrapper>
                  </PhotoCounter>
                </RightBlock>
              </AdditionalInformationContent>
            )}
          </CardImageWrapper>
          <CardContent>
            <RowGroup>
              <Row mb={4}>
                {isOpenSchedule ? (
                  <WorkingDaysWrapper>
                    <WorkingDaysStatic />
                  </WorkingDaysWrapper>
                ) : (
                  <>
                    <Left>
                      <Link href={`/employee/${id}`} passHref>
                        <TitleLink>
                          {name},{age}
                        </TitleLink>
                      </Link>
                    </Left>
                    <FavoriteButton
                      isActive={isActive}
                      onClick={() =>
                        dispatch(FavoritesActions.addItem, {
                          id,
                          weight,
                          name,
                          age,
                          price,
                          height,
                          breastSize,
                          address,
                          mainPhoto,
                          ...props,
                        })
                      }
                    >
                      {isActive ? <HeartIcon /> : <HeartLinedIcon />}
                    </FavoriteButton>
                  </>
                )}
              </Row>
              {!isOpenSchedule && (
                <Row>
                  <Left>
                    <Description>
                      <Link href={'/'}>Barbie SPA</Link>
                      <Link href={'/'}>Prague 1</Link>
                    </Description>
                  </Left>
                </Row>
              )}
            </RowGroup>

            <Row>
              <Left>
                {!isOpenSchedule && price && (
                  <Price>
                    <BeforePrice>od </BeforePrice>
                    <PriceValue>{numberWithSpaces(price)}</PriceValue>
                    <PriceSuffix>Kč/h</PriceSuffix>
                  </Price>
                )}
              </Left>

              <Right>
                <ScheduleButton>
                  <ChevronButton
                    title={'Na směně'}
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
