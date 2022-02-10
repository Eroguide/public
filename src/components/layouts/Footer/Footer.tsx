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

const navItems = [
  ['Private ladies', 'Salons'],
  ['About', 'Journal'],
  ['F.A.Q', 'Support'],
  ['Profile', 'Invite'],
]

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterInner>
          <FooterLogo>
            <img src="/img/logo.png" alt="" />
          </FooterLogo>
          <FooterLinks>
            {navItems.map((item) => (
              <LinkGroup>
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
          <Link href={'/'}>Terms of Service</Link>
          <Link href={'/'}>Privat Policy</Link>
        </UnderFooterRight>
      </UnderFooter>
    </FooterWrapper>
  )
}
