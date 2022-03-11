import { Container, Wrapper, IconWrapper, Label, NavItem } from './styles'
import Icon from '/public/img/heart-lined.svg'
export const FaqNav: React.FC<{
  navOption: Array<{ label: string; value: string }>
}> = ({ navOption }) => {
  return (
    <Container>
      <Wrapper>
        {navOption.map((navItem) => (
          <NavItem key={navItem.value}>
            <IconWrapper>
              <Icon />
            </IconWrapper>
            <Label>{navItem.label}</Label>
          </NavItem>
        ))}
      </Wrapper>
    </Container>
  )
}
