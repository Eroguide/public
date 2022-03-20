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
  InnerContainer,
} from './styles'
import { PostCardWideProps } from './types'
import Link from 'next/link'
import { CustomButton } from '@/components/generic'

export const PostCardWide: React.FC<PostCardWideProps> = ({ id, inSwipe }) => {
  return (
    <>
      <CardMainContainer inSwipe={inSwipe}>
        <InnerContainer>
          <CardImageWrapper>
            <Link href={id ? `/blog/${id}` : `/blog/somelink`} passHref>
              <ImageProduct />
            </Link>
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

              <CustomButton
                styleType="tertiary"
                sizeType="medium"
                isLink
                href={id ? `/blog/${id}` : `/blog/somelink`}
              >
                Read more
              </CustomButton>
            </BottomLine>
          </CardContent>
        </InnerContainer>
      </CardMainContainer>
    </>
  )
}
