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
  RadioButtonCustom,
} from './styles'
import { CustomButton, RangeSliderCustom } from '@/components/generic'
import ChevronLeft from '/public/img/chevron-left.svg'
import AktualIcon from '/public/img/aktual-filter.svg'
import TimeIcon from '/public/img/time-filter.svg'
import PlaceIcon from '/public/img/place-filter.svg'
import BodyIcon from '/public/img/body-filter.svg'
import BreastIcon from '/public/img/breast-filter.svg'
import HeightIcon from '/public/img/height-filter.svg'
import PhotoIcon from '/public/img/photo-filter.svg'
import ProgramIcon from '/public/img/program-filter.svg'

export const MainFilters: React.FC = () => {
  const actualRadio = (
    <>
      <RadioButtonCustom title={'Na směně'} />
      <RadioButtonCustom title={'Nové slečny'} />
    </>
  )
  const ageFilter = (
    <>
      <CustomButton styleType={'tertiary'} sizeType={'small'}>
        18-22
      </CustomButton>
      <CustomButton styleType={'tertiary'} sizeType={'small'}>
        23-28
      </CustomButton>
      <CustomButton styleType={'tertiary'} sizeType={'small'}>
        29+
      </CustomButton>
    </>
  )
  const placeRadio = (
    <>
      <RadioButtonCustom title={'Masáže'} />
      <RadioButtonCustom title={'Privat'} />
      <RadioButtonCustom title={'Escort'} />
    </>
  )
  const bodyType = (
    <>
      <CustomButton styleType={'tertiary'} sizeType={'small'}>
        Hubená
      </CustomButton>
      <CustomButton styleType={'tertiary'} sizeType={'small'}>
        Normální
      </CustomButton>
      <CustomButton styleType={'tertiary'} sizeType={'small'}>
        Plnoštíhlá
      </CustomButton>
    </>
  )
  const photoRadio = (
    <>
      <RadioButtonCustom title={'Ověřeno Eroguide'} />
      <RadioButtonCustom title={'Vlastní'} />
    </>
  )
  const programRadio = (
    <>
      <RadioButtonCustom title={'peep-show'} />
      <RadioButtonCustom title={'sakura branch'} />
      <RadioButtonCustom title={'foot fetish'} />
      <RadioButtonCustom title={'urological massage'} />
    </>
  )

  const da = <>dada</>

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
      container: <RangeSliderCustom min={1} max={4} />,
    },
    {
      id: 6,
      icon: <HeightIcon />,
      title: 'Výška ',
      container: <RangeSliderCustom min={1} max={4} />,
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
            <ReturnButton>
              <ChevronLeft />
            </ReturnButton>
          </Left>
          <Right>
            <CustomButton styleType="primary" sizeType="default">
              Zobrazit (386)
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
