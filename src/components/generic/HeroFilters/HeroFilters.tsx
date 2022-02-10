import { HeroFiltersContainer, HeroFiltersInner, Search } from './styles'
import { FilterScroll } from '@/components/generic/HeroFilters/FilterScroll'
import SearchIcon from './assets/search-icon.svg'

export const HeroFilters: React.FC = () => {
  return (
    <HeroFiltersContainer>
      <HeroFiltersInner>
        <FilterScroll />
        <Search>
          <SearchIcon />
        </Search>
      </HeroFiltersInner>
    </HeroFiltersContainer>
  )
}
