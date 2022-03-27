import { SectionBlockContainer, InnerContent } from './styles'

export const SectionBlock: React.FC<{ isVisible?: boolean }> = ({
  children,
  isVisible = false,
}) => {
  return (
    <SectionBlockContainer isVisible={isVisible}>
      <InnerContent>{children}</InnerContent>
    </SectionBlockContainer>
  )
}
