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
import SearchIcon from '/public/img/search-nav-icon.svg'
import ChangeIcon from '/public/img/onchange-nav-icon.svg'
import NewIcon from '/public/img/new-nav-icon.svg'
import TopIcon from '/public/img/top-nav-icon.svg'
import ShoeIcon from '/public/img/shoe-nav-icon.svg'
import SalonIcon from '/public/img/salon-nav-icon.svg'
import HeartIcon from '/public/img/heart-circle.svg'
import HeartsIcon from '/public/img/hearts-privat-salon-nav-icon.svg'
import ThumbIcon from '/public/img/thumb-up-nav-icon.svg'
import InfoIcon from '/public/img/faq-nav-icon.svg'
import BlogIcon from '/public/img/blog-nav-icon.svg'
import AboutIcon from '/public/img/about-nav-icon.svg'
import { CtaWidget } from '@/components/widgets/CtaWidget'
import Link from 'next/link'
import { useRouter } from 'next/router'

export type MobileNavItemType = {
  id: string
  title: string
  counter?: number
  icon: JSX.Element | React.ReactNode
  href: string
  isActive?: boolean
  slug?: string
}
export type MobileNavList = Record<string, Array<MobileNavItemType>>

const navItemList: MobileNavList = {
  searchNavGroup: [
    {
      id: '1',
      icon: <SearchIcon />,
      title: 'Hledat',
      counter: 213,
      href: '/search',
      slug: 'search',
    },
  ],
  firstNavGroup: [
    {
      id: '2',
      icon: <NewIcon />,
      title: 'Nové',
      counter: 213,
      href: '/category/new',
      slug: 'new',
    },
    {
      id: '3',
      icon: <TopIcon />,
      title: 'Top',
      counter: 213,
      href: '/category/top',
      slug: 'top',
    },
    {
      id: '4',
      icon: <ChangeIcon />,
      title: 'Na směně',
      counter: 213,
      href: '/category/shift',
      slug: 'shift',
    },
    {
      id: '5',
      icon: <ShoeIcon />,
      title: 'Masérky',
      counter: 213,
      href: '/employee',
      slug: 'employee',
    },
    {
      id: '6',
      icon: <SalonIcon />,
      title: 'Masážní salóny',
      counter: 213,
      href: '/salons/massage',
      slug: 'salons-massage',
    },
    {
      id: '7',
      icon: <HeartIcon />,
      title: 'Privátní slečny',
      counter: 22,
      href: '/category/privat',
      slug: 'privat',
    },
    {
      id: '8',
      icon: <HeartsIcon />,
      title: 'Privátní salony',
      counter: 44,
      href: '/salons',
      slug: 'salons',
    },
  ],
  secondNavGroup: [
    {
      id: '9',
      icon: <AboutIcon />,
      title: 'O nás',
      href: '/about',
      slug: 'about',
    },
    {
      id: '10',
      icon: <BlogIcon />,
      title: 'Blog',
      href: '/blog',
      slug: 'blog',
    },
    {
      id: '11',
      icon: <InfoIcon />,
      title: 'F.A.Q',
      href: '/faq',
      slug: 'faq',
    },
    {
      id: '12',
      icon: <ThumbIcon />,
      title: 'Podpora',
      href: '/support',
      slug: 'support',
    },
  ],
}

export const NavItemComponent: React.FC<MobileNavItemType> = ({
  icon,
  title,
  counter,
  href,
}) => {
  const { asPath } = useRouter()
  return (
    <Link href={href} passHref>
      <NavItem isActive={href === asPath}>
        <IconWrapper>{icon}</IconWrapper>
        <Title>{title}</Title>
        {counter && <Counter>{counter}</Counter>}
      </NavItem>
    </Link>
  )
}

export const FloatingNavigation: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <NavSection>
            {navItemList.searchNavGroup[0] && (
              <NavItemComponent
                key={navItemList.searchNavGroup[0].id}
                {...navItemList.searchNavGroup[0]}
              />
            )}
          </NavSection>
          <Divider />
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
