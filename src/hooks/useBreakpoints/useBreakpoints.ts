import { useState, useEffect } from 'react'
import throttle from 'lodash.throttle'

const getDeviceConfig = (width: number) => {
  if (!width) return
  if (width < 320) {
    return 'xs'
  } else if (width >= 320 && width < 720) {
    return 'sm'
  } else if (width >= 720 && width < 1024) {
    return 'md'
  } else if (width >= 1024) {
    return 'lg'
  }
}

export const useBreakpoints = () => {
  const [brkPnt, setBrkPnt] = useState<string | undefined>(
    () => (process.browser && getDeviceConfig(window.innerWidth)) || 'xs'
  )

  useEffect(() => {
    const calcInnerWidth = throttle(function () {
      setBrkPnt(getDeviceConfig(window.innerWidth))
    }, 200)
    window.addEventListener('resize', calcInnerWidth)
    return () => window.removeEventListener('resize', calcInnerWidth)
  }, [])

  return brkPnt
}
