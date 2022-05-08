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
export const LadyCard: React.FC<{ href: string }> = ({ href }) => {
  return (
    <Container>
      <Wrapper>
        <Link href={(href && `/employee/${href}`) || '/employee'} passHref>
          <CardImage>
            <Tag>new</Tag>
            <StatusTag>
              <Circle />
            </StatusTag>
          </CardImage>
        </Link>
        <Title>
          Lorem <BadgeIcon />
        </Title>
      </Wrapper>
    </Container>
  )
}
