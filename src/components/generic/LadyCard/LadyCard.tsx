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
import { ListEmployee_listEmployee_edges_node } from '@/graphql/types/ListEmployee'
export const LadyCard: React.FC<{
  href: string
  girl: ListEmployee_listEmployee_edges_node
}> = ({ href, girl }) => {
  return (
    <Container>
      <Wrapper>
        <Link href={href && `/employee/${href}`} passHref>
          <CardImage img={girl.mainPhoto}>
            <Tag>{girl.status && 'new'}</Tag>
            <StatusTag>
              <Circle />
            </StatusTag>
          </CardImage>
        </Link>
        <Title>
          {girl.name} {girl.topDate && <BadgeIcon />}
        </Title>
      </Wrapper>
    </Container>
  )
}
