import { Container, Wrapper } from './styles'
import { PostCardWide } from '@/components/generic'
import { PaginationWidget } from '@/components/widgets/PaginationWidget'
import { ListPosts_listPosts_edges_node } from '@/graphql/types/ListPosts'
// const fixtures = [
//   { id: '222dsadas', slug: 'one-project-time', best: 1 },
//   { id: 'asddsad222sadasd', slug: 'two-project-time', best: 0 },
//   { id: 'asdsad3242asd', slug: 'three-project-time', best: 0 },
//   { id: 'asdsdadasfffsadasd', slug: 'four-project-time', best: 0 },
//   { id: 'asdxfsadasds', slug: 'four-project-time', best: 0 },
//   { id: 'asdsdadvadasd', slug: 'four-project-time', best: 0 },
//   { id: 'xfffsadasd', slug: 'four-project-time', best: 0, tag: 'dsd' },
// ]

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
