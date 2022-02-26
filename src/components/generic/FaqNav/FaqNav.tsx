import { Container, Wrapper, IconWrapper, Label, NavItem } from './styles'
import Icon from '/public/img/heart-lined.svg'
export const FaqNav: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <NavItem>
          <IconWrapper>
            <Icon />
          </IconWrapper>
          <Label>Navigation title</Label>
        </NavItem>
        <NavItem>
          <IconWrapper>
            <Icon />
          </IconWrapper>
          <Label>Navigation title</Label>
        </NavItem>
        <NavItem>
          <IconWrapper>
            <Icon />
          </IconWrapper>
          <Label>Navigation title</Label>
        </NavItem>
        <NavItem>
          <IconWrapper>
            <Icon />
          </IconWrapper>
          <Label>Navigation title</Label>
        </NavItem>
      </Wrapper>
    </Container>
  )
}
