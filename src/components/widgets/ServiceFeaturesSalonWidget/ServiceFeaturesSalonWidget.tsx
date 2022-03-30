import {
  Container,
  IconWrapper,
  Row,
  Title,
  FeatureList,
  FeatureItem,
  Wrapper,
} from './styles'

import DoorIcon from '/public/img/salon-feature-door.svg'
import RoomIcon from '/public/img/salon-feature-room.svg'
import ShowerIcon from '/public/img/salon-feature-shower.svg'
import RoleIcon from '/public/img/salon-feature-roleplay.svg'
import GirlsIcon from '/public/img/salon-feature-girlsshift.svg'
import CardIcon from '/public/img/salon-feature-card.svg'
import BarIcon from '/public/img/salon-feature-minibar.svg'
import FoodIcon from '/public/img/salon-feature-food.svg'
const fixtures = [
  { id: '222dsadas', slug: '8 massage rooms', best: 1, icon: <DoorIcon /> },
  {
    id: 'asddsad222sadasd',
    slug: 'all rooms with shower',
    best: 0,
    icon: <ShowerIcon />,
  },
  {
    id: 'asdsad3242asd',
    slug: 'room selection',
    best: 0,
    icon: <RoomIcon />,
  },
  {
    id: 'asdsdadasfffsadasd',
    slug: 'selection of role-playing costumes',
    best: 0,
    icon: <RoleIcon />,
  },
  {
    id: '222dsadassssd',
    slug: 'at least 8 girls in the shift',
    best: 1,
    icon: <GirlsIcon />,
  },
  {
    id: 'asddsad222sadasssdsdsd',
    slug: 'accept card',
    best: 0,
    icon: <CardIcon />,
  },
  {
    id: 'asdsad3242asdssdss',
    slug: 'mini bar',
    best: 0,
    icon: <BarIcon />,
  },
  {
    id: 'asdsdadasfffsadadsdsdsd',
    slug: 'food delivery',
    best: 0,
    icon: <FoodIcon />,
  },
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
              <IconWrapper>{item.icon}</IconWrapper>
              <span>{item.slug}</span>
            </FeatureItem>
          ))}
        </FeatureList>
      </Container>
    </Wrapper>
  )
}
