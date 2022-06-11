import {
  Container,
  CardGalleryContainer,
  GalleryItem,
  MessageBox,
  Counter,
  LeftFilters,
  TitlePanel,
  ListWrapper,
  ButtonRow,
} from './styles'
import { CardGalleryProps } from './types'
import { Card, CustomButton } from '@/components/generic'
import { useState } from 'react'

export const CardGallery: React.FC<CardGalleryProps> = ({
  title,
  counter,
  galleryList,
}) => {
  const [isShowMore, setIsShowMode] = useState<boolean>(false)

  if (!galleryList) return <p>...loading...</p>

  const contentToShow =
    galleryList && (isShowMore ? galleryList : galleryList.slice(0, 8))

  return (
    <Container>
      <TitlePanel>
        {galleryList.length > 0 && (
          <LeftFilters>
            <Counter>
              {title} {counter && `: ${galleryList.length}`}
            </Counter>
          </LeftFilters>
        )}
      </TitlePanel>
      <CardGalleryContainer>
        <ListWrapper>
          {galleryList.length ? (
            contentToShow.map((card) => (
              <GalleryItem key={card.id}>
                <Card {...card} />
              </GalleryItem>
            ))
          ) : (
            <MessageBox>
              Přidejte si slečny, které se vám líbí, do oblíbených
            </MessageBox>
          )}
        </ListWrapper>
      </CardGalleryContainer>
      <ButtonRow>
        <CustomButton
          onClick={() => setIsShowMode(!isShowMore)}
          styleType="tertiary"
          sizeType="medium"
          counter={321}
        >
          Zobrazit více
        </CustomButton>
      </ButtonRow>
    </Container>
  )
}
