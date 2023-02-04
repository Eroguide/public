import {
  Container,
  Row,
  FormSection,
  FormTitle,
  FormDescription,
  FormInputList,
} from './styles'
import { BigInfoCard, BlackInfoCard, CustomButton } from '@/components/generic'
import { useForm } from 'react-hook-form'
import {
  CreateOptionEnum,
  InputApplication,
} from '@/components/pages/CreateHowPage/types'
import { useMutation } from '@apollo/client'
import { createApplication } from '@/graphql/queries.graphql'
import { Input } from '@/components/generic/CustomInput/styles'

export const CreatePrivatMasseusePage: React.FC = () => {
  const { handleSubmit, register } = useForm<InputApplication>({
    mode: 'onSubmit',
    shouldFocusError: true,
  })

  const [handleMutation] = useMutation(createApplication)

  const onSubmit = async (formData: InputApplication) => {
    const requestBody = {
      ...formData,
      type: CreateOptionEnum.privatMasseuse,
      status: 'new',
    }
    await handleMutation({
      variables: {
        application: requestBody,
      },
    })
  }
  return (
    <Container>
      <Row>
        <BigInfoCard
          title="All under your control"
          details="You can manage your profile yourself in your personal account. Turn it on and off every day, as well as change the basic information in it!
Submit your questionnaire for just a few days to be sure of its effectiveness!"
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
        <FormTitle>Add the profile of a private masseuse</FormTitle>
        <FormDescription>
          Leave a request and I will send you personal access profile where you
          upload your photos and description.
        </FormDescription>

        <FormInputList>
          <Input
            {...register('title')}
            id={'title'}
            type="text"
            placeholder="Salon name"
            required
          />
          <Input {...register('email')} type="email" placeholder="Email" />
          <Input {...register('phone')} type="tel" placeholder="Phone" />
        </FormInputList>

        <CustomButton onClick={handleSubmit(onSubmit)} type={'submit'}>
          Send request
        </CustomButton>
      </FormSection>
    </Container>
  )
}
