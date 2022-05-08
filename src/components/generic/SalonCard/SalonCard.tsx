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
import { CustomButton } from '@/components/generic'

export const SalonCard: React.FC<SalonCardProps> = ({ id, inSwipe, title }) => {
  const cardList = [
    { id: '23123' },
    { id: '23123' },
    { id: '23123' },
    { id: '23123' },
    { id: '23123' },
    { id: '23123' },
    { id: '23123' },
    { id: '23123' },
    { id: '23123' },
    { id: '23123' },
    { id: '23123' },
    { id: '23123' },
    { id: '23123' },
    { id: '23123' },
  ]

  return (
    <SalonCardMainContainer inSwipe={inSwipe}>
      <SalonCardInner>
        <CardImageWrapper>
          <Link href={`/salons/${id}`} passHref>
            <ImageProduct>
              <ImageOverlay>
                <InformationContent>
                  <LeftBlock>
                    <Title>{title}</Title>
                    <Description>Prague 2</Description>
                  </LeftBlock>
                  <RightBlock>
                    <RatingStartIcon />
                    <RatingValue>4.5</RatingValue>
                  </RightBlock>
                </InformationContent>
              </ImageOverlay>
            </ImageProduct>
          </Link>
        </CardImageWrapper>
        <CardContent>
          <SmallGallery>
            {cardList.map(
              (x, i) =>
                i < 2 && (
                  // i < (isSmall ? 5 : 3) &&
                  <Link key={x.id + i} href={`/employee/${id}`} passHref>
                    <SmallGalleryItem>
                      <WorkingHoursTag>12-20</WorkingHoursTag>
                      <SmallGalleryItemDescription>
                        <TitleName>Candy,24</TitleName>
                        <CheckIcon />
                      </SmallGalleryItemDescription>
                    </SmallGalleryItem>
                  </Link>
                )
            )}

            <Link href={`/employee/${id}`} passHref>
              <SmallGalleryItem>
                <WorkingHoursTag>12-20</WorkingHoursTag>
                <SmallGalleryItemDescription>
                  <TitleName>Candy,24</TitleName>
                  <CheckIcon />
                </SmallGalleryItemDescription>
                <SmallGalleryImageOverlay>
                  <Counter>+13</Counter>
                  <CounterTitle>slečen</CounterTitle>
                </SmallGalleryImageOverlay>
              </SmallGalleryItem>
            </Link>
          </SmallGallery>
          <BottomRow>
            <Left>
              <CounterAvailable>
                <DotIcon />
                <CounterText>26 slečen k dispozici</CounterText>
              </CounterAvailable>
            </Left>
            <Right>
              <CustomButton
                isLink
                styleType="tertiary"
                sizeType="medium"
                href={`/salons/${id}`}
              >
                Více
              </CustomButton>
            </Right>
          </BottomRow>
        </CardContent>
      </SalonCardInner>
    </SalonCardMainContainer>
  )
}
