import { Container, Wrapper } from './styles'
import { PostCardWide } from '@/components/generic'
import { PaginationWidget } from '@/components/widgets/PaginationWidget'
import { ListPosts_listPosts_edges_node } from '@/graphql/types/ListPosts'

export const GalleryContent: React.FC<{
  content: Array<ListPosts_listPosts_edges_node>
}> = ({ content }) => {
  return (
    <Container>
      <Wrapper>
        {content &&
          content.map((item) => <PostCardWide key={item.id} {...item} />)}
        <PaginationWidget itemsPerPage={4} />
      </Wrapper>
    </Container>
  )
}
