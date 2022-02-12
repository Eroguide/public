import { createContext } from 'react'
import { createStoreon } from 'storeon'
import { customContext } from 'storeon/react'
// local libs
import {
  windowOffsetState,
  WindowOffsetStateEvents,
  WindowOffsetStateState,
} from '@/store/windowOffsetState'
import {
  windowState,
  WindowStateEvents,
  WindowStateState,
} from '@/store/windowState'
import {
  FavoritesModule,
  FavoritesModuleEvents,
  FavoritesModuleState,
} from '@/store/favoritsModule'
// types
type State = WindowStateState & WindowOffsetStateState & FavoritesModuleState
type Events = WindowStateEvents &
  WindowOffsetStateEvents &
  FavoritesModuleEvents

export const store = createStoreon<State, Events>([
  windowOffsetState,
  windowState,
  FavoritesModule,
])

export const StoreonCustomContext = createContext(store)
export const useStoreon = customContext(StoreonCustomContext)
