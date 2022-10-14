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
  ListEmployeeVariables,
} from '@/graphql/types/ListEmployee'
import { useLazyQuery } from '@apollo/client'
import { listEmployee as listEmployeeQuery } from '@/graphql/queries.graphql'

import { ParsedUrlQuery } from 'querystring'
import { useEffect, useState } from 'react'
import { BigFilterColumn } from '@/graphql/types/globalTypes'
import { getDateMonthAgo, getTodayString } from '@/utils/helpers'

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
    console.log('arrayValueQueryList,value', arrayValueQueryList)
    arrayValueQueryList.forEach(
      ([key, value]) =>
        (specialQuery[key] = {
          from: String(value)?.split(',')[0] ?? '0',
          to: String(value)?.split(',')[1] ?? '0',
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

export const MainFilters: React.FC<ListEmployee> = () => {
  const router = useRouter()
  const { push, back, query } = router

  const [dirtyQuery, setDirtyQuery] = useState<ParsedUrlQuery>(query)

  const [executeSearch, { data }] = useLazyQuery<
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

  useEffect(() => {
    console.log(
      ': prepareQueryForSubmit(dirtyQuery)',
      prepareQueryForSubmit(dirtyQuery)
    )
    executeSearch({
      variables: { filterSort: prepareQueryForSubmit(dirtyQuery) },
    }).then(() => pushQuery())
  }, [dirtyQuery])

  const getCollection = (name: string): Array<string> => {
    const cloneQuery = dirtyQuery ?? {}
    const getQueryValue = cloneQuery[name]

    return Array.isArray(getQueryValue)
      ? getQueryValue
      : typeof getQueryValue === 'string' && getQueryValue.length > 0
      ? getQueryValue?.split(',')
      : []
  }

  const collectQueryInArray = (
    value: string,
    name: string
  ): Record<string, Array<string>> => {
    let composeProgramArray = {}

    const collection = getCollection(name)
    const valueIndex = collection?.findIndex((x) => x === value)

    if (valueIndex !== -1) {
      const filteredElements = collection?.filter((x) => x !== value)
      composeProgramArray = {
        [name]:
          filteredElements.length > 1
            ? filteredElements.toString()
            : filteredElements,
      }
    } else if (valueIndex === -1 && collection?.length) {
      composeProgramArray = {
        [name]: [...collection, value].toString(),
      }
    } else if (!collection.length) {
      composeProgramArray = {
        [name]: [value],
      }
    }
    return composeProgramArray
  }

  const queryFilterHandler = async (
    value: string | Array<string>,
    name: string
  ): Promise<void> => {
    const cloneQuery = dirtyQuery ?? {}
    const arrFilters = [
      'photo',
      'program',
      'type',
      'privat',
      'escort',
      'massage',
    ]

    if (arrFilters.includes(name) && typeof value === 'string') {
      const queryValuesToArray = collectQueryInArray(value, name)

      await setDirtyQuery({ ...cloneQuery, ...queryValuesToArray })
    } else if (Array.isArray(value)) {
      const composeArray = {
        [name]: value.toString(),
      }
      await setDirtyQuery({ ...cloneQuery, ...composeArray })
    } else {
      let val

      if (value === '1') {
        val = { ...cloneQuery, [name]: value }
      } else if (cloneQuery[name]) {
        val = { ...cloneQuery }
      }

      await setDirtyQuery({ ...val })
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
          queryFilterHandler(e === '1' ? getTodayString() : '', 'shift')
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
        onChange={() => queryFilterHandler('1', 'massage')}
        label={'Masáže'}
        name={'massage'}
        defaultChecked={dirtyQuery?.massage?.includes('1')}
      />
      <CheckBox
        onChange={() => queryFilterHandler('1', 'privat')}
        label={'Privat'}
        name={'privat'}
        defaultChecked={dirtyQuery?.privat?.includes('1')}
      />
      <CheckBox
        onChange={() => queryFilterHandler('1', 'escort')}
        label={'Escort'}
        name={'escort'}
        defaultChecked={dirtyQuery?.escort?.includes('1')}
      />
    </ProgramGrid>
  )
  const bodyType = (
    <>
      <CustomButton
        onClick={() => queryFilterHandler('1', 'type')}
        styleType={'tertiary'}
        sizeType={'small'}
        isActive={dirtyQuery?.type?.includes('1')}
      >
        Hubená
      </CustomButton>
      <CustomButton
        onClick={() => queryFilterHandler('2', 'type')}
        margin="0 0 0 16px"
        styleType={'tertiary'}
        sizeType={'small'}
        isActive={dirtyQuery?.type?.includes('2')}
      >
        Normální
      </CustomButton>
      <CustomButton
        onClick={() => queryFilterHandler('3', 'type')}
        margin="0 0 0 16px"
        styleType={'tertiary'}
        sizeType={'small'}
        isActive={dirtyQuery?.type?.includes('3')}
      >
        Plnoštíhlá
      </CustomButton>
    </>
  )
  const photoRadio = (
    <ProgramGrid>
      <CheckBox
        name={'photo'}
        onChange={() => queryFilterHandler('1', 'photo')}
        label={'Ověřeno Eroguide'}
        defaultChecked={dirtyQuery?.photo?.includes('1')}
      />
      <CheckBox
        name={'photo'}
        onChange={() => queryFilterHandler('2', 'photo')}
        label={'Vlastní'}
        defaultChecked={dirtyQuery?.photo?.includes('2')}
      />
    </ProgramGrid>
  )

  const programCheckBox = (
    <ProgramGrid>
      <CheckBox
        onChange={() => queryFilterHandler('1', 'program')}
        name={'program'}
        label={'peep show'}
        defaultChecked={dirtyQuery?.program?.includes('1')}
      />
      <CheckBox
        name={'program'}
        onChange={() => queryFilterHandler('2', 'program')}
        label={'sakura branch'}
        defaultChecked={dirtyQuery?.program?.includes('2')}
      />
      <CheckBox
        name={'program'}
        onChange={() => queryFilterHandler('3', 'program')}
        defaultChecked={dirtyQuery?.program?.includes('3')}
        label={'foot fetish'}
      />
      <CheckBox
        name={'program'}
        onChange={() => queryFilterHandler('4', 'program')}
        defaultChecked={dirtyQuery?.program?.includes('4')}
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
