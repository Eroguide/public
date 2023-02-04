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

export const CreatePrivatLadyPage: React.FC = () => {
  const { handleSubmit, register } = useForm<InputApplication>({
    mode: 'onSubmit',
    shouldFocusError: true,
  })

  const [handleMutation] = useMutation(createApplication)

  const onSubmit = async (formData: InputApplication) => {
    const requestBody = {
      ...formData,
      type: CreateOptionEnum.privatLady,
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
