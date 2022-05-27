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
import { format, isToday } from 'date-fns'

export const PostCardWide: React.FC<PostCardWideProps> = ({
  id,
  inSwipe,
  title,
  createdAt,
  text,
  image,
}) => {
  const dateText = isToday(createdAt)
    ? `today ${format(new Date(createdAt), 'k:m')}`
    : format(new Date(createdAt), 'iiii k:m')
  return (
    <>
      <CardMainContainer inSwipe={inSwipe}>
        <InnerContainer>
          <CardImageWrapper image={image}>
            <Link href={id ? `/blog/${id}` : `/blog/1`} passHref>
              <ImageProduct />
            </Link>
          </CardImageWrapper>
          <CardContent>
            <Description>
              <Title>{title}</Title>
              <TextTruncate
                line={2}
                element="span"
                truncateText="…"
                text={text}
              />
            </Description>
            <BottomLine>
              <DateText>{dateText}</DateText>
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
