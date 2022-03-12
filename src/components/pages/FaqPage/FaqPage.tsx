import Link from 'next/link'
import { useState } from 'react'
import Select, { SingleValue } from 'react-select'
import { breakpoints, BreakpointsEnum } from '@/src/theme'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import {
  FaqWrapper,
  TitleSection,
  SmallTitle,
  LargeTitle,
  SubTitle,
  SelectWrapper,
} from './styles'
import { FaqNav, FaqContent } from '@/components/generic'
import BookIcon from '/public/img/book-icon-faq.svg'
import SupportIcon from '/public/img/support-icon-faq.svg'
import SalonIcon from '/public/img/salon-icon-faq.svg'
import LadyIcon from '/public/img/lady-icon-faq.svg'
import { fixturesNav } from './fixtures'
import { FaqSectionsEnum } from './types'

export const FaqPage: React.FC = () => {
  const isSmall = useBreakpoint({
    min: breakpoints[BreakpointsEnum.xxs].min,
    max: breakpoints[BreakpointsEnum.mobile].max,
  })

  const navOption = [
    { label: 'General', value: 'general', icon: <BookIcon /> },
    { label: 'Support', value: 'support', icon: <SupportIcon /> },
    { label: 'Salon', value: 'salon', icon: <SalonIcon /> },
    { label: 'Messause', value: 'messause', icon: <LadyIcon /> },
  ]

  const selectOptions: Array<{ label: string; value: string }> = navOption.map(
    ({ label, value }) => {
      return {
        label,
        value,
      }
    }
  )

  const [faqNavSection, setFaqNavSection] = useState<string>(
    FaqSectionsEnum.general
  )

  const handleMobileSelect = (
    value: SingleValue<{ label: string; value: string }>
  ): void => {
    if (value) setFaqNavSection(value.value)
  }

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
            <Select
              options={selectOptions}
              onChange={handleMobileSelect}
              value={selectOptions.find((opt) => opt.value === faqNavSection)}
            />
          </SelectWrapper>
        ) : (
          <FaqNav
            navOption={navOption}
            handleFaqSectionValue={setFaqNavSection}
            valueIsActive={faqNavSection}
          />
        )}
        <FaqContent fixturesNav={fixturesNav[faqNavSection]} />
      </FaqWrapper>
    </>
  )
}
