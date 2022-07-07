import { Container, Inner, ItemWrapper } from './styles'
import { LadyCard } from '@/components/generic'
import { ListEmployee_listEmployee_edges } from '@/graphql/types/ListEmployeeNew'

export const LadiesGalleryWidget: React.FC<{
  girls: Array<ListEmployee_listEmployee_edges>
}> = ({ girls }) => {
  return (
    <Container>
      <Inner>
        {girls.map((girl) => (
          <ItemWrapper key={girl.node.id}>
            <LadyCard href={girl.node.id} girl={girl.node} />
          </ItemWrapper>
        ))}
      </Inner>
    </Container>
  )
}
