export type FavoritesItems = {
  id: string
  slug?: string
  // name: string
  // height: number
  // weight: number
  // breast: 1 | 2 | 3 | 4 | 5
  // age: number
  // price: number
}

export interface FavoritesState {
  items: Array<FavoritesItems>
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
  [FavoritesActions.setItems]: Array<FavoritesItems>
  [FavoritesActions.addItem]: FavoritesItems
  [FavoritesActions.removeItem]: undefined
}
