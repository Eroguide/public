import {
  Container,
  Wrapper,
  Divider,
  FilterPanel,
  LeftFilters,
  RightFilters,
} from './styles'
import { PostCardWide } from '@/components/generic'
const fixtures = [
  { id: '222dsadas', slug: 'one-project-time', best: 1 },
  { id: 'asddsad222sadasd', slug: 'two-project-time', best: 0 },
  { id: 'asdsad3242asd', slug: 'three-project-time', best: 0 },
  { id: 'asdsdadasfffsadasd', slug: 'four-project-time', best: 0 },
  { id: 'asdxfsadasd', slug: 'four-project-time', best: 0 },
  { id: 'asdsdadvadasd', slug: 'four-project-time', best: 0 },
  { id: 'xfffsadasd', slug: 'four-project-time', best: 0, tag: 'dsd' },
]

export const GalleryContent: React.FC = () => {
  return (
    <>
      <FilterPanel>
        <LeftFilters>Buttons</LeftFilters>
        <RightFilters>1756 posts</RightFilters>
      </FilterPanel>
      <Container>
        <Wrapper>
          {fixtures.map((item) => (
            <PostCardWide key={item.id} {...item} />
          ))}
          Pagination will be here...
        </Wrapper>
      </Container>
    </>
  )
}
