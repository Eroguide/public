import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions, FreeMode } from 'swiper'
import {
  PostListRowContainer,
  TopLine,
  Title,
  RightWidget,
  ContentRow,
} from './styles'
import { CustomButton, PostCard } from '@/components/generic'
import { ListPosts_listPosts_edges_node } from '@/graphql/types/ListPosts'

export const PostList: React.FC<{
  title: string
  counter: number
  counterTitle: string
  postData?: Array<ListPosts_listPosts_edges_node>
}> = ({ title, counterTitle, counter, postData }) => {
  const swiperSettings: SwiperOptions = {
    slidesPerView: 'auto',
    freeMode: true,
    modules: [FreeMode],
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      599: {
        slidesPerView: 'auto',
      },
    },
  }
  const [initSlider, setInitSlider] = useState<boolean>(false)
  return (
    <PostListRowContainer>
      <TopLine>
        <Title>{title}</Title>
        <RightWidget>
          <CustomButton
            styleType="tertiary"
            sizeType="medium"
            counter={counter}
            isLink
            href="/blog"
          >
            {counterTitle}
          </CustomButton>
        </RightWidget>
      </TopLine>
      <ContentRow>
        <Swiper {...swiperSettings} onAfterInit={() => setInitSlider(true)}>
          {initSlider && postData
            ? postData.map((post) => (
                <SwiperSlide key={post.id}>
                  <PostCard
                    {...post}
                    title={post.title}
                    description={post.text}
                  />
                </SwiperSlide>
              ))
            : 'loading'}
        </Swiper>
      </ContentRow>
    </PostListRowContainer>
  )
}
