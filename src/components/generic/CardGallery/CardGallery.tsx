import {
  CardGalleryContainer,
  GalleryItem,
  MessageBox,
  Counter,
  LeftFilters,
  TitlePanel,
  ListWrapper,
} from './styles'
import { CardGalleryProps } from './types'
import { Card } from '@/components/generic/Card'
import { CardForGallery } from '@/components/generic'

export const CardGallery: React.FC<CardGalleryProps> = ({ cards, title }) => {
  return (
    <>
      <TitlePanel>
        {cards.length > 0 && (
          <LeftFilters>
            <Counter>
              {title} {cards.length}
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
            <MessageBox>Add the masseuses you like to Favorites</MessageBox>
          )}
        </ListWrapper>
      </CardGalleryContainer>
    </>
  )
}
