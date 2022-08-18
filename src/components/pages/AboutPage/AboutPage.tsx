import { Container, Row } from './styles'
import { BigInfoCard, BlackInfoCard } from '@/components/generic'

export const AboutPage: React.FC = () => {
  return (
    <Container>
      <Row>
        <BigInfoCard
          image={'img/mascot/planshet.jpg'}
          title="When the selection process beats all desire"
          details="so where would you like to go today?"
        />
        <BigInfoCard
          image={'img/mascot/facepalm.jpg'}
          title="It's been five hours"
          details="I will create an effective profile, highlighting the beauty and dignity of the masseuse in the photo."
        />
      </Row>
      <Row>
        <BlackInfoCard
          image={'img/mascot/mobile.jpg'}
          image2={'img/mascot/frame-back-1.jpg'}
          title1="When not all topics are covered in the questionnaire"
          details1="When not all topics are covered in the questionnaire"
          title2="And what is the result"
          details2="in fact, not what was shown in the questionnaire"
        />
      </Row>
      <Row>
        <BigInfoCard
          image={'img/mascot/calling.jpg'}
          title="When the selection process beats all desire"
          details="so where would you like to go today?"
        />
        <BigInfoCard
          image={'img/mascot/girl.jpg'}
          title="It's been five hours"
          details="not real photos, do not answer the call, does not work there anymore"
        />
      </Row>
      <Row>
        <BlackInfoCard
          image={'img/mascot/tolerant22.jpg'}
          image2={'img/mascot/tolerant22.jpg'}
          title1="Enough tolerating this!"
          title2="Enough tolerating this!222"
          details1="i created my own project"
          details2="i created my own project222"
        />
      </Row>
      <Row>
        <BigInfoCard
          image={'img/mascot/simple.jpg'}
          title="Simple rules"
          details={`
I am an esthete, so I do not place everyone in a row. You do not you will find on the site frankly "terrible"`}
        />
        <BigInfoCard
          image={'img/mascot/art.jpg'}
          title="How do I select ladies ?"
          details="not real photos, do not answer the call, does not work there anymore"
        />
      </Row>
      <Row>
        <BlackInfoCard
          image={'img/mascot/photo.jpg'}
          image2={'img/mascot/last22.jpg'}
          title1="How do i select ladies ?"
          details1="looks good, I'll take a chance"
          title2="When not all topics are covered in the questionnaire"
          details2="looks good, I'll take a chance"
        />
      </Row>
      <Row>
        <BigInfoCard image={'img/mascot/everyday.jpg'} title="Simple rules" />
        <BigInfoCard
          image={'img/mascot/checklist.jpg'}
          title={`I am an esthete, so I do not place everyone in a row. You do not you will find on the site frankly "terrible"`}
        />
      </Row>
    </Container>
  )
}
