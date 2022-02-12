import { useState } from 'react'
import Link from 'next/link'
import {
  CardMainContainer,
  CardInner,
  CardImageWrapper,
  ImageProduct,
  CardContent,
  Title,
  Description,
  Price,
  Status,
  BeforePrice,
  PriceValue,
  PriceSuffix,
  Row,
  Left,
  Right,
  FavoriteButton,
  TopImageFlag,
  AdditionalInformation,
  ToggleInformation,
  ChevronTitle,
  AdditionalInformationContent,
  ImageOverlay,
  LeftBlock,
  RightBlock,
  ContentColumn,
  InfoItem,
} from './styles'
import HeartIcon from 'public/img/heart.svg'
import HeartLinedIcon from 'public/img/heart-lined.svg'
import ChevronIcon from 'public/img/chevron.svg'
import { CardProps } from './types'

export const Card: React.FC<CardProps> = ({
  id,
  slug,
  handleAddFavorite,
  isActive = false,
  isBest,
}) => {
  const [isOpenInfo, setIsOpenInfo] = useState<boolean>(false)
  return (
    <CardMainContainer>
      <CardInner>
        <CardImageWrapper>
          <ImageProduct>
            {isBest && <TopImageFlag>Best</TopImageFlag>}
            <ImageOverlay>
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
                  <RightBlock>sd</RightBlock>
                </AdditionalInformationContent>
              )}
            </ImageOverlay>
            <AdditionalInformation>
              <ChevronTitle>appearance</ChevronTitle>
              <ToggleInformation
                onClick={() => setIsOpenInfo(!isOpenInfo)}
                isOpen={isOpenInfo}
              >
                <ChevronIcon />
              </ToggleInformation>
            </AdditionalInformation>
          </ImageProduct>
        </CardImageWrapper>
        <CardContent>
          <Row>
            <Left>
              <Title>Alesandra,23</Title>
            </Left>
            <FavoriteButton
              isActive={isActive}
              onClick={() => handleAddFavorite({ id, slug })}
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
                <BeforePrice>od </BeforePrice> <PriceValue>2000</PriceValue>
                <PriceSuffix>Kč/h</PriceSuffix>
              </Price>
            </Left>
            <Right>
              <Status>Available</Status>
            </Right>
          </Row>
        </CardContent>
      </CardInner>
    </CardMainContainer>
  )
}
