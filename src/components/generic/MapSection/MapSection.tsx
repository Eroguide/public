import { Container, Wrapper, ButtonMap } from './styles'
import Link from 'next/link'
export const MapSection: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Link href="/map" passHref>
          <ButtonMap>Podinky na mapě</ButtonMap>
        </Link>
      </Wrapper>
    </Container>
  )
}
