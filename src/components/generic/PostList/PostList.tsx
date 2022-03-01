import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, SwiperOptions, FreeMode } from 'swiper'

import {
  PostListRowContainer,
  TopLine,
  Title,
  RightWidget,
  ContentRow,
  CounterTitle,
  Quantity,
  Counter,
} from './styles'
import { PostCard } from '@/components/generic'
import { GetLaunches_launchesPast } from '@/graphql/__generated__/GetLaunches'

export const PostList: React.FC<{
  title: string
  counter: number
  counterTitle: string
  postData: Array<GetLaunches_launchesPast | null> | null
}> = ({ title, counterTitle, counter, postData }) => {
  const swiperSettings: SwiperOptions = {
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    modules: [Pagination, FreeMode],
    spaceBetween: 16,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 12,
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1420: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
  }
  const [initSlider, setInitSlider] = useState<boolean>(false)
  return (
    <PostListRowContainer>
      <TopLine>
        <Title>{title}</Title>
        <RightWidget>
          <Counter>
            <CounterTitle>{counterTitle}</CounterTitle>
            <Quantity>{counter}</Quantity>
          </Counter>
        </RightWidget>
      </TopLine>
      <ContentRow>
        <Swiper {...swiperSettings} onAfterInit={() => setInitSlider(true)}>
          {initSlider && postData
            ? postData.map(
                (post) =>
                  post && (
                    <SwiperSlide key={post.id}>
                      <PostCard {...post} title={post?.mission_name} inSwipe />
                    </SwiperSlide>
                  )
              )
            : 'loading'}
        </Swiper>
      </ContentRow>
    </PostListRowContainer>
  )
}
