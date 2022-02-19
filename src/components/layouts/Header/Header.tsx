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
import { HeartCounterWrapper } from '@/components/layouts/Header/HeartCounter/styles'
import { useRouter } from 'next/router'

export const Header: React.FC = () => {
  const { push } = useRouter()
  return (
    <HeaderContainer>
      <HeaderInner>
        <LeftBlock>
          <Logo
            onClick={() =>
              push('/', undefined, {
                shallow: true,
              })
            }
          >
            <img src="/img/logo.png" alt="" />
          </Logo>
          <Divider />
          <NavLink>Prague</NavLink>
        </LeftBlock>
        <RightBlock>
          <NavLink>About</NavLink>
          <NavLink>Journal</NavLink>
          <HeartCounter />
          <PersonalLink>
            <PersonIcon />
          </PersonalLink>
        </RightBlock>
      </HeaderInner>
    </HeaderContainer>
  )
}
