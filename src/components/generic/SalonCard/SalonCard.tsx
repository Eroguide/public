import {
  SalonCardMainContainer,
  SalonCardInner,
  RatingValue,
  ImageOverlay,
  ImageProduct,
  LeftBlock,
  RightBlock,
  CardImageWrapper,
  Title,
  Description,
  CounterAvailable,
  CounterText,
  ButtonShadow,
  InformationContent,
  SmallGallery,
  SmallGalleryItem,
  BottomRow,
  WorkingHoursTag,
  SmallGalleryItemDescription,
  TitleName,
  Counter,
  CounterTitle,
  CardContent,
  SmallGalleryImageOverlay,
} from './styles'
import { SalonCardProps } from './types'
import Link from 'next/link'
import RatingStartIcon from 'public/img/star-icon.svg'
import DotIcon from 'public/img/dot.svg'
import CheckIcon from 'public/img/check-blue.svg'
import { Left, Right } from '@/components/generic/Card/styles'
export const SalonCard: React.FC<SalonCardProps> = () => {
  return (
    <SalonCardMainContainer>
      <SalonCardInner>
        <CardImageWrapper>
          <ImageProduct>
            <ImageOverlay>
              <InformationContent>
                <LeftBlock>
                  <Title>Nasty ladies room</Title>
                  <Description>Prague 2</Description>
                </LeftBlock>
                <RightBlock>
                  <RatingStartIcon />
                  <RatingValue>4.5</RatingValue>
                </RightBlock>
              </InformationContent>
            </ImageOverlay>
          </ImageProduct>
        </CardImageWrapper>
        <CardContent>
          <SmallGallery>
            <Link href={'#'}>
              <SmallGalleryItem>
                <WorkingHoursTag>12-20</WorkingHoursTag>
                <SmallGalleryItemDescription>
                  <TitleName>Candy,24</TitleName>
                  <CheckIcon />
                </SmallGalleryItemDescription>
              </SmallGalleryItem>
            </Link>
            <Link href={'#'}>
              <SmallGalleryItem>
                <WorkingHoursTag>12-20</WorkingHoursTag>
                <SmallGalleryItemDescription>
                  <TitleName>Candy,24</TitleName>
                  <CheckIcon />
                </SmallGalleryItemDescription>
              </SmallGalleryItem>
            </Link>
            <Link href={'#'}>
              <SmallGalleryItem>
                <WorkingHoursTag>12-20</WorkingHoursTag>
                <SmallGalleryItemDescription>
                  <TitleName>Candy,24</TitleName>
                  <CheckIcon />
                </SmallGalleryItemDescription>
                <SmallGalleryImageOverlay>
                  <Counter>+13</Counter>
                  <CounterTitle>ladies</CounterTitle>
                </SmallGalleryImageOverlay>
              </SmallGalleryItem>
            </Link>
          </SmallGallery>
          <BottomRow>
            <Left>
              <CounterAvailable>
                <DotIcon />
                <CounterText>13 ladies avaliable</CounterText>
              </CounterAvailable>
            </Left>
            <Right>
              <ButtonShadow>Details</ButtonShadow>
            </Right>
          </BottomRow>
        </CardContent>
      </SalonCardInner>
    </SalonCardMainContainer>
  )
}
