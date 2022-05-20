import { ListEmployee_listEmployee_edges_node } from '@/graphql/types/ListEmployee'

export type CardProps = ListEmployee_listEmployee_edges_node & {
  tagTitle?: string
  withTimeLine?: boolean
  margin?: string
  date?: number
  inSwipe?: boolean
}
