import { Container, Wrapper } from './styles'
import { Accordion } from '@/components/generic/Accordion'
import { FixturesFaqType } from '@/components/pages/FaqPage/types'
export const FaqContent: React.FC<FixturesFaqType> = ({ fixturesNav }) => {
  return (
    <Container>
      <Wrapper>
        <Accordion content={fixturesNav} />
      </Wrapper>
    </Container>
  )
}
