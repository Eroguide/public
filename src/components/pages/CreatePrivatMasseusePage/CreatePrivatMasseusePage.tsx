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

export const CreatePrivatMasseusePage: React.FC = () => {
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
          title="It's been five hours"
          details="not real photos, do not answer the call, does not work there anymore"
        />
      </Row>
      <Row>
        <BlackInfoCard />
      </Row>

      <FormSection>
        <FormTitle>Add the profile of a private masseuse</FormTitle>
        <FormDescription>
          Leave a request and I will send you personal access profile where you
          upload your photos and description.
        </FormDescription>

        <FormInputList>
          <CustomInput type="text" placeholder="Name" />
          <CustomInput type="email" placeholder="Email" />
          <CustomInput type="tel" placeholder="Phone" />
        </FormInputList>

        <CustomButton type={'submit'}>Send request</CustomButton>
      </FormSection>
    </Container>
  )
}
