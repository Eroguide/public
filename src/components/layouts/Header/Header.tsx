import {
  HeaderContainer,
  Logo,
  LeftBlock,
  RightBlock,
  Divider,
  NavLink,
  PersonalLink,
  HeaderInner,
} from './styles'
import { HeartCounter } from '@/components/layouts/Header/HeartCounter'
import PersonIcon from './assets/person-icon.svg'

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <LeftBlock>
          <Logo>
            <img src="/img/logo.png" alt="" />
          </Logo>
          <Divider />
          <NavLink>Prague</NavLink>
        </LeftBlock>
        <RightBlock>
          <NavLink>About</NavLink>
          <NavLink>Journal</NavLink>
          <HeartCounter counterValue={5} />
          <PersonalLink>
            <PersonIcon />
          </PersonalLink>
        </RightBlock>
      </HeaderInner>
    </HeaderContainer>
  )
}
