import TextTruncate from 'react-text-truncate'
import {
  CardMainContainer,
  CardImageWrapper,
  ImageProduct,
  Description,
  Title,
  CardContent,
  BottomLine,
  DateText,
  ReadMoreButton,
} from './styles'
import { PostCardWideProps } from './types'

export const PostCardWide: React.FC<PostCardWideProps> = ({ id }) => {
  return (
    <>
      <CardMainContainer>
        <CardImageWrapper>
          <ImageProduct />
        </CardImageWrapper>
        <CardContent>
          <Description>
            <Title>Lorem Ipsum is simply dummy text of the printing</Title>
            <TextTruncate
              line={2}
              element="span"
              truncateText="…"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Description>
          <BottomLine>
            <DateText>today 19:00</DateText>
            <ReadMoreButton>Read more</ReadMoreButton>
          </BottomLine>
        </CardContent>
      </CardMainContainer>
    </>
  )
}
