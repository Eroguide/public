import {
  Container,
  Wrapper,
  CtaBlock,
  Title,
  Left,
  Right,
  ImageWrapper,
  OptionsList,
  OptionItem,
} from './styles'
import { CustomButton, RadioButtonInput } from '@/components/generic'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { CreateOptionEnum, OptionsArray } from './types'

// "Email of applicant"
// email: String!
// "ID"
// id: BigInt
// "Phone of applicant"
// phone: String!
// "status of application (canceled, considered, new)"
// status: String
// "Name of employee/salon"
// title: String!

const options: Array<OptionsArray> = [
  { id: 1, name: 'Privat Salon', slug: CreateOptionEnum.privatSalon },
  { id: 2, name: 'Massage Salon', slug: CreateOptionEnum.massageSalon },
  { id: 3, name: 'Privat masseuse', slug: CreateOptionEnum.privatMasseuse },
  { id: 4, name: 'Privat lady', slug: CreateOptionEnum.privatLady },
]

export const CreateHowPage: React.FC = () => {
  const { push } = useRouter()
  const [routingVariation, setRoutingVariation] = useState<
    CreateOptionEnum | undefined
  >()

  const handleClick = (): void => {
    if (routingVariation)
      push(`/create/${routingVariation}`, undefined, {
        shallow: false,
      })
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <CtaBlock>
            <Title>Continue us?</Title>
            <OptionsList>
              {options.map((item) => (
                <OptionItem
                  key={item.id}
                  onClick={() => setRoutingVariation(item.slug)}
                >
                  <RadioButtonInput label={item.name} name={'routing-how'} />
                </OptionItem>
              ))}
            </OptionsList>
            <CustomButton
              disabled={!routingVariation}
              onClick={() => handleClick()}
              styleType="primary"
            >
              Continue
            </CustomButton>
          </CtaBlock>
        </Left>
        <Right>
          <ImageWrapper />
        </Right>
      </Wrapper>
    </Container>
  )
}
