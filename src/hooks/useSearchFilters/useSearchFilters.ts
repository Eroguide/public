import { useState } from 'react'
import { ParsedUrlQuery } from 'querystring'
import { BigFilterColumn } from '@/graphql/types/globalTypes'

export type UseSearchFiltersOutput = {
  filter?: BigFilterColumn
  updateFilter: (query: ParsedUrlQuery) => void
}

export const useSearchFilters = (): UseSearchFiltersOutput => {
  const [filter, _updateFilter] = useState<ParsedUrlQuery>()

  const updateFilter = (query: ParsedUrlQuery): void => {
    _updateFilter(query)
  }
  return { updateFilter, filter: filter ? filter : undefined }
}
