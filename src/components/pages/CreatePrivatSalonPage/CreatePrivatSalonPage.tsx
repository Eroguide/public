import {
  Container,
  Row,
  FormSection,
  FormTitle,
  FormDescription,
  FormInputList,
} from './styles'
import { BigInfoCard, BlackInfoCard, CustomButton } from '@/components/generic'
import { CustomInput } from '@/components/generic/CustomInput'

export const CreatePrivatSalonPage: React.FC = () => {
  return (
    <Container>
      <Row>
        <BigInfoCard
          title="Reduction
in advertising costs"
          details="Over time, many salons turned off or significantly reduced the expense in Yandex and Google ... as unnecessary;) The main audience is already at Eroguide."
        />
        <BigInfoCard
          title="I’am not an auditor"
          details="I will create an effective profile, highlighting the beauty and dignity of the masseuse in the photo."
        />
      </Row>
      <Row>
        <BlackInfoCard
          title1="I’am not an auditor"
          title2="I’am not an auditor"
          details1={
            'I will create an effective profile, highlighting the beauty and dignity of the masseuse in the photo.'
          }
          details2={
            'I will create an effective profile, highlighting the beauty and dignity of the masseuse in the photo.'
          }
        />
      </Row>

      <FormSection>
        <FormTitle>Aplication from salon representative</FormTitle>
        <FormDescription>
          I will be happy to answer all your questions. or we will discuss the
          date of the photo session convenient for you.
        </FormDescription>

        <FormInputList>
          <CustomInput type="text" placeholder="Salon name" />
          <CustomInput type="text" placeholder="Website (if have)" />
          <CustomInput type="text" placeholder="Your name" />
          <CustomInput type="email" placeholder="Email" />
          <CustomInput type="tel" placeholder="Phone" />
        </FormInputList>

        <CustomButton type={'submit'}>Send request</CustomButton>
      </FormSection>
    </Container>
  )
}
