import { ContentCta, SubTitleCta, TitleCta } from './styles'
import { CustomButton } from '@/components/generic'
export const CtaWidget: React.FC<{ isCentered?: boolean }> = ({
  isCentered,
}) => {
  return (
    <ContentCta isCentered={isCentered}>
      <TitleCta>Not with us yet?</TitleCta>
      <SubTitleCta>List your questionnaire</SubTitleCta>
      <CustomButton styleType="primary" sizeType="medium" isLink href="/create">
        Create now
      </CustomButton>
    </ContentCta>
  )
}
