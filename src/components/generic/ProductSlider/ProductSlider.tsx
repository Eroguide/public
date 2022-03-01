import {
  Container,
  Wrapper,
  GallerySliderImage,
  ThumbsSliderImage,
  BottomRow,
  Left,
  Right,
} from './styles'
import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions, Thumbs, FreeMode, Navigation } from 'swiper'
import 'swiper/css/thumbs'
import {
  NextButton,
  NextPrevWrapper,
  PrevButton,
} from '@/components/generic/ShowNewItems/styles'
import ArrowLeftIcon from '../../../../public/img/arrow-left.svg'
import ArrowRightIcon from '../../../../public/img/arrow-right.svg'

export const ProductSlider: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
  const navigationPrevRef = useRef<HTMLDivElement>(null)
  const navigationNextRef = useRef<HTMLDivElement>(null)
  const swiperSettings: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    freeMode: true,
    modules: [Thumbs, Navigation],
    thumbs: { swiper: thumbsSwiper },
    allowSlidePrev: true,
    allowSlideNext: true,
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
  }
  const [initSlider, setInitSlider] = useState(false)

  const fixtures = [
    { id: '222dsadas', slug: 'one-project-time', best: 1 },
    { id: 'asddsad222sadasd', slug: 'two-project-time', best: 0 },
    { id: 'asdsad3242asd', slug: 'three-project-time', best: 0 },
    { id: 'asdsdadasfffsadasd', slug: 'four-project-time', best: 0 },
    { id: '222dsadassssd', slug: 'one-project-time', best: 1 },
    { id: 'asddsad222sadasssdsdsd', slug: 'two-project-time', best: 0 },
    { id: 'asdsad3242asdssdss', slug: 'three-project-time', best: 0 },
    { id: 'asdsdadasfffsadadsdsdsd', slug: 'four-project-time', best: 0 },
  ]
  return (
    <Container>
      <Wrapper>
        <Swiper {...swiperSettings} onAfterInit={() => setInitSlider(true)}>
          {initSlider && fixtures
            ? fixtures.map(
                (post) =>
                  post && (
                    <SwiperSlide key={post.id}>
                      <GallerySliderImage src="/img/bg.jpg" />
                    </SwiperSlide>
                  )
              )
            : 'loading'}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={8}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs, Navigation]}
        >
          {initSlider && fixtures
            ? fixtures.map(
                (post) =>
                  post && (
                    <SwiperSlide>
                      <ThumbsSliderImage src="/img/bg.jpg" />
                    </SwiperSlide>
                  )
              )
            : 'loading'}
        </Swiper>
        <BottomRow>
          <Left>Photo update: Nov 18. 2021</Left>
          <Right>
            <NextPrevWrapper>
              <PrevButton ref={navigationPrevRef}>
                <ArrowLeftIcon />
              </PrevButton>
              <NextButton ref={navigationNextRef}>
                <ArrowRightIcon />
              </NextButton>
            </NextPrevWrapper>
          </Right>
        </BottomRow>
      </Wrapper>
    </Container>
  )
}
