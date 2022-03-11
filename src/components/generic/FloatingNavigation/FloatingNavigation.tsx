import {
  Container,
  Wrapper,
  Content,
  NavSection,
  Divider,
  NavItem,
  IconWrapper,
  Title,
  Counter,
} from './styles'

import ShoeIcon from '/public/img/shoe-nav-icon.svg'
import SalonIcon from '/public/img/salon-nav-icon.svg'
import HeartIcon from '/public/img/heart-lined.svg'
import HeartsIcon from '/public/img/hearts-privat-salon-nav-icon.svg'
import ThumbIcon from '/public/img/thumb-up-nav-icon.svg'
import InfoIcon from '/public/img/faq-nav-icon.svg'
import BlogIcon from '/public/img/blog-nav-icon.svg'
import AboutIcon from '/public/img/about-nav-icon.svg'
import { CtaWidget } from '@/components/widgets/CtaWidget'
import Link from 'next/link'
import { useClickOutside } from '@/hooks/useClickOutside'
import { Dispatch, SetStateAction, useRef } from 'react'

export type MobileNavItemType = {
  id: string
  title: string
  counter?: number
  icon: JSX.Element | React.ReactNode
  href: string
}
export type MobileNavList = Record<string, Array<MobileNavItemType>>

const navItemList: MobileNavList = {
  firstNavGroup: [
    {
      id: 'sadasdsdsdsdssdsda',
      icon: <ShoeIcon />,
      title: 'Masérky',
      counter: 213,
      href: '/gallery',
    },
    {
      id: 'dsaxsdds',
      icon: <SalonIcon />,
      title: 'Masážní salóny',
      counter: 213,
      href: '/salons',
    },
    {
      id: 'dffaaa',
      icon: <HeartIcon />,
      title: 'Privátní slečny',
      counter: 22,
      href: '/gallery/privat',
    },
    {
      id: '421fdfd',
      icon: <HeartsIcon />,
      title: 'Privátní salony',
      counter: 44,
      href: '/salons',
    },
  ],
  secondNavGroup: [
    {
      id: 'sadas434d',
      icon: <AboutIcon />,
      title: 'O nás',
      href: '/about',
    },
    {
      id: 'ds434ax',
      icon: <BlogIcon />,
      title: 'Blog',
      href: '/journal',
    },
    {
      id: 'df434faaa',
      icon: <InfoIcon />,
      title: 'F.A.Q',
      href: '/faq',
    },
    {
      id: '421f4343dfd',
      icon: <ThumbIcon />,
      title: 'Podpora',
      href: '/support',
    },
  ],
}

export const NavItemComponent: React.FC<MobileNavItemType> = ({
  icon,
  title,
  counter,
  href,
}) => {
  return (
    <Link href={href} passHref>
      <NavItem>
        <IconWrapper>{icon}</IconWrapper>
        <Title>{title}</Title>
        {counter && <Counter>{counter}</Counter>}
      </NavItem>
    </Link>
  )
}

export const FloatingNavigation: React.FC<{
  handleClose: Dispatch<SetStateAction<boolean>>
}> = ({ handleClose }) => {
  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref, () => handleClose(false))

  return (
    <Container ref={ref}>
      <Wrapper>
        <Content>
          <NavSection>
            {navItemList.firstNavGroup.map((navItem) => (
              <NavItemComponent key={navItem.id} {...navItem} />
            ))}
          </NavSection>
          <Divider />
          <NavSection>
            {navItemList.secondNavGroup.map((navItem) => (
              <NavItemComponent key={navItem.id} {...navItem} />
            ))}
          </NavSection>
          <Divider />
          <CtaWidget />
        </Content>
      </Wrapper>
    </Container>
  )
}
