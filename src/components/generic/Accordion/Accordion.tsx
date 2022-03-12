import { AccordionContainer } from './styles'
import { AccordionItem } from './AccordionItem'
import { FixturesFaqType } from '@/components/pages/FaqPage/types'
export const Accordion: React.FC<FixturesFaqType> = ({ content }) => {
  return (
    <AccordionContainer>
      {Object.values(content).map((item, i) => (
        <AccordionItem key={item.id} {...item} isOpen={i === 0} />
      ))}
    </AccordionContainer>
  )
}
