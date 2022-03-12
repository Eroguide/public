import {
  HeaderContainer,
  Logo,
  LeftBlock,
  RightBlock,
  Divider,
  BurgerButton,
  HeaderInner,
  LogoWrapper,
  SearchIconWrapper,
  BurgerIconWrapper,
} from './styles'
import { HeartCounter } from '@/components/layouts/Header/HeartCounter'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { breakpoints, BreakpointsEnum } from '@/src/theme'
import LogoIconMobile from '/public/img/logo-mobile.svg'
import SearchIcon from '/public/img/search-header-icon.svg'
import BurgerIcon from '/public/img/burger-icon.svg'
import { CustomButton, FloatingNavigation } from '@/components/generic'
import { useRef, useState } from 'react'
import { useClickOutside } from '@/hooks/useClickOutside'

export const Header: React.FC = () => {
  const { push } = useRouter()
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  const isSmall = useBreakpoint({
    min: breakpoints[BreakpointsEnum.xxs].min,
    max: breakpoints[BreakpointsEnum.sm].max,
  })
  const goHome = (): void => {
    push('/', undefined, {
      shallow: false,
    })
  }
  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref, () => setMenuIsOpen(false))

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
          <Link href="/map" passHref>
            <CustomButton styleType="link" isLink>
              Prague
            </CustomButton>
          </Link>
        </LeftBlock>
        <RightBlock>
          {!isSmall && (
            <>
              <Link href="/about" passHref>
                <CustomButton styleType="link" isLink margin="0 20px">
                  About
                </CustomButton>
              </Link>
              <Link href="/journal" passHref>
                <CustomButton styleType="link" isLink margin="0 20px">
                  Journal
                </CustomButton>
              </Link>
            </>
          )}
          {isSmall && (
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          )}
          <HeartCounter />
          <BurgerButton ref={ref}>
            <BurgerIconWrapper onClick={() => setMenuIsOpen(!menuIsOpen)}>
              <BurgerIcon />
            </BurgerIconWrapper>
            {menuIsOpen && <FloatingNavigation />}
          </BurgerButton>
        </RightBlock>
      </HeaderInner>
    </HeaderContainer>
  )
}
