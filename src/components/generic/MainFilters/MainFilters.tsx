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
  ProgramGrid,
} from './styles'
import { CustomButton, RangeSliderCustom, CheckBox } from '@/components/generic'
import ChevronLeft from '/public/img/chevron-left.svg'
import AktualIcon from '/public/img/aktual-filter.svg'
import TimeIcon from '/public/img/time-filter.svg'
import PlaceIcon from '/public/img/place-filter.svg'
import BodyIcon from '/public/img/body-filter.svg'
import BreastIcon from '/public/img/breast-filter.svg'
import HeightIcon from '/public/img/height-filter.svg'
import PhotoIcon from '/public/img/photo-filter.svg'
import ProgramIcon from '/public/img/program-filter.svg'

import { useRouter } from 'next/router'
import {
  ListEmployee,
  // ListEmployeeVariables,
} from '@/graphql/types/ListEmployee'
import {
  useLazyQuery,
  // useQuery
} from '@apollo/client'
import { listEmployee as listEmployeeQuery } from '@/graphql/queries.graphql'

import { ParsedUrlQuery } from 'querystring'
import { useEffect, useState } from 'react'
import { BigFilterColumn } from '@/graphql/types/globalTypes'
import { getDateMonthAgo } from '@/utils/helpers'
// import { useSearchFilters } from '@/hooks/useSearchFilters'

