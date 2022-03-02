import {
  HeaderContainer,
  Logo,
  LeftBlock,
  RightBlock,
  Divider,
  NavLink,
  PersonalLink,
  HeaderInner,
  LogoWrapper,
  SearchIconWrapper,
} from './styles'
import { HeartCounter } from '@/components/layouts/Header/HeartCounter'
import PersonIcon from './assets/person-icon.svg'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { breakpoints, BreakpointsEnum } from '@/src/theme'
import LogoIconMobile from '/public/img/logo-mobile.svg'
import SearchIcon from '/public/img/search-header-icon.svg'

export const Header: React.FC = () => {
  const { push } = useRouter()
  const isSmall = useBreakpoint({
    min: breakpoints[BreakpointsEnum.xxs].min,
    max: breakpoints[BreakpointsEnum.sm].max,
  })

  const goHome = (): void => {
    push('/', undefined, {
      shallow: true,
    })
  }
  return (
    <HeaderContainer>
      <HeaderInner>
        <LeftBlock>
          {isSmall ? (
            <LogoWrapper onClick={() => goHome()}>
              <LogoIconMobile />
            </LogoWrapper>
          ) : (
            <Logo src="/img/logo.png" alt="" onClick={() => goHome()} />
          )}
          <Divider />
          <NavLink>Prague</NavLink>
        </LeftBlock>
        <RightBlock>
          {!isSmall && (
            <>
              <Link href="/about" passHref>
                <NavLink>About</NavLink>
              </Link>
              <Link href="/journal" passHref>
                <NavLink>Journal</NavLink>
              </Link>
            </>
          )}
          {isSmall && (
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          )}
          <HeartCounter />
          <PersonalLink>
            <PersonIcon />
          </PersonalLink>
        </RightBlock>
      </HeaderInner>
    </HeaderContainer>
  )
}
