import { Container, Title, TopLine, Block } from './styles'
import ToolTipIcon from '/public/img/tooltip-icon.svg'
import { CustomButton } from '@/components/generic'

export const SinglePageContentBlock: React.FC<{
  title: string
  withIcon?: boolean
  topButtonHandler?: () => void
}> = ({ children, title, withIcon, topButtonHandler }) => {
  return (
    <Container>
      <TopLine>
        <Block>
          <Title>{title}</Title>
          {withIcon && <ToolTipIcon />}
        </Block>
        <Block>
          {topButtonHandler && (
            <CustomButton
              styleType="tertiary"
              onClick={topButtonHandler}
              counter={13}
            >
              All ladies
            </CustomButton>
          )}
        </Block>
      </TopLine>
      {children}
    </Container>
  )
}
