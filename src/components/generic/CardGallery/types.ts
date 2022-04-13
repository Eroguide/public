import { FavoritesItems } from '@/store/favoritsModule'

export type CardGalleryProps = {
  cards: Array<FavoritesItems>
  title?: string
  counter?: boolean
}
