import {
  Container,
  IconWrapper,
  Row,
  Title,
  FeatureList,
  FeatureItem,
  Wrapper,
} from './styles'

import Heart from '/public/img/heart.svg'
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
export const ServiceFeaturesSalonWidget: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Title>Service features</Title>
        </Row>
        <FeatureList>
          {fixtures.map((item) => (
            <FeatureItem key={item.id}>
              <IconWrapper>
                <Heart />
              </IconWrapper>
              <span>8 massage rooms</span>
            </FeatureItem>
          ))}
        </FeatureList>
      </Container>
    </Wrapper>
  )
}
