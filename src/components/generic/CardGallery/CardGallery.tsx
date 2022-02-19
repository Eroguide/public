import { CardGalleryContainer, GalleryItem } from './styles'
import { CardGalleryProps } from './types'
import { Card } from '@/components/generic/Card'

export const CardGallery: React.FC<CardGalleryProps> = ({ cards }) => {
  return (
    <CardGalleryContainer>
      {cards.length > 0 &&
        cards.map((card) => (
          <GalleryItem key={card.id}>
            <Card {...card} />
          </GalleryItem>
        ))}
    </CardGalleryContainer>
  )
}
