import { StoreonModule } from 'storeon'

export enum WindowStateActions {
  init = '@init',
  set = 'windowState/set',
}

export interface WindowStateState {
  windowState: {
    innerWidth: number | null // full width includes the width of the scrollbar, we need this for the breakpoint system
    clientWidth: number | null // without width of the scrollbar, we need this for some calculations in UI components like drawers, slider, etc.
  }
}

export interface WindowStateEvents {
  [WindowStateActions.set]: WindowStateState['windowState']
}

type WindowStateModule = StoreonModule<
  WindowStateState | null,
  WindowStateEvents
>

export const windowState: WindowStateModule = (store) => {
  store.on(WindowStateActions.init, () => ({
    windowState: {
      innerWidth: process.browser ? window.innerWidth : null,
      clientWidth: process.browser
        ? document.documentElement.clientWidth
        : null,
    },
  }))

  store.on(WindowStateActions.set, (_state, payload) => {
    return { windowState: payload }
  })
}
