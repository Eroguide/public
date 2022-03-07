import { Container, Wrapper } from './styles'
import Link from 'next/link'
import { CustomButton } from '@/components/generic'
export const MapSection: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Link href="/map" passHref>
          <CustomButton styleType={'primary'} isLink>
            Podinky na mapě
          </CustomButton>
        </Link>
      </Wrapper>
    </Container>
  )
}
