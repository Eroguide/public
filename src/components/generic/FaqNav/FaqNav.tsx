import { FaqNavContainer, Wrapper, IconWrapper, Label, NavItem } from './styles'
import { FaqNavProps } from './types'

export const FaqNav: React.FC<FaqNavProps> = ({
  navOption,
  handleFaqSectionValue,
  valueIsActive,
}) => {
  return (
    <FaqNavContainer>
      <Wrapper>
        {navOption.map((navItem) => (
          <NavItem
            key={navItem.value}
            onClick={() => handleFaqSectionValue(navItem.value)}
            isActive={valueIsActive === navItem.value}
          >
            <IconWrapper>{navItem.icon}</IconWrapper>
            <Label>{navItem.label}</Label>
          </NavItem>
        ))}
      </Wrapper>
    </FaqNavContainer>
  )
}
