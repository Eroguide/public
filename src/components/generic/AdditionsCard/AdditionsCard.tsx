import {
  Container,
  MainInfo,
  Description,
  IconWrapperAdditions,
  Left,
  Timer,
  IconWrapper,
  BottomRow,
  Price,
  Suffix,
  Content,
} from './styles'
import TimerIcon from '/public/img/timer-icon.svg'
import { numberWithSpaces } from '@/utils/helpers'
import { TExtraService } from '@/graphql/types/GetSalon'

export const AdditionsCard: React.FC<TExtraService> = (data) => {
  const { name, price, description } = data
  return (
    <Container>
      <MainInfo>
        <Left>
          <IconWrapperAdditions>
            <TimerIcon />
          </IconWrapperAdditions>
        </Left>
        <Content>
          <Description>{name + ' - ' + description}</Description>
        </Content>
      </MainInfo>

      <BottomRow>
        <Timer>
          <IconWrapper>
            <TimerIcon />
          </IconWrapper>
          <span>1 hour</span>
        </Timer>
        <Price>
          {price && numberWithSpaces(+price)}
          <Suffix>Kč/h</Suffix>
        </Price>
      </BottomRow>
    </Container>
  )
}
