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

const navItems = [
  ['Private ladies', 'Salons'],
  ['About', 'Journal'],
  ['F.A.Q', 'Support'],
  ['Profile', 'Invite'],
]

export const Footer: React.FC = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false)

  const handleClose = (): void => {
    setDrawerIsOpen(false)
  }

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterInner>
          <FooterLogo>
            <img width="130" height="auto" src="/img/logo.png" alt="" />
          </FooterLogo>
          <FooterLinks>
            {navItems.map((item, i) => (
              <LinkGroup key={`group-links-${i}`}>
                {item.map((linkName) => (
                  <Link key={linkName} href={'/'}>
                    {linkName}
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
