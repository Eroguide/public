import {
  FaqWrapper,
  TitleSection,
  SmallTitle,
  LargeTitle,
  SubTitle,
  SelectWrapper,
} from './styles'
import Link from 'next/link'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { breakpoints, BreakpointsEnum } from '@/src/theme'
import { FaqNav, FaqContent } from '@/components/generic'
export const FaqPage: React.FC = () => {
  const isSmall = useBreakpoint({
    min: breakpoints[BreakpointsEnum.xxs].min,
    max: breakpoints[BreakpointsEnum.sm].max,
  })
  return (
    <>
      <TitleSection>
        <SmallTitle>Learn how to get started</SmallTitle>
        <LargeTitle>Frequently asked questions</LargeTitle>
        <SubTitle>
          Join Eroguide community now to get free updates and also of freebies
          are waiting for you or <Link href="/faq">Contact Support</Link>
        </SubTitle>
      </TitleSection>
      <FaqWrapper>
        {isSmall ? <SelectWrapper>Select</SelectWrapper> : <FaqNav />}
        <FaqContent />
      </FaqWrapper>
    </>
  )
}
