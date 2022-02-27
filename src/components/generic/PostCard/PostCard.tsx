import TextTruncate from 'react-text-truncate'
import Link from 'next/link'
import {
  CardMainContainer,
  CardImageWrapper,
  ImageProduct,
  Description,
} from './styles'
import { PostCardProps } from './types'

export const PostCard: React.FC<PostCardProps> = ({ id, inSwipe, title }) => {
  return (
    <Link href={`/journal/${id}`} passHref>
      <CardMainContainer inSwipe={inSwipe}>
        <CardImageWrapper>
          <ImageProduct />
        </CardImageWrapper>
        <Description>
          <TextTruncate line={2} element="span" truncateText="…" text={title} />
        </Description>
      </CardMainContainer>
    </Link>
  )
}
