import { useState } from 'react'
import { Swiper } from 'swiper/react'
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
import { SwiperSlide } from 'swiper/react/swiper-react'

export const PostList: React.FC<{
  title: string
  counter: number
  counterTitle: string
}> = ({ children, title, counterTitle, counter }) => {
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
          lala
          {/*{initSlider*/}
          {/*  ? allPosts.map((post) => (*/}
          {/*      <SwiperSlide key={post.id}>*/}
          {/*        <PostCard {...post} tagTitle={post.tag} inSwipe />*/}
          {/*      </SwiperSlide>*/}
          {/*    ))*/}
          {/*  : 'loading'}*/}
        </Swiper>
      </ContentRow>
    </PostListRowContainer>
  )
}
