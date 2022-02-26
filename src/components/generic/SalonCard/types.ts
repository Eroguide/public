export type SalonCardProps = {
  id: string
  tagTitle?: string
  inSwipe?: boolean
  salonName?: string
  salonEmployee?: Array<{ id: number; name: string }>
  counter?: number
}
