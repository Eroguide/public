import { FavoritesItems } from '@/store/favoritsModule'
import { ListEmployee_listEmployee_edges_node } from '@/graphql/types/ListEmployee'

export type CardProps = FavoritesItems & {
  tagTitle?: string
  withTimeLine?: boolean
  margin?: string
  date?: number
  inSwipe?: boolean
} & ListEmployee_listEmployee_edges_node
