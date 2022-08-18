import {
  HeroFiltersContainer,
  HeroFiltersInner,
  Search,
  HomeButton,
} from './styles'
import { FilterScroll } from '@/components/generic/HeroFilters/FilterScroll'
import SearchIcon from './assets/search-icon.svg'
import HomeIcon from '/public/img/home-icon.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AllCounters_getCounters } from '@/graphql/types/GetAllCounters'

export const HeroFilters: React.FC<{ counters: AllCounters_getCounters }> = ({
  counters,
}) => {
  const router = useRouter()

  return (
    <HeroFiltersContainer>
      <HeroFiltersInner>
        <Link href="/" passHref>
          <HomeButton isActive={router.asPath === '/'}>
            <HomeIcon />
          </HomeButton>
        </Link>
        <FilterScroll counters={counters} />
        <Link href="/search" passHref shallow>
          <Search>
            <SearchIcon />
          </Search>
        </Link>
      </HeroFiltersInner>
    </HeroFiltersContainer>
  )
}
