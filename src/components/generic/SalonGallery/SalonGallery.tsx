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
// import { NextPage } from 'next'
import { ListSalons_listSalons_edges_node } from '@/graphql/types/ListSalons'
export const SalonGallery: React.FC<{
  listSalons: Array<ListSalons_listSalons_edges_node>
}> = ({ listSalons }) => {
  return (
    <>
      <TitlePanel>
        <LeftFilters>
          <Counter>Salons: 136</Counter>
        </LeftFilters>
      </TitlePanel>
      <Container>
        <Wrapper>
          {listSalons.map((item) => (
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
