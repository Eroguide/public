import Scrollbars from 'react-custom-scrollbars'

import {
  FilterScrollContainer,
  FilterCategory,
  FilterCounter,
  CategoryTitle,
  InnerContainer,
  ThumbHorizontal,
  TrackHorizontal,
} from './styles'

const options = [
  'All',
  'New',
  'Best',
  'On shift',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
  'Salons',
  'Privat',
]

export const FilterScroll: React.FC = () => {
  return (
    <FilterScrollContainer>
      <Scrollbars
        renderTrackHorizontal={() => <TrackHorizontal />}
        renderThumbHorizontal={() => <ThumbHorizontal />}
        renderTrackVertical={() => <div />}
        renderThumbVertical={() => <div />}
        style={{ height: '64px', width: 'calc(100% - 64px)' }}
        universal
      >
        <InnerContainer width={options.length * 130}>
          {options.map((option) => (
            <FilterCategory key={option}>
              <CategoryTitle>{option}</CategoryTitle>
              <FilterCounter>232</FilterCounter>
            </FilterCategory>
          ))}
        </InnerContainer>
      </Scrollbars>
    </FilterScrollContainer>
  )
}
