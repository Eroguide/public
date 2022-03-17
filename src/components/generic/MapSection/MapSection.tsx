import { Container, Wrapper } from './styles'
import { CustomButton } from '@/components/generic'
export const MapSection: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <CustomButton styleType={'primary'} isLink href="/map">
          Podinky na mapě
        </CustomButton>
      </Wrapper>
    </Container>
  )
}
