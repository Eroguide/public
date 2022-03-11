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
import { CustomButton, RadioButton } from '@/components/generic'
import { useState } from 'react'
import { useRouter } from 'next/router'

export enum CreateOptionEnum {
  massageSalon = 'massage-salon',
  privatSalon = 'privat-salon',
  privatMasseuse = 'privat-masseuse',
  privatLady = 'privat-lady',
}

type OptionsArray = {
  id: number
  name: string
  slug: CreateOptionEnum
}

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
                  <RadioButton title={item.name} />
                </OptionItem>
              ))}
            </OptionsList>
            <CustomButton
              disabled={!routingVariation}
              onClick={() => handleClick()}
              styleType={routingVariation ? 'primary' : 'tertiary'}
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
