import { FavoritesItems } from '@/store/favoritsModule'
import { ListEmployee_listEmployee_edges_node } from '@/graphql/types/ListEmployee'

export type CardGalleryProps = {
  cards: Array<FavoritesItems>
  title?: string
  counter?: boolean
  galleryList: Array<ListEmployee_listEmployee_edges_node>
}
