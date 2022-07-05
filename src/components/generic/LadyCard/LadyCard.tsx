import {
  Container,
  Wrapper,
  CardImage,
  Tag,
  StatusTag,
  Circle,
  Title,
} from './styles'
import Link from 'next/link'

import BadgeIcon from '/public/img/lady-card-badge.svg'

import { ListSalons_listSalons_edges_node_staff } from '@/graphql/types/ListSalons'
export const LadyCard: React.FC<{
  href: string
  girl: Partial<ListSalons_listSalons_edges_node_staff>
}> = ({ href, girl }) => {
  console.log('girl', girl)
  return (
    <Container>
      <Wrapper>
        <Link href={href && `/employee/${href}`} passHref>
          <CardImage img={girl?.headPhoto}>
            <Tag>{girl.status && 'new'}</Tag>
            <StatusTag>
              <Circle />
            </StatusTag>
          </CardImage>
        </Link>
        <Title>
          {girl.name} {girl?.topDate ? <BadgeIcon /> : null}
        </Title>
      </Wrapper>
    </Container>
  )
}
