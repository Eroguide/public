import {
  FooterContainer,
  FooterInner,
  FooterLogo,
  FooterLinks,
  LinkGroup,
  FooterCta,
  TitleCta,
  SubTitleCta,
  ButtonCta,
  ContentCta,
  FooterWrapper,
  UnderFooter,
  UnderFooterLeft,
  UnderFooterRight,
} from './styles'
import Link from 'next/link'
import { DrawerBottom } from '@/components/generic'
import { useState } from 'react'
import { useRouter } from 'next/router'

const navItems = [
  [
    { name: 'Private ladies', href: '/' },
    { name: 'Salons', href: '/salons' },
  ],
  [
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' },
  ],
  [
    { name: 'F.A.Q', href: '/faq' },
    { name: 'Support', href: '/' },
  ],
  [
    { name: 'Profile', href: '/' },
    { name: 'Invite', href: '/' },
  ],
]

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
          <FooterLogo
            src="/img/logo.png"
            alt=""
            onClick={() =>
              push('/', undefined, {
                shallow: true,
              })
            }
          />
          <FooterLinks>
            {navItems.map((item, i) => (
              <LinkGroup key={`group-links-${i}`}>
                {item.map((linkName) => (
                  <Link key={linkName.name} href={linkName.href}>
                    {linkName.name}
                  </Link>
                ))}
              </LinkGroup>
            ))}
          </FooterLinks>

          <FooterCta>
            <ContentCta>
              <TitleCta>Not with us yet?</TitleCta>
              <SubTitleCta>List your questionnaire</SubTitleCta>
              <ButtonCta>Create now</ButtonCta>
            </ContentCta>
          </FooterCta>
        </FooterInner>
      </FooterContainer>

      <UnderFooter>
        <UnderFooterLeft>
          Copyright © 2021 Eroguide.cz All rights reserved
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
