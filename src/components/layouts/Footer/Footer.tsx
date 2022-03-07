import {
  FooterContainer,
  FooterInner,
  FooterLogo,
  FooterLinks,
  LinkGroup,
  FooterCta,
  TitleCta,
  SubTitleCta,
  ContentCta,
  FooterWrapper,
  UnderFooter,
  UnderFooterLeft,
  FooterLogoWrapper,
  UnderFooterRight,
} from './styles'
import Link from 'next/link'
import { CustomButton, DrawerBottom } from '@/components/generic'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { ButtonsRow } from '@/components/widgets/SalonInfoSinglePageWidget/styles'

const navItems = [
  [
    { name: 'Private ladies', href: '/gallery' },
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
          <FooterLogoWrapper>
            <FooterLogo
              src="/img/logo.png"
              alt=""
              onClick={() =>
                push('/', undefined, {
                  shallow: true,
                })
              }
            />
          </FooterLogoWrapper>

          <FooterLinks>
            {navItems.map((item, i) => (
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
          </FooterLinks>

          <FooterCta>
            <ContentCta>
              <TitleCta>Not with us yet?</TitleCta>
              <SubTitleCta>List your questionnaire</SubTitleCta>
              <CustomButton styleType="primary" sizeType="medium">
                Create now
              </CustomButton>
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
