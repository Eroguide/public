import { useBreakpoints } from '@theme'
// types
import { BreakpointValues } from './types'

/**
 * React hook for getting the value for the current breakpoint from the
 * provided responsive values object.
 *
 * @example
 * const width = useBreakpointValue({ md: '250px', xs: '100px' })
 */

export const useBreakpointValue = <T>(
  values: BreakpointValues<T>,
): T | undefined => {
  const { cb } = useBreakpoints()

  const givenBreakpoints = Object.keys(values)

  let currentValue: T | undefined

  givenBreakpoints.forEach((x) => {
    if (cb === x) currentValue = values[x]
  })
  return currentValue
}
