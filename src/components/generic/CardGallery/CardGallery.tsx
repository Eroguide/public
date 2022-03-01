import {
  CardGalleryContainer,
  GalleryItem,
  MessageBox,
  Counter,
  LeftFilters,
  TitlePanel,
} from './styles'
import { CardGalleryProps } from './types'
import { Card } from '@/components/generic/Card'

export const CardGallery: React.FC<CardGalleryProps> = ({ cards }) => {
  return (
    <>
      <TitlePanel>
        {cards.length > 0 && (
          <LeftFilters>
            <Counter>Salons: 136</Counter>
          </LeftFilters>
        )}
      </TitlePanel>
      <CardGalleryContainer>
        {cards.length ? (
          cards.map((card) => (
            <GalleryItem key={card.id}>
              <Card {...card} />
            </GalleryItem>
          ))
        ) : (
          <MessageBox>Add the masseuses you like to Favorites</MessageBox>
        )}
      </CardGalleryContainer>
    </>
  )
}
