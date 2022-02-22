import {
  Container,
  Wrapper,
  Divider,
  TagLine,
  LeftTag,
  RightDate,
  Title,
  SubTitle,
  Text,
} from './styles'
import { ContentCardRow, PostCard, PostCardWide } from '@/components/generic'
import { BaseLayout } from '@/components/layouts/BaseLayout'
const fixtures = [
  { id: '222dsadas', slug: 'one-project-time', best: 1 },
  { id: 'asddsad222sadasd', slug: 'two-project-time', best: 0 },
  { id: 'asdsad3242asd', slug: 'three-project-time', best: 0 },
  { id: 'asdsdadasfffsadasd', slug: 'four-project-time', best: 0 },
  { id: 'asdxfsadasd', slug: 'four-project-time', best: 0 },
  { id: 'asdsdadvadasd', slug: 'four-project-time', best: 0 },
  { id: 'xfffsadasd', slug: 'four-project-time', best: 0, tag: 'dsd' },
]

import { SwiperSlide } from 'swiper/react'
export const SinglePostContent: React.FC = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <TagLine>
            <LeftTag>Buttons</LeftTag>
            <RightDate>20 Nov. 2021</RightDate>
          </TagLine>
          <Title>Hiker’s Journal: On the West Road</Title>
          <SubTitle>
            The story about Patagonia. We hiked through Mountains and Canyons.
          </SubTitle>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            pellentesque curabitur vel amet. Mauris tempor bibendum tempor sit
            nibh. Libero pulvinar ultrices nullam placerat nisi, amet. Elit id
            sed vivamus elementum scelerisque elit fermentum, ac cursus. Nullam
            erat pharetra nulla vivamus odio. Egestas luctus sagittis blandit
            elit elementum cursus pretium. Amet egestas non ut tincidunt. Orci
            luctus turpis vel, velit auctor. Massa eu, lacus cursus arcu
            scelerisque auctor senectus molestie. Nunc etiam sagittis purus
            suspendisse sed vitae nunc, nunc, et. Nec arcu lacus habitasse
            posuere arcu neque. Dapibus nunc diam diam ac. Molestie augue
            curabitur sed ornare in augue. Id magna et sit semper egestas dolor
            elit rhoncus, bibendum. Tortor sagittis risus commodo a pellentesque
            sed ipsum ut dictum. Amet semper eu mauris et et cursus a,
            parturient. Et in iaculis fringilla sit ipsum quisque massa dui.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            pellentesque curabitur vel amet. Mauris tempor bibendum tempor sit
            nibh. Libero pulvinar ultrices nullam placerat nisi, amet. Elit id
            sed vivamus elementum scelerisque elit fermentum, ac cursus. Nullam
            erat pharetra nulla vivamus odio. Egestas luctus sagittis blandit
            elit elementum cursus pretium. Amet egestas non ut tincidunt. Orci
            luctus turpis vel, velit auctor. Massa eu, lacus cursus arcu
            scelerisque auctor senectus molestie. Nunc etiam sagittis purus
            suspendisse sed vitae nunc, nunc, et. Nec arcu lacus habitasse
            posuere arcu neque. Dapibus nunc diam diam ac. Molestie augue
            curabitur sed ornare in augue. Id magna et sit semper egestas dolor
            elit rhoncus, bibendum. Tortor sagittis risus commodo a pellentesque
            sed ipsum ut dictum. Amet semper eu mauris et et cursus a,
            parturient. Et in iaculis fringilla sit ipsum quisque massa dui.
          </Text>
          <imgsssss
            src="/img/dog.jpg"
            width="100%"
            height="auto"
            alt=""
            style={{ marginBottom: '56px' }}
          />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            pellentesque curabitur vel amet. Mauris tempor bibendum tempor sit
            nibh. Libero pulvinar ultrices nullam placerat nisi, amet. Elit id
            sed vivamus elementum scelerisque elit fermentum, ac cursus. Nullam
            erat pharetra nulla vivamus odio. Egestas luctus sagittis blandit
            elit elementum cursus pretium. Amet egestas non ut tincidunt. Orci
            luctus turpis vel, velit auctor. Massa eu, lacus cursus arcu
            scelerisque auctor senectus molestie. Nunc etiam sagittis purus
            suspendisse sed vitae nunc, nunc, et. Nec arcu lacus habitasse
            posuere arcu neque. Dapibus nunc diam diam ac. Molestie augue
            curabitur sed ornare in augue. Id magna et sit semper egestas dolor
            elit rhoncus, bibendum. Tortor sagittis risus commodo a pellentesque
            sed ipsum ut dictum. Amet semper eu mauris et et cursus a,
            parturient. Et in iaculis fringilla sit ipsum quisque massa dui.
          </Text>
        </Wrapper>
      </Container>
      <ContentCardRow
        title="Recent posts"
        counter={34}
        counterTitle="All posts"
        itemsToShow={4}
      >
        {fixtures.map((item) => (
          <SwiperSlide key={item.id}>
            <PostCard {...item} tagTitle={item.tag} />
          </SwiperSlide>
        ))}
      </ContentCardRow>
    </>
  )
}
