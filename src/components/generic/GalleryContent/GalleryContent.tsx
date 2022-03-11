import { Container, Wrapper } from './styles'
import { PostCardWide } from '@/components/generic'
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

export const GalleryContent: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        {fixtures.map((item) => (
          <PostCardWide key={item.id} {...item} />
        ))}
        <PaginationWidget itemsPerPage={4} />
      </Wrapper>
    </Container>
  )
}
