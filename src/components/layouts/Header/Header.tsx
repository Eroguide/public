import {
  HeaderContainer,
  Logo,
  LeftBlock,
  RightBlock,
  Divider,
  BurgerButton,
  HeaderInner,
  LogoWrapper,
  MapPinIconWrapper,
  BurgerIconWrapper,
  LocationText,
  MobileFloatMenuWrapper,
  CloseButton,
} from './styles'
import { HeartCounter } from '@/components/layouts/Header/HeartCounter'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { breakpoints, BreakpointsEnum } from '@/src/theme'
import LogoIconMobile from '/public/img/logo-mobile.svg'
import PinIcon from '/public/img/location-pin-icon.svg'
import BurgerIcon from '/public/img/burger-icon.svg'
import { FloatingNavigation } from '@/components/generic'
import { useRef, useState } from 'react'
import { useClickOutside } from '@/hooks/useClickOutside'
import CloseIcon from '/public/img/cross-icon.svg'
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
            <LogoWrapper onClick={() => goHome()}>
              <Logo src="/img/logo.png" alt="" />
            </LogoWrapper>
          )}
          <Divider />
          <LocationText>Praha</LocationText>
        </LeftBlock>
        <RightBlock>
          <Link href="/map" passHref>
            <MapPinIconWrapper>
              <PinIcon />
            </MapPinIconWrapper>
          </Link>
          <HeartCounter />
          {!isSmall ? (
            <BurgerButton ref={ref}>
              <BurgerIconWrapper onClick={() => setMenuIsOpen(!menuIsOpen)}>
                <BurgerIcon />
              </BurgerIconWrapper>
              {menuIsOpen && <FloatingNavigation />}
            </BurgerButton>
          ) : (
            <BurgerButton ref={ref}>
              <BurgerIconWrapper onClick={() => setMenuIsOpen(!menuIsOpen)}>
                {!menuIsOpen ? (
                  <BurgerIcon />
                ) : (
                  <CloseButton>
                    <CloseIcon />
                  </CloseButton>
                )}
              </BurgerIconWrapper>
              {menuIsOpen && (
                <MobileFloatMenuWrapper>
                  <FloatingNavigation />
                </MobileFloatMenuWrapper>
              )}
            </BurgerButton>
          )}
        </RightBlock>
      </HeaderInner>
    </HeaderContainer>
  )
}
