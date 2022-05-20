import { ListEmployee_listEmployee_edges_node } from '@/graphql/types/ListEmployee'

export type CardProps = {
  tagTitle?: string
  withTimeLine?: boolean
  margin?: string
  date?: number
  inSwipe?: boolean
} & ListEmployee_listEmployee_edges_node
