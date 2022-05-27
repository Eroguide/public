import { Container, Inner, ItemWrapper } from './styles'
import { LadyCard } from '@/components/generic'

export const LadiesGalleryWidget: React.FC = () => {
  const fixtures = [
    { id: '222dsadas', slug: 'one-project-time', best: 1 },
    { id: 'asddsad222sadasd', slug: 'two-project-time', best: 0 },
    { id: 'asffd', slug: 'three-project-time', best: 0 },
    { id: 'asdsdadasfffsadasd', slug: 'four-project-time', best: 0 },
    { id: '222dsadassssd', slug: 'one-project-time', best: 1 },
    { id: 'asddsad222sadasssdsdsd', slug: 'two-project-time', best: 0 },
    { id: 'asdsad3242asdssdss', slug: 'three-project-time', best: 0 },
    { id: 'asdsda1dsdsd', slug: 'four-project-time', best: 0 },
    { id: 'asd4dsdsd', slug: 'four-project-time', best: 0 },
    { id: 'asds22dsd', slug: 'four-project-time', best: 0 },
    { id: 'asdsdasdsdsd', slug: 'four-project-time', best: 0 },
    { id: 'hhhhh', slug: 'four-project-time', best: 0 },
    { id: 'jjj', slug: 'four-project-time', best: 0 },
  ]
  return (
    <Container>
      <Inner>
        {fixtures.map((item) => (
          <ItemWrapper key={item.id}>
            <LadyCard href={item.id} />
          </ItemWrapper>
        ))}
      </Inner>
    </Container>
  )
}
