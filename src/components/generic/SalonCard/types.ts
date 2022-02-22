export type SalonCardProps = {
  id: string
  tagTitle?: boolean
  salonName?: string
  salonEmployee?: Array<{ id: number; name: string }>
  counter?: number
}
