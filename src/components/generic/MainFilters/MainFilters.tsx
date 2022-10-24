import {
  Container,
  Wrapper,
  Row,
  TopMainFiltersPanel,
  Left,
  Right,
  ReturnButton,
  IconWrapper,
  FiltersList,
  Line,
  FilterContent,
  FilterItem,
} from './styles'
import { CustomButton } from '@/components/generic'
import ChevronLeft from '/public/img/chevron-left.svg'

import { useRouter } from 'next/router'
import {
  ListEmployee,
  ListEmployeeVariables,
} from '@/graphql/types/ListEmployee'
import { useLazyQuery } from '@apollo/client'
import { listEmployee as listEmployeeQuery } from '@/graphql/queries.graphql'

import { ParsedUrlQuery } from 'querystring'
import { FC, useEffect } from 'react'
import { BigFilterColumn } from '@/graphql/types/globalTypes'
import useFilters from '@/components/generic/MainFilters/useFilters'
import queryString from 'query-string'

export const prepareQueryForSubmit = (
  query: ParsedUrlQuery
): { filter?: BigFilterColumn } => {
  const listRange = ['age', 'breastSize', 'height', 'weight']
  const listBooleans = ['privat', 'escort', 'massage']
  const listCheckboxes = ['photo', 'program', 'type']
  const specialQuery = {}
  const booleanQuery = {}
  const collectedArrays = {}

  const arrayValueQueryList = Object.entries(query).filter((x) =>
    listRange.includes(x[0])
  )

  const booleanQueryList = Object.entries(query).filter((x) =>
    listBooleans.includes(x[0])
  )

  const collectedArrList = Object.entries(query).filter((x) =>
    listCheckboxes.includes(x[0])
  )

  if (arrayValueQueryList.length) {
    arrayValueQueryList.forEach(
      ([key, value]) =>
        (specialQuery[key] = {
          from:
            queryString.parse(`${key}=${value}`, { arrayFormat: 'comma' })[0] ??
            '0',
          to:
            queryString.parse(`${key}=${value}`, { arrayFormat: 'comma' })[1] ??
            '0',
        })
    )
  }

  if (booleanQueryList.length) {
    booleanQueryList.forEach(
      ([key, value]) => (booleanQuery[key] = value === '1' ?? '')
    )
  }

  if (collectedArrList.length) {
    collectedArrList.forEach(
      ([key, value]) =>
        (collectedArrays[key] =
          (value && typeof value === 'string' && value.split(',')) || null)
    )
  }

  return {
    filter: { ...query, ...specialQuery, ...collectedArrays, ...booleanQuery },
  }
}

export const MainFilters: FC = () => {
  const router = useRouter()
  const { push, back, query } = router
  const { dirtyQuery, filterElements } = useFilters()
  const [executeSearch, { data, ...rest }] = useLazyQuery<
    ListEmployee,
    ListEmployeeVariables
  >(listEmployeeQuery)

  const pushQuery = (): void => {
    push(
      '/search',
      {
        query: dirtyQuery,
      },
      { shallow: true }
    )
  }

  const handleSearchButton = (): void => {
    push(
      '/employee',
      {
        query: dirtyQuery,
      },
      { shallow: false }
    )
  }

  useEffect(() => {
    executeSearch({
      variables: { filterSort: prepareQueryForSubmit(dirtyQuery) },
    }).then(() => pushQuery())
  }, [dirtyQuery])

  return (
    <Container>
      <Wrapper>
        <TopMainFiltersPanel>
          <Left>
            <ReturnButton onClick={() => back()}>
              <ChevronLeft />
            </ReturnButton>
          </Left>
          <Right>
            <CustomButton
              styleType="primary"
              sizeType="default"
              onClick={handleSearchButton}
            >
              Zobrazit
              {`(${data?.listEmployee.totalCount ?? 0})`}
            </CustomButton>
          </Right>
        </TopMainFiltersPanel>
        <FiltersList>
          {filterElements.map((filterItem) => (
            <FilterItem key={filterItem.id}>
              <Row>
                <IconWrapper>{filterItem.icon}</IconWrapper>
                <span>{filterItem.title}</span>
                <Line />
              </Row>
              <FilterContent>{filterItem.container}</FilterContent>
            </FilterItem>
          ))}
        </FiltersList>
      </Wrapper>
    </Container>
  )
}
