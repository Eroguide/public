import { CardGalleryContainer, GalleryItem, MessageBox } from './styles'
import { CardGalleryProps } from './types'
import { Card } from '@/components/generic/Card'

export const CardGallery: React.FC<CardGalleryProps> = ({ cards }) => {
  return (
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
  )
}
