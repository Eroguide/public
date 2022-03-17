import { Container, MainInfo, Description, ToggleButton, Left } from './styles'
import CircleCheckIcon from '/public/img/green-circle-check.svg'
import ChevronIcon from '/public/img/chevron.svg'
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

export const InfoCardCollapse: React.FC<InfoCardProps> = ({
  padding,
  margin,
  strokeColor,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <Container padding={padding} margin={margin} strokeColor={strokeColor}>
      <MainInfo onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <Left>
          <CircleCheckIcon />
          Prices confirmed
        </Left>

        <ToggleButton isOpen={isOpen}>
          <ChevronIcon />
        </ToggleButton>
      </MainInfo>
      <Description isOpen={isOpen} strokeColor={strokeColor}>
        {isOpen && (
          <>
            <span>Prices confirmed</span> - lorem ipsum dolor sit amet,
            consectetur adipisicing elit. A aliquam\n' + ' amet, architecto
            consectetur debitis deserunt eaque enim et excepturi\n' + '
            explicabo fugit id nam neque omnis ratione soluta, veniam vero\n' +
            ' voluptates.`
          </>
        )}
      </Description>
    </Container>
  )
}
