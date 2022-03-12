import {
  FaqWrapper,
  TitleSection,
  SmallTitle,
  LargeTitle,
  SubTitle,
  SelectWrapper,
} from './styles'
import Select from 'react-select'
import Link from 'next/link'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { breakpoints, BreakpointsEnum } from '@/src/theme'
import { FaqNav, FaqContent } from '@/components/generic'
export const FaqPage: React.FC = () => {
  const isSmall = useBreakpoint({
    min: breakpoints[BreakpointsEnum.xxs].min,
    max: breakpoints[BreakpointsEnum.sm].max,
  })

  const navOption = [
    { label: 'General', value: 'general' },
    { label: 'Support', value: 'support' },
    { label: 'Salon', value: 'salon' },
    { label: 'Messause', value: 'messause' },
  ]

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
        {isSmall ? (
          <SelectWrapper>
            <Select options={navOption} />
          </SelectWrapper>
        ) : (
          <FaqNav navOption={navOption} />
        )}
        <FaqContent />
      </FaqWrapper>
    </>
  )
}
