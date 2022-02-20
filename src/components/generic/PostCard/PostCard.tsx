import TextTruncate from 'react-text-truncate'

import {
  CardMainContainer,
  CardImageWrapper,
  ImageProduct,
  Description,
} from './styles'
import { PostCardProps } from './types'

export const PostCard: React.FC<PostCardProps> = ({ id }) => {
  return (
    <>
      <CardMainContainer>
        <CardImageWrapper>
          <ImageProduct />
        </CardImageWrapper>
        <Description>
          <TextTruncate
            line={2}
            element="span"
            truncateText="…"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
        </Description>
      </CardMainContainer>
    </>
  )
}
