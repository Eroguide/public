import { ListSalons_listSalons_edges_node } from '@/graphql/types/ListSalons'

export type SalonCardProps = {
  id: string
  tagTitle?: string
  inSwipe?: boolean
  salonName?: string
  salonEmployee?: Array<{ id: number; name: string }>
  counter?: number
} & ListSalons_listSalons_edges_node
