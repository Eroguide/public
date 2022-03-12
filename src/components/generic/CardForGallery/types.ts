import { FavoritesItems } from '@/store/favoritsModule'

export type CardProps = FavoritesItems & {
  tagTitle?: string
  withTimeLine?: boolean
  margin?: string
  date?: number
  inSwipe?: boolean
}
