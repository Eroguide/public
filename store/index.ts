import { createContext } from 'react'
import { createStoreon } from 'storeon'
import { customContext } from 'storeon/react'
// local libs
import {windowOffsetState, WindowOffsetStateEvents, WindowOffsetStateState} from "@/store/windowOffsetState";
import {windowState, WindowStateEvents, WindowStateState} from "@/store/windowState";
// types
type State =   WindowStateState & WindowOffsetStateState
type Events = WindowStateEvents & WindowOffsetStateEvents

export const store = createStoreon<State, Events>([
    windowOffsetState, windowState
])

export const StoreonCustomContext = createContext(store)
export const useStoreon = customContext(StoreonCustomContext)
