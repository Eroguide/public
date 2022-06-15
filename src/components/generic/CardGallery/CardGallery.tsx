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
import { Loader } from '@/components/widgets/LoaderWidget'

export const CardGallery: React.FC<CardGalleryProps> = ({
  title,
  counter,
  galleryList,
  handleShowMore,
}) => {
  if (!galleryList) return <Loader />

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
            galleryList.map((card) => (
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
          disabled={galleryList.length === counter}
          onClick={() => handleShowMore?.()}
          styleType="tertiary"
          sizeType="medium"
          counter={Number(counter) - galleryList.length ?? 0}
        >
          Zobrazit více
        </CustomButton>
      </ButtonRow>
    </Container>
  )
}
