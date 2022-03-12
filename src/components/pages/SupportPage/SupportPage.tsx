import { Container, Row } from './styles'
import {
  BigInfoCard,
  BlackInfoCard,
} from '@/components/pages/SupportPage/SupportPage'

export const SupportPage: React.FC = () => {
  return (
    <Container>
      <Row>
        <BigInfoCard
          title="When the selection process beats all desire"
          details="so where would you like to go today?"
        />
        <BigInfoCard
          title="It's been five hours"
          details="not real photos, do not answer the call, does not work there anymore"
        />
      </Row>
      <Row>
        <BlackInfoCard />
      </Row>
      <Row>
        <BigInfoCard
          title="When an admin has a specific sense of humor..."
          details="our ladies are waiting for you"
        />
        <BigInfoCard
          title="You come and there"
          details="I was joking, she's not here today"
        />
      </Row>
      <Row>
        <BlackInfoCard />
      </Row>
      <Row>
        <BigInfoCard title="Simple rules" />
        <BigInfoCard
          title={`I am an esthete, so I do not place everyone in a row. You do not you will find on the site frankly "terrible"`}
        />
      </Row>
    </Container>
  )
}
