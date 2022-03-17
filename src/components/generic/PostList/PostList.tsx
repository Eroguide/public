import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, SwiperOptions, FreeMode } from 'swiper'
import Link from 'next/link'
import {
  PostListRowContainer,
  TopLine,
  Title,
  RightWidget,
  ContentRow,
} from './styles'
import { CustomButton, PostCard } from '@/components/generic'
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
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1420: {
        slidesPerView: 4,
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
            href="/journal"
          >
            {counterTitle}
          </CustomButton>
        </RightWidget>
      </TopLine>
      <ContentRow>
        <Swiper {...swiperSettings} onAfterInit={() => setInitSlider(true)}>
          {initSlider && postData
            ? postData.map(
                (post) =>
                  post && (
                    <SwiperSlide key={post.id}>
                      <PostCard {...post} title={post?.mission_name} />
                    </SwiperSlide>
                  )
              )
            : 'loading'}
        </Swiper>
      </ContentRow>
    </PostListRowContainer>
  )
}
