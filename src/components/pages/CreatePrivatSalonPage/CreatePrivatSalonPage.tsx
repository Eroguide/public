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

export const CreatePrivatSalonPage: React.FC = () => {
  const { handleSubmit, register } = useForm<InputApplication>({
    mode: 'onSubmit',
    shouldFocusError: true,
  })

  const [handleMutation] = useMutation(createApplication)

  const onSubmit = async (formData: InputApplication) => {
    const requestBody = {
      ...formData,
      type: CreateOptionEnum.privatSalon,
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
