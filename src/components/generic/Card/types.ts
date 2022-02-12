import { FavoritesItems } from '@/store/favoritsModule'

export type CardProps = FavoritesItems & {
  handleAddFavorite: (data: FavoritesItems) => void
  isActive?: boolean
  isBest?: boolean
}
