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
} from './styles'
import { CustomButton } from '@/components/generic'
import ChevronLeft from '/public/img/chevron-left.svg'

export const MainFilters: React.FC = () => {
  const da = <p>here comes filter</p>

  const filterList = [
    { id: 1, icon: <ChevronLeft />, title: 'Aktuální', container: da },
    { id: 2, icon: <ChevronLeft />, title: 'Věk', container: da },
    { id: 3, icon: <ChevronLeft />, title: 'Místo služby', container: da },
    { id: 4, icon: <ChevronLeft />, title: 'Postava', container: da },
    { id: 5, icon: <ChevronLeft />, title: 'Prsa', container: da },
    { id: 6, icon: <ChevronLeft />, title: 'Růst ', container: da },
    { id: 7, icon: <ChevronLeft />, title: 'Photo ', container: da },
    { id: 8, icon: <ChevronLeft />, title: 'Oblíbený program ', container: da },
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
            <Row key={filt.id}>
              <IconWrapper>{filt.icon}</IconWrapper>
              <span>{filt.title}</span>
              <Line />
            </Row>
          ))}
        </FiltersList>
      </Wrapper>
    </Container>
  )
}
