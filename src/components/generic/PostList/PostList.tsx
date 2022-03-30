import { memo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, SwiperOptions, FreeMode } from 'swiper'

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
}> = memo(({ title, counterTitle, counter, postData }) => {
  const swiperSettings: SwiperOptions = {
    slidesPerView: 'auto',
    freeMode: true,
    modules: [Pagination, FreeMode],
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
})
