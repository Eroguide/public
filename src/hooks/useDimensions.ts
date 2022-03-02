import { useRef, useState, useEffect } from 'react'
// types
import { RefObject, Dispatch, SetStateAction } from 'react'
import { DimensionsEnum, DimensionType } from './types'

export const useDimensions = <T extends HTMLElement>(
  dimensions: Array<keyof typeof DimensionsEnum>
): [
  RefObject<T>,
  {
    [DimensionsEnum.height]: DimensionType
    [DimensionsEnum.width]: DimensionType
  }
] => {
  const heightRequired = dimensions.includes(DimensionsEnum.height)
  const widthRequired = dimensions.includes(DimensionsEnum.width)
  const ref = useRef<T>(null)

  let height: DimensionType = null
  let setHeight: Dispatch<SetStateAction<DimensionType>>
  let width: DimensionType = null
  let setWidth: Dispatch<SetStateAction<DimensionType>>

  if (heightRequired) [height, setHeight] = useState<DimensionType>(null)
  if (widthRequired) [width, setWidth] = useState<DimensionType>(null)

  useEffect(() => {
    if (heightRequired)
      setHeight(ref && ref.current ? ref.current.clientHeight : null)
    if (widthRequired)
      setWidth(ref && ref.current ? ref.current.clientWidth : null)
  }, [heightRequired, widthRequired])

  return [ref, { height, width }]
}
