import { StoreonModule } from 'storeon'

export enum WindowOffsetStateActions {
  init = '@init',
  set = 'windowOffsetState/set',
  setPageYOffset = 'windowOffsetState/setPageYOffset',
}

export interface WindowOffsetStateState {
  windowOffsetState: {
    pageYOffset: number
    lastPageYOffset: number | null
  }
}

export interface WindowOffsetStateEvents {
  [WindowOffsetStateActions.set]: WindowOffsetStateState['windowOffsetState']
  [WindowOffsetStateActions.setPageYOffset]: number
}

type WindowOffsetStateModule = StoreonModule<
  WindowOffsetStateState | null,
  WindowOffsetStateEvents
>

export const windowOffsetState: WindowOffsetStateModule = (store) => {
  store.on(WindowOffsetStateActions.init, () => ({
    windowOffsetState: {
      pageYOffset: 0,
      lastPageYOffset: null,
    },
  }))

  store.on(WindowOffsetStateActions.set, (_state, payload) => {
    return { windowOffsetState: payload }
  })

  store.on(WindowOffsetStateActions.setPageYOffset, (state, payload) => {
    if (state)
      return {
        windowOffsetState: {
          ...state.windowOffsetState,
          pageYOffset: payload,
        },
      }
  })
}
