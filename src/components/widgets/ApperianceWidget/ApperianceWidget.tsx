import { Container, Inner, ParameterItem } from './styles'
import Icon from '/public/img/sand-watch-icon.svg'
export const ApperianceWidget: React.FC = () => {
  return (
    <Container>
      <Inner>
        <ParameterItem>
          <Icon />
          Age:
          <span>28</span>
        </ParameterItem>
        <ParameterItem>
          <Icon />
          Age:
          <span>28</span>
        </ParameterItem>
        <ParameterItem>
          <Icon />
          Age:
          <span>28</span>
        </ParameterItem>
        <ParameterItem>
          <Icon />
          Age:
          <span>28</span>
        </ParameterItem>
      </Inner>
    </Container>
  )
}
