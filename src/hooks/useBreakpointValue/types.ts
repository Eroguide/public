import { BreakpointsEnum } from '@theme'

type AvailableBreakpoints = Exclude<BreakpointsEnum, 'mobile'>

export type BreakpointValues<T> = Partial<Record<AvailableBreakpoints, T>>
export type Dict<T> = Record<string, T>
