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
export const LadyCard: React.FC<{ href: string }> = ({ href }) => {
  return (
    <Container>
      <Wrapper>
        <Link href={`/gallery/${href}`}>
          <CardImage>
            <Tag>New</Tag>
            <StatusTag>
              <Circle />
            </StatusTag>
          </CardImage>
        </Link>
        <Title>Lorem </Title>
      </Wrapper>
    </Container>
  )
}
