import { Container, Inner, ItemWrapper } from './styles'
import { LadyCard } from '@/components/generic'

export const LadiesGalleryWidget: React.FC = () => {
  const fixtures = [
    { id: '222dsadas', slug: 'one-project-time', best: 1 },
    { id: 'asddsad222sadasd', slug: 'two-project-time', best: 0 },
    { id: 'asdsad3242asd', slug: 'three-project-time', best: 0 },
    { id: 'asdsdadasfffsadasd', slug: 'four-project-time', best: 0 },
    { id: '222dsadassssd', slug: 'one-project-time', best: 1 },
    { id: 'asddsad222sadasssdsdsd', slug: 'two-project-time', best: 0 },
    { id: 'asdsad3242asdssdss', slug: 'three-project-time', best: 0 },
    { id: 'asdsdadasfffsadadsdsdsd', slug: 'four-project-time', best: 0 },
  ]
  return (
    <Container>
      <Inner>
        {fixtures.map((item) => (
          <ItemWrapper>
            <LadyCard key={item.id} href={item.id} />
          </ItemWrapper>
        ))}
      </Inner>
    </Container>
  )
}
