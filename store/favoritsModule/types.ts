import { ListEmployee_listEmployee_edges_node } from '@/graphql/types/ListEmployee'

export interface FavoritesState {
  items: Array<ListEmployee_listEmployee_edges_node>
  quantity: number
}

export type FavoritesModuleState = { favorites: FavoritesState }

export enum FavoritesActions {
  init = '@init',
  setItems = 'CouponModule/setBets',
  addItem = 'CouponModule/addBet',
  removeItem = 'CouponModule/removeItem',
}

export type FavoritesModuleEvents = {
  [FavoritesActions.setItems]: Array<ListEmployee_listEmployee_edges_node>
  [FavoritesActions.addItem]: ListEmployee_listEmployee_edges_node
  [FavoritesActions.removeItem]: undefined
}
