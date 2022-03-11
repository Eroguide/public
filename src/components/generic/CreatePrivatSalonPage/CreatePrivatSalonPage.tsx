import {
  Container,
  Row,
  FormSection,
  FormTitle,
  FormDescription,
  FormInputList,
} from './styles'
import { BigInfoCard, BlackInfoCard, CustomButton } from '@/components/generic/'
import { CustomInput } from '@/components/generic/CustomInput'

export const CreatePrivatSalonPage: React.FC = () => {
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
