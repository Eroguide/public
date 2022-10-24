import queryString from 'query-string'
import { ProgramGrid } from '@/components/generic/MainFilters/styles'
import { CheckBox, CustomButton, RangeSliderCustom } from '@/components/generic'
import { getDateMonthAgo, getTodayString } from '@/utils/helpers'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ParsedUrlQuery } from 'querystring'
import ActualIcon from '/public/img/aktual-filter.svg'
import TimeIcon from '/public/img/time-filter.svg'
import PlaceIcon from '/public/img/place-filter.svg'
import BodyIcon from '/public/img/body-filter.svg'
import BreastIcon from '/public/img/breast-filter.svg'
import HeightIcon from '/public/img/height-filter.svg'
import PhotoIcon from '/public/img/photo-filter.svg'
import ProgramIcon from '/public/img/program-filter.svg'

export const useFilters = () => {
  const router = useRouter()
  const { query, asPath } = router

  const [dirtyQuery, setDirtyQuery] = useState<ParsedUrlQuery>(query)

  const clearPath = asPath.replace('/search?', '')

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
      //Check if it exists in query
      const filteredElements = collection?.filter((x) => x !== value)
      composeProgramArray = {
        [name]:
          filteredElements.length > 1
            ? filteredElements.toString()
            : filteredElements,
      }
    } else if (valueIndex === -1 && collection?.length) {
      // Not in query but there are other queryies
      composeProgramArray = {
        [name]: [...collection, value].toString(),
      }
    } else if (!collection.length) {
      //add first query
      composeProgramArray = {
        [name]: [value],
      }
    }
    return composeProgramArray
  }

  //OnChange filters handler
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
      //Collect single checkboxes into arrays
      const queryValuesToArray = collectQueryInArray(value, name)
      await setDirtyQuery({ ...cloneQuery, ...queryValuesToArray })
    } else if (Array.isArray(value)) {
      //if value is array like a range filters then we just set it to a key
      let newQueryValue

      if (name === 'age' && dirtyQuery[name] === value.toString()) {
        const defaultValue = [18, 60]
        newQueryValue = {
          [name]: defaultValue.toString(),
        }
      } else {
        newQueryValue = {
          [name]: value.toString(),
        }
      }
      await setDirtyQuery({ ...cloneQuery, ...newQueryValue })
    } else {
      //DEFAULT a new value
      let val

      if (value === '1') {
        val = { ...cloneQuery, [name]: value }
      } else if (cloneQuery[name] === value) {
        val = cloneQuery
      } else {
        val = { [name]: value }
      }
      await setDirtyQuery({ ...cloneQuery, ...val })
    }
  }

  const filters = {
    actualRadio: (
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
    ),

    ageFilter: (
      <>
        <CustomButton
          styleType={'tertiary'}
          sizeType={'small'}
          onClick={() => queryFilterHandler(['18', '22'], 'age')}
          isActive={dirtyQuery?.age === '18,22'}
        >
          18-22
        </CustomButton>
        <CustomButton
          onClick={() => queryFilterHandler(['23', '28'], 'age')}
          margin="0 0 0 16px"
          styleType={'tertiary'}
          sizeType={'small'}
          isActive={dirtyQuery?.age === '23,28'}
        >
          23-28
        </CustomButton>
        <CustomButton
          onClick={() => queryFilterHandler(['29', '35'], 'age')}
          margin="0 0 0 16px"
          styleType={'tertiary'}
          sizeType={'small'}
          isActive={dirtyQuery?.age === '29,35'}
        >
          29+
        </CustomButton>
      </>
    ),
    placeRadio: (
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
    ),
    bodyType: (
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
    ),
    photoRadio: (
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
    ),
    programCheckBox: (
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
    ),
  }

  const filterElements = [
    {
      id: 1,
      icon: <ActualIcon />,
      title: 'Aktuální',
      container: filters.actualRadio,
    },
    { id: 2, icon: <TimeIcon />, title: 'Věk', container: filters.ageFilter },
    {
      id: 3,
      icon: <PlaceIcon />,
      title: 'Místo služby',
      container: filters.placeRadio,
    },
    {
      id: 4,
      icon: <BodyIcon />,
      title: 'Postava',
      container: filters.bodyType,
    },
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
    {
      id: 7,
      icon: <PhotoIcon />,
      title: 'Photo ',
      container: filters.photoRadio,
    },
    {
      id: 8,
      icon: <ProgramIcon />,
      title: 'Oblíbený program ',
      container: filters.programCheckBox,
    },
  ]

  return { dirtyQuery, filterElements }
}

export default useFilters
