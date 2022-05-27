import { Container, Row } from './styles'
import { BigInfoCard, BlackInfoCard } from '@/components/generic'

export const AboutPage: React.FC = () => {
  return (
    <Container>
      <Row>
        <BigInfoCard
          title="All under
your controll"
          details="You can manage your profile yourself in your personal account. Turn it on and off every day, as well as change the basic information in it!

Submit your questionnaire for just a few days to be sure of its effectiveness!"
        />
        <BigInfoCard
          title="I’am not
an auditor"
          details="I will create an effective profile, highlighting the beauty and dignity of the masseuse in the photo."
        />
      </Row>
      <Row>
        <BlackInfoCard
          title1="When not all topics are covered in the questionnaire"
          title2="looks good, I'll take a chance"
          details1="When not all topics are covered in the questionnaire"
          details2="looks good, I'll take a chance"
        />
      </Row>
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
        <BlackInfoCard
          title1="Enough tolerating this!"
          title2="Enough tolerating this!"
          details1="i created my own project"
          details2="i created my own project"
        />
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
        <BlackInfoCard
          title1="How do i select a ladys"
          details1="looks good, I'll take a chance"
          title2="When not all topics are covered in the questionnaire"
          details2="looks good, I'll take a chance"
        />
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
