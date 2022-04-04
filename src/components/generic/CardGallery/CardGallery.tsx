import {
  Container,
  CardGalleryContainer,
  GalleryItem,
  MessageBox,
  Counter,
  LeftFilters,
  TitlePanel,
  ListWrapper,
} from './styles'
import { CardGalleryProps } from './types'
import { CardForGallery } from '@/components/generic'

export const CardGallery: React.FC<CardGalleryProps> = ({ cards, title }) => {
  return (
    <Container>
      <TitlePanel>
        {cards.length > 0 && (
          <LeftFilters>
            <Counter>
              {title}: {cards.length}
            </Counter>
          </LeftFilters>
        )}
      </TitlePanel>
      <CardGalleryContainer>
        <ListWrapper>
          {cards.length ? (
            cards.map((card) => (
              <GalleryItem key={card.id}>
                <CardForGallery {...card} />
              </GalleryItem>
            ))
          ) : (
            <MessageBox>
              Přidejte si slečny, které se vám líbí, do oblíbených
            </MessageBox>
          )}
        </ListWrapper>
      </CardGalleryContainer>
    </Container>
  )
}
