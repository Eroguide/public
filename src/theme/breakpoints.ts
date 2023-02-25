import { css } from '@emotion/react'
import { isMobileOnly, isTablet } from 'react-device-detect'
import { useStoreon } from '@/store/index'
import { ArrayCSSInterpolation } from '@emotion/serialize/types'
import { SerializedStyles } from '@emotion/react'

export enum BrkList {
  xxs = 'xxs',
  xs = 'xs',
  mobile = 'mobile',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

export type BreakpointsUnion = keyof typeof BrkList

export const breakpoints = {
  [BrkList.xl]: {
    min: 1920,
    max: 6000,
  },
  [BrkList.lg]: {
    min: 1420,
    max: 1920 - 1,
  },
  [BrkList.md]: {
    min: 960,
    max: 1420 - 1,
  },
  [BrkList.sm]: {
    min: 600,
    max: 960 - 1,
  },
  [BrkList.mobile]: {
    min: 300,
    max: 600 - 1,
  },
  [BrkList.xs]: {
    min: 375,
    max: 600 - 1,
  },
  [BrkList.xxs]: {
    min: 300,
    max: 375 - 1,
  },
}

const breakpointsOrdering: Array<BreakpointsUnion> = [
  BrkList.xxs,
  BrkList.xs,
  BrkList.sm,
  BrkList.md,
  BrkList.lg,
  BrkList.xl,
]

const compareCurrentBreakpoint = (a: BreakpointsUnion, b: BreakpointsUnion) =>
  breakpointsOrdering.indexOf(a) === breakpointsOrdering.indexOf(b)
    ? 'EQ'
    : breakpointsOrdering.indexOf(a) > breakpointsOrdering.indexOf(b)
    ? 'GT'
    : 'LT'

const getApproximateBreakpoint = (): Exclude<BreakpointsUnion, 'mobile'> => {
  if (isMobileOnly) return BrkList.xs
  else if (isTablet) return BrkList.sm
  else return BrkList.lg
}

type CurrentWidth = number | null
const getCurrentBreakpoint = (
  x: CurrentWidth = null
): Exclude<BreakpointsUnion, 'mobile'> =>
  x === null
    ? getApproximateBreakpoint()
    : x <= breakpoints.xxs.max
    ? BrkList.xxs
    : x >= breakpoints.xs.min && x <= breakpoints.xs.max
    ? BrkList.xs
    : x >= breakpoints.sm.min && x <= breakpoints.sm.max
    ? BrkList.sm
    : x >= breakpoints.md.min && x <= breakpoints.md.max
    ? BrkList.md
    : x >= breakpoints.lg.min && x <= breakpoints.lg.max
    ? BrkList.lg
    : BrkList.xl

export const useBreakpoints = (): {
  ccb: typeof compareCurrentBreakpoint
  cb: Exclude<BreakpointsUnion, 'mobile'>
} => {
  const { windowState } = useStoreon('windowState')

  return {
    ccb: compareCurrentBreakpoint,
    cb: getCurrentBreakpoint(windowState.innerWidth),
  }
}

type Media = Record<
  BreakpointsUnion,
  (
    template: TemplateStringsArray,
    ...args: ArrayCSSInterpolation
  ) => SerializedStyles
>

export const media = (
  Object.keys(breakpoints) as Array<BreakpointsUnion>
).reduce((acc, current: BreakpointsUnion) => {
  acc[current] = (...args) =>
    current === BrkList.xxs || current === BrkList.mobile
      ? css`
          @media (max-width: ${breakpoints[current].max}px) {
            ${css(...args)}
          }
        `
      : css`
          @media (min-width: ${breakpoints[current]
              .min}px) and (max-width: ${breakpoints[current].max}px) {
            ${css(...args)}
          }
        `

  return acc
}, {} as Media)
