import {
  Container,
  MainInfo,
  Description,
  ToggleButton,
  Left,
  Title,
  Details,
  Timer,
  IconWrapper,
  BottomRow,
  IconsRow,
  SingleIconWrapper,
  Price,
  Suffix,
  HiddenContentItem,
  IconWrapperHiddenContent,
} from './styles'
import TimerIcon from '/public/img/timer-icon.svg'
import ChevronIcon from '/public/img/chevron.svg'
import TwoPlusOne from '/public/img/twoplusone-massage.svg'
import OnePlusTwo from '/public/img/oneplustwo-massage.svg'
import TwoPlusTwo from '/public/img/twoplustwo-massage.svg'
import ReplaceIcon from '/public/img/replace-massage.svg'
import PeepIcon from '/public/img/peep-massage.svg'
import Kiss from '/public/img/kiss-massage.svg'
import Imitation from '/public/img/imitation-massage.svg'

const massageTypes = [
  {
    id: '1sads',
    text: 'Assumenda consectetur culpa dolorum ducimus.',
    icon: <TwoPlusTwo />,
  },
  {
    id: '2sads',
    text: 'Assumenda consectetur culpa dolorum ducimus.',
    icon: <Kiss />,
  },
  {
    id: '3sads',
    text: 'Assumenda consectetur culpa dolorum ducimus.',
    icon: <Imitation />,
  },
  {
    id: '4sads',
    text: 'Assumenda consectetur culpa dolorum ducimus.',
    icon: <PeepIcon />,
  },
  {
    id: '5sads',
    text: 'Assumenda consectetur culpa dolorum ducimus.',
    icon: <ReplaceIcon />,
  },
  {
    id: '6sads',
    text: 'Assumenda consectetur culpa dolorum ducimus.',
    icon: <OnePlusTwo />,
  },
  {
    id: '7sads',
    text: 'Assumenda consectetur culpa dolorum ducimus.',
    icon: <TwoPlusOne />,
  },
]
import { useState } from 'react'
export enum StrokeColorTypes {
  gray = 'gray',
  yellow = 'yellow',
  green = 'green',
}

export type InfoCardProps = {
  padding?: string
  margin?: string
  strokeColor?: keyof typeof StrokeColorTypes
}

export const MassageProgramCard: React.FC<InfoCardProps> = ({
  padding,
  margin,
  strokeColor,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <Container padding={padding} margin={margin} strokeColor={strokeColor}>
      <MainInfo onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <Left>
          <Title>Mamy Yami</Title>
          <Details>(basic program)</Details>
        </Left>
        <ToggleButton isOpen={isOpen}>
          <ChevronIcon />
        </ToggleButton>
      </MainInfo>

      <Timer>
        <IconWrapper>
          <TimerIcon />
        </IconWrapper>
        <span>1 hour</span>
      </Timer>

      <BottomRow>
        <IconsRow>
          {massageTypes.map((x) => (
            <SingleIconWrapper key={x.id}>{x.icon}</SingleIconWrapper>
          ))}
        </IconsRow>

        <Price>
          1500 <Suffix>Kč/h</Suffix>
        </Price>
      </BottomRow>

      <Description isOpen={isOpen}>
        <>
          {massageTypes.map((x, i) => (
            <HiddenContentItem key={x.id} delay={i} isOpen={isOpen}>
              <IconWrapperHiddenContent>{x.icon}</IconWrapperHiddenContent>
              <span>{x.text}</span>
            </HiddenContentItem>
          ))}
        </>
      </Description>
    </Container>
  )
}
