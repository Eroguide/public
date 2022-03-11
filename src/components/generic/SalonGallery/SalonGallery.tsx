import {
  Container,
  Wrapper,
  TitlePanel,
  LeftFilters,
  Counter,
  GalleryItem,
} from './styles'
import { SalonCard } from '@/components/generic'
import { PaginationWidget } from '@/components/widgets/PaginationWidget'
const fixtures = [
  { id: '222dsadas', slug: 'one-project-time', best: 1 },
  { id: 'asddsad222sadasd', slug: 'two-project-time', best: 0 },
  { id: 'asdsad3242asd', slug: 'three-project-time', best: 0 },
  { id: 'asdsdadasfffsadasd', slug: 'four-project-time', best: 0 },
  { id: 'asdxfsadasd', slug: 'four-project-time', best: 0 },
  { id: 'asdsdadvadasd', slug: 'four-project-time', best: 0 },
  { id: 'xfffsadasd', slug: 'four-project-time', best: 0, tag: 'dsd' },
]

export const SalonGallery: React.FC = () => {
  return (
    <>
      <TitlePanel>
        <LeftFilters>
          <Counter>Salons: 136</Counter>
        </LeftFilters>
      </TitlePanel>
      <Container>
        <Wrapper>
          {fixtures.map((item) => (
            <GalleryItem key={item.id}>
              <SalonCard {...item} inSwipe />
            </GalleryItem>
          ))}
        </Wrapper>
        <PaginationWidget itemsPerPage={4} />
      </Container>
    </>
  )
}