export const prepareQueryForSubmit = (
  query: ParsedUrlQuery
): { filter?: BigFilterColumn } => {
  const listRange = ['age', 'breastSize', 'height', 'weight']
  const listBooleans = ['privat', 'escort', 'massage']

  const specialQuery = {}
  const booleanQuery = {}
  const arrayValueQueryList = Object.entries(query).filter((x) =>
    listRange.includes(x[0])
  )
  const booleanQueryList = Object.entries(query).filter((x) =>
    listBooleans.includes(x[0])
  )

  if (arrayValueQueryList.length) {
    arrayValueQueryList.forEach(
      ([key, value]) =>
        (specialQuery[key] = {
          from: value?.[0] ?? '0',
          to: value?.[1] ?? '0',
        })
    )
  }

  if (booleanQueryList.length) {
    booleanQueryList.forEach(
      ([key, value]) => (booleanQuery[key] = value === '1' ?? '')
    )
  }

  return { filter: { ...query, ...specialQuery, ...booleanQuery } }
}
export const MainFilters: React.FC<ListEmployee> = () => {
  const router = useRouter()
  const { push, back, query } = router
  const [dirtyQuery, setDirtyQuery] = useState<ParsedUrlQuery>(query)

  // const { filter, updateFilter } = useSearchFilters()

  // const {
  //   data,
  //   error,
  //   loading,
  //   // refetch
  // } = useQuery<ListEmployee, ListEmployeeVariables>(listEmployeeQuery, {
  //   variables: { filterSort: prepareQueryForSubmit(dirtyQuery) },
  //   defaultOptions: { canonizeResults: true, fetchPolicy: 'cache-first' },
  //   query: { dirtyQuery },
  // })
  // if (loading) return <div>Loading</div>
  // if (error) return <div>error</div>
  // console.log('filter', filter)

  const [executeSearch, { data }] = useLazyQuery(listEmployeeQuery)

  const pushQuery = (): void => {
    push(
      '/search',
      {
        query: dirtyQuery,
      },
      { shallow: true }
    )
  }

  useEffect(() => {
    pushQuery()
    executeSearch({
      variables: { filterSort: prepareQueryForSubmit(dirtyQuery) },
    })
  }, [dirtyQuery])

  const queryFilterHandler = async (
    value: string | Array<string>,
    name: string
  ): Promise<void> => {
    console.log('dirtyQuery', dirtyQuery)

    if (Array.isArray(value)) {
      const composeArray = {
        [name]: value,
      }
      await setDirtyQuery({ ...dirtyQuery, ...composeArray })
    } else {
      let composeArrayDefault

      if (value && value !== '0') {
        composeArrayDefault = { ...dirtyQuery, [name]: value }
      } else {
        composeArrayDefault = { ...dirtyQuery }
      }

      await setDirtyQuery({ ...composeArrayDefault })
    }
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

  const actualRadio = (
    <ProgramGrid>
      <CheckBox
        onChange={(e) =>
          queryFilterHandler(e === '1' ? getDateMonthAgo() : '', 'shift')
        }
        name={'shift'}
        label={'Na směně'}
      />
      <CheckBox
        onChange={(e) =>
          queryFilterHandler(e === '1' ? getDateMonthAgo() : '', 'create')
        }
        name={'create'}
        label={'Nové slečny'}
      />
    </ProgramGrid>
  )
  const ageFilter = (
    <>
      <CustomButton
        styleType={'tertiary'}
        sizeType={'small'}
        onClick={() => queryFilterHandler(['18', '22'], 'age')}
        isActive={dirtyQuery?.age === ['18', '22']}
      >
        18-22
      </CustomButton>
      <CustomButton
        onClick={() => queryFilterHandler(['23', '28'], 'age')}
        margin="0 0 0 16px"
        styleType={'tertiary'}
        sizeType={'small'}
        isActive={dirtyQuery?.age === ['23', '28']}
      >
        23-28
      </CustomButton>
      <CustomButton
        onClick={() => queryFilterHandler(['29', '35'], 'age')}
        margin="0 0 0 16px"
        styleType={'tertiary'}
        sizeType={'small'}
        isActive={dirtyQuery?.age === ['29', '35']}
      >
        29+
      </CustomButton>
    </>
  )
  const placeRadio = (
    <ProgramGrid>
      <CheckBox
        onChange={queryFilterHandler}
        label={'Masáže'}
        name={'massage'}
      />
      <CheckBox
        onChange={queryFilterHandler}
        label={'Privat'}
        name={'privat'}
      />
      <CheckBox
        onChange={queryFilterHandler}
        label={'Escort'}
        name={'escort'}
      />
    </ProgramGrid>
  )
  const bodyType = (
    <>
      <CustomButton
        onClick={() => queryFilterHandler('1', 'type')}
        styleType={'tertiary'}
        sizeType={'small'}
      >
        Hubená
      </CustomButton>
      <CustomButton
        onClick={() => queryFilterHandler('2', 'type')}
        margin="0 0 0 16px"
        styleType={'tertiary'}
        sizeType={'small'}
      >
        Normální
      </CustomButton>
      <CustomButton
        onClick={() => queryFilterHandler('3', 'type')}
        margin="0 0 0 16px"
        styleType={'tertiary'}
        sizeType={'small'}
      >
        Plnoštíhlá
      </CustomButton>
    </>
  )
  const photoRadio = (
    <ProgramGrid>
      <CheckBox
        name={'photo'}
        onChange={queryFilterHandler}
        label={'Ověřeno Eroguide'}
      />
      <CheckBox
        name={'photo'}
        onChange={queryFilterHandler}
        label={'Vlastní'}
      />
    </ProgramGrid>
  )

  const programCheckBox = (
    <ProgramGrid>
      <CheckBox
        onChange={(e) => queryFilterHandler(e, 'program1')}
        name={'program'}
        label={'peep show'}
      />
      <CheckBox
        name={'program'}
        onChange={(e) => queryFilterHandler(e, 'program2')}
        label={'sakura branch'}
      />
      <CheckBox
        name={'program'}
        onChange={(e) => queryFilterHandler(e, 'program3')}
        label={'foot fetish'}
      />
      <CheckBox
        name={'program'}
        onChange={(e) => queryFilterHandler(e, 'program4')}
        label={'urological massage'}
      />
    </ProgramGrid>
  )

  const filterList = [
    {
      id: 1,
      icon: <AktualIcon />,
      title: 'Aktuální',
      container: actualRadio,
    },
    { id: 2, icon: <TimeIcon />, title: 'Věk', container: ageFilter },
    {
      id: 3,
      icon: <PlaceIcon />,
      title: 'Místo služby',
      container: placeRadio,
    },
    { id: 4, icon: <BodyIcon />, title: 'Postava', container: bodyType },
    {
      id: 5,
      icon: <BreastIcon />,
      title: 'Prsa',
      container: (
        <RangeSliderCustom
          min={0}
          max={5}
          step={1}
          queryFilterHandler={queryFilterHandler}
          name={'breastSize'}
        />
      ),
    },
    {
      id: 6,
      icon: <HeightIcon />,
      title: 'Výška ',
      container: (
        <RangeSliderCustom
          queryFilterHandler={queryFilterHandler}
          name={'height'}
          min={150}
          max={200}
          step={1}
        />
      ),
    },
    { id: 7, icon: <PhotoIcon />, title: 'Photo ', container: photoRadio },
    {
      id: 8,
      icon: <ProgramIcon />,
      title: 'Oblíbený program ',
      container: programCheckBox,
    },
  ]

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
          {filterList.map((filt) => (
            <FilterItem key={filt.id}>
              <Row>
                <IconWrapper>{filt.icon}</IconWrapper>
                <span>{filt.title}</span>
                <Line />
              </Row>
              <FilterContent>{filt.container}</FilterContent>
            </FilterItem>
          ))}
        </FiltersList>
      </Wrapper>
    </Container>
  )
}
