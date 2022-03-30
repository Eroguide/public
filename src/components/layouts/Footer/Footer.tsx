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
  Flex,
} from './styles'
import Link from 'next/link'
import { CustomButton, DrawerBottom } from '@/components/generic'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { CtaWidget } from '@/components/widgets/CtaWidget'
import { SectionBlock } from '@/components/layouts/SectionBlock'

const currentYear = new Date().getFullYear()
const navItems = {
  navBlock1: {
    1: [
      { name: 'Masérky', href: '/gallery' },
      { name: 'Masážní salóny', href: '/salons' },
      { name: 'Privátní slečny', href: '/gallery/privat' },
      { name: 'Privátní salony', href: '/salons/privat' },
    ],
    2: [
      { name: 'O nás', href: '/about' },
      { name: 'Blog', href: '/blog' },
    ],
  },
  navBlock2: {
    1: [
      { name: 'F.A.Q', href: '/faq' },
      { name: 'Podpora', href: '/support' },
    ],
    2: [
      { name: 'Profil', href: '/' },
      { name: 'Pozvání', href: '/' },
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
        <SectionBlock>
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
                        <CustomButton
                          styleType="link"
                          isLink
                          key={linkName.name}
                          href={linkName.href}
                        >
                          {linkName.name}
                        </CustomButton>
                      ))}
                    </LinkGroup>
                  ))}
                </Block>
                <Block>
                  {Object.values(navItems.navBlock2).map((item, i) => (
                    <LinkGroup key={`group-links-${i}`}>
                      {item.map((linkName) => (
                        <CustomButton
                          styleType="link"
                          isLink
                          key={linkName.name}
                          href={linkName.href}
                        >
                          {linkName.name}
                        </CustomButton>
                      ))}
                    </LinkGroup>
                  ))}
                </Block>
              </MiddleFooterSection>
              <EndFooterSection>
                <CtaWidget />
              </EndFooterSection>
            </SectionFooterWrap>
          </FooterInner>
        </SectionBlock>
      </FooterContainer>

      <UnderFooter>
        <SectionBlock>
          <Flex>
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
          </Flex>
        </SectionBlock>
      </UnderFooter>
      <DrawerBottom isOpen={drawerIsOpen} handleClose={handleClose} />
    </FooterWrapper>
  )
}
