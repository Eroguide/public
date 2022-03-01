import { TopLineContainer, ButtonShadow, IconWrapper } from './styles'
import { Breadcrumbs } from '@/components/generic'
import ArrowLeftChevron from '/public/img/chevron-left.svg'
export const TopLineSinglePage: React.FC = () => {
  return (
    <TopLineContainer>
      <ButtonShadow href={'/'}>
        <IconWrapper>
          <ArrowLeftChevron />
        </IconWrapper>
        Go home
      </ButtonShadow>
      <Breadcrumbs />
    </TopLineContainer>
  )
}
