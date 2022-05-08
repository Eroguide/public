import TextTruncate from 'react-text-truncate'
import Link from 'next/link'
import {
  CardMainContainer,
  CardImageWrapper,
  ImageProduct,
  Description,
  PostCardInner,
} from './styles'
import { PostCardProps } from './types'

export const PostCard: React.FC<PostCardProps> = ({ id, title, image }) => {
  return (
    <Link href={`/blog/${id}`} passHref>
      <CardMainContainer>
        <PostCardInner>
          <CardImageWrapper image={image}>
            <ImageProduct />
          </CardImageWrapper>
        </PostCardInner>

        {TextTruncate && (
          <Description>
            {title && (
              <TextTruncate
                line={2}
                element="span"
                truncateText="…"
                text={title}
              />
            )}
          </Description>
        )}
      </CardMainContainer>
    </Link>
  )
}
