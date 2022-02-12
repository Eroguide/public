import { StoreonModule } from 'storeon'
import {
  FavoritesActions,
  FavoritesItems,
  FavoritesModuleEvents,
  FavoritesModuleState,
  FavoritesState,
} from '@/store/favoritsModule/types'

export const initialFavoritesState: FavoritesState = {
  items: [],
  quantity: 0,
}

export const FavoritesModule: StoreonModule<
  FavoritesModuleState,
  FavoritesModuleEvents
> = ({ on, dispatch }) => {
  on(FavoritesActions.init, () => {
    let favoritesFromLocalStorage
    if (process.browser) {
      favoritesFromLocalStorage = localStorage.getItem('favorites')
    }
    const favoritesArray =
      favoritesFromLocalStorage &&
      (JSON.parse(favoritesFromLocalStorage) as FavoritesState['items'])

    return {
      favorites: {
        ...initialFavoritesState,
        items: favoritesArray || initialFavoritesState.items,
      },
    }
  })
  on(FavoritesActions.setItems, ({ favorites }, items) => {
    if (process.browser) {
      localStorage.setItem('favorites', JSON.stringify(items))
    }

    return {
      favorites: {
        ...favorites,
        items,
      },
    }
  })
  on(FavoritesActions.addItem, ({ favorites }, item) => {
    const items = [...favorites.items]
    const cloneIndex = items.findIndex((v) => v.id === item.id)

    if (cloneIndex === -1) {
      items.push({ ...item })
    } else if (items[cloneIndex].id === item.id) {
      items.splice(cloneIndex, 1)
    } else {
      items[cloneIndex] = {
        ...items[cloneIndex],
        ...item,
      }
    }
    dispatch(FavoritesActions.setItems, items)
  })
}
