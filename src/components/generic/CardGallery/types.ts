import { ListEmployee_listEmployee_edges_node } from '@/graphql/types/ListEmployeeNew'

export type CardGalleryProps = {
  title?: string
  counter?: number
  galleryList: Array<ListEmployee_listEmployee_edges_node>
  handleShowMore?: () => void
}
