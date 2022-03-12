import {
  FooterContainer,
  FooterInner,
  FooterLogo,
  LinkGroup,
  FooterWrapper,
  UnderFooter,
  UnderFooterLeft,
  UnderFooterRight,
  FirstFooterSection,
  MiddleFooterSection,
  EndFooterSection,
  Block,
  SectionFooterWrap,
} from './styles'
import Link from 'next/link'
import { CustomButton, DrawerBottom } from '@/components/generic'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { CtaWidget } from '@/components/widgets/CtaWidget'

const currentYear = new Date().getFullYear()
const navItems = {
  navBlock1: {
    1: [
      { name: 'Private ladies', href: '/gallery' },
      { name: 'Salons', href: '/salons' },
    ],
    2: [
      { name: 'About', href: '/about' },
      { name: 'Journal', href: '/journal' },
    ],
  },
  navBlock2: {
    1: [
      { name: 'F.A.Q', href: '/faq' },
      { name: 'Support', href: '/' },
    ],
    2: [
      { name: 'Profile', href: '/' },
      { name: 'Invite', href: '/' },
    ],
  },
}

export const Footer: React.FC = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false)
  const { push } = useRouter()
  const handleClose = (): void => {
    setDrawerIsOpen(false)
  }

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterInner>
          <FirstFooterSection>
            <FooterLogo
              src="/img/logo.png"
              alt=""
              onClick={() =>
                push('/', undefined, {
                  shallow: true,
                })
              }
            />
          </FirstFooterSection>

          <SectionFooterWrap>
            <MiddleFooterSection>
              <Block>
                {Object.values(navItems.navBlock1).map((item, i) => (
                  <LinkGroup key={`group-links-${i}`}>
                    {item.map((linkName) => (
                      <Link key={linkName.name} href={linkName.href} passHref>
                        <CustomButton styleType="link" isLink>
                          {linkName.name}
                        </CustomButton>
                      </Link>
                    ))}
                  </LinkGroup>
                ))}
              </Block>
              <Block>
                {Object.values(navItems.navBlock2).map((item, i) => (
                  <LinkGroup key={`group-links-${i}`}>
                    {item.map((linkName) => (
                      <Link key={linkName.name} href={linkName.href} passHref>
                        <CustomButton styleType="link" isLink>
                          {linkName.name}
                        </CustomButton>
                      </Link>
                    ))}
                  </LinkGroup>
                ))}
              </Block>
            </MiddleFooterSection>
            <EndFooterSection>
              <CtaWidget isCentered />
            </EndFooterSection>
          </SectionFooterWrap>
        </FooterInner>
      </FooterContainer>

      <UnderFooter>
        <UnderFooterLeft>
          © {currentYear}
          <Link href="/"> Eroguide.cz </Link>
        </UnderFooterLeft>
        <UnderFooterRight>
          <span onClick={() => setDrawerIsOpen(!drawerIsOpen)}>
            Terms of Service
          </span>
          <span onClick={() => setDrawerIsOpen(!drawerIsOpen)}>
            Privat Policy
          </span>
        </UnderFooterRight>
      </UnderFooter>
      <DrawerBottom isOpen={drawerIsOpen} handleClose={handleClose} />
    </FooterWrapper>
  )
}
