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
  ErrorMessage,
} from './styles'
import { ContentCardRow, PostCard } from '@/components/generic'

export const PostList: React.FC<{
  title: string
  counter: number
  counterTitle: string
  postData: Array<any>
}> = ({ children, title, counterTitle, counter, postData }) => {
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
          {initSlider
            ? postData.map((post) => (
                <SwiperSlide key={post.mission_name}>
                  <PostCard
                    {...post}
                    title={post.mission_name}
                    tagTitle={post.tag}
                    inSwipe
                  />
                </SwiperSlide>
              ))
            : 'loading'}
        </Swiper>
      </ContentRow>
    </PostListRowContainer>
  )
}
