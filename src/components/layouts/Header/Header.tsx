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
import { useRouter } from 'next/router'
import Link from 'next/link'

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
            <img width="130" height="24" src="/img/logo.png" alt="" />
          </Logo>
          <Divider />
          <NavLink>Prague</NavLink>
        </LeftBlock>
        <RightBlock>
          <Link href="/about" passHref>
            <NavLink>About</NavLink>
          </Link>
          <Link href="/journal" passHref>
            <NavLink>Journal</NavLink>
          </Link>
          <HeartCounter />
          <PersonalLink>
            <PersonIcon />
          </PersonalLink>
        </RightBlock>
      </HeaderInner>
    </HeaderContainer>
  )
}
