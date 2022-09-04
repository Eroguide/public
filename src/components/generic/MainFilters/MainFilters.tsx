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
} from '@/graphql/types/ListEmployeeNew'
import { useQuery } from '@apollo/client'
import { listEmployee as listEmployeeQuery } from '@/graphql/queries.graphql'
import { Loader } from '@/components/widgets/LoaderWidget'
import { ParsedUrlQuery } from 'querystring'
import { useState } from 'react'

export const MainFilters: React.FC<ListEmployee> = ({ listEmployee }) => {
  const router = useRouter()
  const { push, back, query } = router
  const [dirtyQuery, setDirtyQuery] = useState<ParsedUrlQuery>(query)

  const pushQuery = async (): Promise<void> => {
    await push(
      '/search',
      {
        query: dirtyQuery,
      },
      { shallow: true }
    )
  }
  console.log('listEmployee', listEmployee)
  const { data, loading, error } = useQuery<
    ListEmployee,
    ListEmployeeVariables
  >(listEmployeeQuery, {
    variables: { filterSort: dirtyQuery },
    defaultOptions: { canonizeResults: true, fetchPolicy: 'cache-first' },
  })
  console.log('data', data)
  const queryFilterHandler = async (
    value: string,
    name: string
  ): Promise<void> => {
    const composeValue = {
      [name]: value,
    }
    await setDirtyQuery({ ...dirtyQuery, ...composeValue })
    await pushQuery()
  }

  if (error) return <p>`Error! ${error.message}`</p>

  const actualRadio = (
    <ProgramGrid>
      <CheckBox
        onChange={queryFilterHandler}
        name={'onShift'}
        label={'Na směně'}
      />
      <CheckBox
        onChange={queryFilterHandler}
        name={'new'}
        label={'Nové slečny'}
      />
    </ProgramGrid>
  )

  const ageFilter = (
    <>
      <CustomButton
        styleType={'tertiary'}
        sizeType={'small'}
        onClick={() => queryFilterHandler('1', 'age')}
      >
        18-22
      </CustomButton>
      <CustomButton
        onClick={() => queryFilterHandler('2', 'age')}
        margin="0 0 0 16px"
        styleType={'tertiary'}
        sizeType={'small'}
      >
        23-28
      </CustomButton>
      <CustomButton
        onClick={() => queryFilterHandler('3', 'age')}
        margin="0 0 0 16px"
        styleType={'tertiary'}
        sizeType={'small'}
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
      <CustomButton styleType={'tertiary'} sizeType={'small'}>
        Hubená
      </CustomButton>
      <CustomButton
        margin="0 0 0 16px"
        styleType={'tertiary'}
        sizeType={'small'}
      >
        Normální
      </CustomButton>
      <CustomButton
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
  const programRadio = (
    <ProgramGrid>
      <CheckBox
        onChange={queryFilterHandler}
        name={'program'}
        label={'peep-show'}
      />
      <CheckBox
        name={'program'}
        onChange={queryFilterHandler}
        label={'sakura branch'}
      />
      <CheckBox
        name={'program'}
        onChange={queryFilterHandler}
        label={'foot fetish'}
      />
      <CheckBox
        name={'program'}
        onChange={queryFilterHandler}
        label={'urological massage'}
      />
    </ProgramGrid>
  )

  const filterList = [
    { id: 1, icon: <AktualIcon />, title: 'Aktuální', container: actualRadio },
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
      container: <RangeSliderCustom min={1} max={4} step={1} />,
    },
    {
      id: 6,
      icon: <HeightIcon />,
      title: 'Výška ',
      container: <RangeSliderCustom min={1} max={200} step={1} />,
    },
    { id: 7, icon: <PhotoIcon />, title: 'Photo ', container: photoRadio },
    {
      id: 8,
      icon: <ProgramIcon />,
      title: 'Oblíbený program ',
      container: programRadio,
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
            <CustomButton styleType="primary" sizeType="default">
              Zobrazit
              {loading ? <Loader /> : `(${data?.listEmployee.totalCount})`}
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
