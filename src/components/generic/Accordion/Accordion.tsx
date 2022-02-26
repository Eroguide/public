import { AccordionContainer } from './styles'
import { AccordionItem } from './AccordionItem'
export const Accordion: React.FC = () => {
  const fixturesNav = [
    {
      id: '1',
      title: 'Title',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet aliquet risus, libero egestas enim at. Quis maecenas at sit massa suspendisse massa cursus elementum lacus. Risus ac felis accumsan ac vitae augue volutpat. Nulla montes, consequat, urna, lectus ut lobortis orci urna, tellus. Id sit elementum tellus in. Porttitor vulputate praesent cursus viverra purus et faucibus nullam felis. Sit auctor molestie amet dolor. Turpis magna fringilla vitae platea leo. Lacus in aliquam ornare interdum aliquet quis faucibus. Orci est, bibendum aliquam nibh nam. Elementum eget commodo posuere cras elementum pellentesque. Egestas faucibus amet gravida turpis scelerisque tellus adipiscing. Lorem velit, gravida dictum hendrerit ullamcorper adipiscing tellus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, esse laudantium magni nisi nostrum officia pariatur reiciendis suscipit tenetur vel. Architecto cum ea hic inventore, labore nisi suscipit voluptatem voluptates!',
    },
    {
      id: '1dsada',
      title: 'Title',
      content:
        'conte Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, esse laudantium magni nisi nostrum officia pariatur reiciendis suscipit tenetur vel. Architecto cum ea hic inventore, labore nisi suscipit voluptatem voluptates!nt',
    },
    {
      id: '12231',
      title: 'Title',
      content:
        ' Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet aliquet risus, libero egestas enim at. Quis maecenas at sit massa suspendisse massa cursus elementum lacus. Risus ac felis accumsan ac vitae augue volutpat. Nulla montes, consequat, urna, lectus ut lobortis orci urna, tellus. Id sit elementum tellus in. Porttitor vulputate praesent cursus viverra purus et faucibus nullam felis. Sit auctor molestie amet dolor. Turpis magna fringilla vitae platea leo. Lacus in aliquam ornare interdum aliquet quis faucibus. Orci est, bibendum aliquam nibh nam. Elementum eget commodo posuere cras elementum pellentesque. Egestas faucibus amet gravida turpis scelerisque tellus adipiscing. Lorem velit, gravida dictum hendrerit ullamcorper adipiscing tellus. sit amet, consectetur adipisicing elit. Aut, esse laudantium magni nisi nostrum officia pariatur reiciendis suscipit tenetur vel. Architecto cum ea hic inventore, labore nisi suscipit voluptatem voluptates!',
    },
    {
      id: '1ffff',
      title: 'Title',
      content:
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, esse laudantium magni nisi nostrum officia pariatur reiciendis suscipit tenetur vel. Architecto cum ea hic inventore, labore nisi suscipit voluptatem voluptates!',
    },
    { id: '1cccc', title: 'Title', content: 'content' },
  ]
  return (
    <AccordionContainer>
      {fixturesNav.map((item, i) => (
        <AccordionItem key={item.id} {...item} isOpen={i === 0} />
      ))}
    </AccordionContainer>
  )
}
