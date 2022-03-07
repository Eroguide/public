import { TopLineContainer, ButtonShadow, IconWrapper } from './styles'
import { Breadcrumbs, CustomButton } from '@/components/generic'
import ArrowLeftChevron from '/public/img/chevron-left.svg'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { breakpoints, BreakpointsEnum } from '@/src/theme'
import { ContentCta } from '@/components/layouts/Footer/styles'
import Link from 'next/link'
export const TopLineSinglePage: React.FC = () => {
  const isSmall = useBreakpoint({
    min: breakpoints[BreakpointsEnum.xxs].min,
    max: breakpoints[BreakpointsEnum.sm].max,
  })

  return (
    <TopLineContainer>
      {!isSmall && (
        <Link href={'/'} passHref>
          <CustomButton iconLeft styleType="tertiary" sizeType="medium">
            Create now
          </CustomButton>
        </Link>

        // <ButtonShadow href={'/'}>
        //   <IconWrapper>
        //     <ArrowLeftChevron />
        //   </IconWrapper>
        //   Go home
        // </ButtonShadow>
      )}
      <Breadcrumbs />
    </TopLineContainer>
  )
}
