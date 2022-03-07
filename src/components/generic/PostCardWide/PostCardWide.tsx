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
import Link from 'next/link'
import { CustomButton } from '@/components/generic'
import { BaseLayout } from '@/components/layouts/BaseLayout'
export const PostCardWide: React.FC<PostCardWideProps> = ({ id, inSwipe }) => {
  return (
    <>
      <CardMainContainer inSwipe={inSwipe}>
        <CardImageWrapper>
          <Link href={id ? `/journal/${id}` : `/journal/somelink`} passHref>
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
            <Link href={id ? `/journal/${id}` : `/journal/somelink`} passHref>
              <CustomButton styleType="tertiary" sizeType="medium" isLink>
                Read more
              </CustomButton>
            </Link>
          </BottomLine>
        </CardContent>
      </CardMainContainer>
    </>
  )
}
