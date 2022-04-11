import { HeroFiltersContainer, HeroFiltersInner, Search } from './styles'
import { FilterScroll } from '@/components/generic/HeroFilters/FilterScroll'
import SearchIcon from './assets/search-icon.svg'
import Link from 'next/link'

export const HeroFilters: React.FC = () => {
  return (
    <HeroFiltersContainer>
      <HeroFiltersInner>
        <FilterScroll />
        <Link href="/search" passHref shallow>
          <Search>
            <SearchIcon />
          </Search>
        </Link>
      </HeroFiltersInner>
    </HeroFiltersContainer>
  )
}
