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

export const PostCard: React.FC<PostCardProps> = ({ id }) => {
  return (
    <Link href={`/blog/${id}`} passHref>
      <CardMainContainer>
        <PostCardInner>
          <CardImageWrapper>
            <ImageProduct />
          </CardImageWrapper>
        </PostCardInner>

        {TextTruncate && (
          <Description>
            {/*{title && (*/}
            <TextTruncate
              line={2}
              element="span"
              truncateText="…"
              // text={title}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum iusto optio quidem sint. Adipisci, aliquid animi consequuntur doloremque illo natus quaerat qui saepe similique. Consectetur deleniti fugit minima quo recusandae.'
              }
            />
            {/*)}*/}
          </Description>
        )}
      </CardMainContainer>
    </Link>
  )
}
