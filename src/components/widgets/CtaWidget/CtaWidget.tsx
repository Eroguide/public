import { ContentCta, SubTitleCta, TitleCta } from './styles'

import Link from 'next/link'
import { CustomButton } from '@/components/generic'
export const CtaWidget: React.FC = () => {
  return (
    <ContentCta>
      <TitleCta>Not with us yet?</TitleCta>
      <SubTitleCta>List your questionnaire</SubTitleCta>
      <Link href="/create" passHref>
        <CustomButton styleType="primary" sizeType="medium" isLink>
          Create now
        </CustomButton>
      </Link>
    </ContentCta>
  )
}
