import { ReactNode, ReactElement } from 'react'
import { DimensionType } from '@/hooks/types'

export type WrapperProps = {
  topOffset: DimensionType
}

export type BaseLayoutProps = {
  sidebar?: ReactNode | ReactElement
  withDrawers?: boolean
  withoutFooter?: boolean
  customContentStructure?: boolean
}

export type InnerProps = {
  topOffset: DimensionType
}
