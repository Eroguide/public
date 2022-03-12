import { useState } from 'react'
import {
  AccordionItemContainer,
  ItemTitle,
  ItemContent,
  ItemTop,
  FaqText,
  IconWrapper,
} from './styles'
import ChevronIcon from '/public/img/chevron-left.svg'
import { AccordionItemProps } from './types'

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
}) => {
  const [isActive, setIsActive] = useState<boolean>(isOpen)
  return (
    <AccordionItemContainer>
      <ItemTop onClick={() => setIsActive(!isActive)}>
        <ItemTitle>{title}</ItemTitle>
        <IconWrapper isActive={isActive}>
          <ChevronIcon />
        </IconWrapper>
      </ItemTop>
      <ItemContent isActive={isActive}>
        <FaqText>{content}</FaqText>
      </ItemContent>
    </AccordionItemContainer>
  )
}
