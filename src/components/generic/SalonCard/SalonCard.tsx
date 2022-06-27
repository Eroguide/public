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
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { breakpoints, BreakpointsEnum } from '@/src/theme'

export const SalonCard: React.FC<SalonCardProps> = ({
  id,
  inSwipe,
  title,
  mainPhoto,
  staff,
  province,
}) => {
  const isSmall = useBreakpoint({
    min: breakpoints[BreakpointsEnum.xxs].min,
    max: breakpoints[BreakpointsEnum.sm].max,
  })

  const numberOfGirls = staff.length
  return (
    <SalonCardMainContainer inSwipe={inSwipe}>
      <SalonCardInner>
        <CardImageWrapper photoUrl={mainPhoto}>
          <Link href={`/salons/${id}`} passHref>
            <ImageProduct>
              <ImageOverlay>
                <InformationContent>
                  <LeftBlock>
                    <Title>{title}</Title>
                    <Description>{province}</Description>
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
            {staff.map(
              (girl, i) =>
                i < 3 &&
                i < (isSmall ? 5 : 3) && (
                  <Link key={girl.id} href={`/employee/${girl.id}`} passHref>
                    <SmallGalleryItem image={girl.mainPhoto}>
                      <WorkingHoursTag>12-20</WorkingHoursTag>
                      <SmallGalleryItemDescription>
                        <TitleName>{girl.name}</TitleName>
                        <CheckIcon />
                      </SmallGalleryItemDescription>
                      {numberOfGirls! < 3 && i === 2 && (
                        <SmallGalleryImageOverlay>
                          <Counter>+{numberOfGirls - 3}</Counter>
                          <CounterTitle>slečen</CounterTitle>
                        </SmallGalleryImageOverlay>
                      )}
                    </SmallGalleryItem>
                  </Link>
                )
            )}
          </SmallGallery>
          <BottomRow>
            <Left>
              <CounterAvailable>
                <DotIcon />
                <CounterText>{numberOfGirls} slečen k dispozici</CounterText>
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
