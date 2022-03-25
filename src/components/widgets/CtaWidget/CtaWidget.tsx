import { ContentCta, SubTitleCta, TitleCta } from './styles'
import { CustomButton } from '@/components/generic'
export const CtaWidget: React.FC = () => {
  return (
    <ContentCta>
      <TitleCta>Ještě ne s námi?</TitleCta>
      <SubTitleCta>Vytvořit svůj inzerat</SubTitleCta>
      <CustomButton styleType="primary" sizeType="medium" isLink href="/create">
        Inzerovat
      </CustomButton>
    </ContentCta>
  )
}
