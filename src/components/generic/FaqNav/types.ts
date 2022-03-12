import { Dispatch, SetStateAction } from 'react'

export type FaqNavProps = {
  navOption: Array<{ label: string; value: string; icon: JSX.Element }>
  handleFaqSectionValue: Dispatch<SetStateAction<string>>
  valueIsActive: string
}
