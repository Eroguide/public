import {
  Container,
  Wrapper,
  TagLine,
  LeftTag,
  RightDate,
  Title,
  SubTitle,
  Text,
} from './styles'
import { ContentCardRow, PostCard } from '@/components/generic'
import { GetPost } from '@/graphql/__generated__/GetLaunches'
import { format } from 'date-fns'
import { SwiperSlide } from 'swiper/react'
export const SinglePostContent: React.FC<GetPost> = ({ post, posts }) => {
  const { title, text, image, createdAt } = post
  return (
    <>
      <Container>
        <Wrapper>
          <TagLine>
            <LeftTag>Buttons</LeftTag>
            <RightDate>{format(new Date(createdAt), 'dd MMM. yyyy')}</RightDate>
          </TagLine>
          <Title>{title}</Title>
          <SubTitle>
            The story about Patagonia. We hiked through Mountains and Canyons.
          </SubTitle>
          <Text>{text}</Text>
          <img src={image} width="100%" height="100%" alt="" />
        </Wrapper>
      </Container>
      {/*{//TODO make it in a separate component}*/}
      <ContentCardRow
        title="Recent posts"
        counter={34}
        counterTitle="All posts"
        withControls
      >
        {posts &&
          posts.map((item) => (
            <SwiperSlide key={item.id}>
              <PostCard {...item} />
            </SwiperSlide>
          ))}
      </ContentCardRow>
    </>
  )
}
