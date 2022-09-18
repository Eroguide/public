import { Container, Inner, ItemWrapper } from './styles'
import { LadyCard } from '@/components/generic'
import { ListEmployee_listEmployee_edges_node } from '@/graphql/types/ListEmployee'
import { ListLocation_listLocation_salon_staff } from '@/graphql/types/ListLocations'

export const LadiesGalleryWidget: React.FC<{
  girls: Array<
    ListLocation_listLocation_salon_staff | ListEmployee_listEmployee_edges_node
  >
}> = ({ girls }) => {
  return (
    <Container>
      <Inner>
        {girls.map((girl) => (
          <ItemWrapper key={girl.id}>
            <LadyCard href={girl.id} girl={girl} />
          </ItemWrapper>
        ))}
      </Inner>
    </Container>
  )
}
