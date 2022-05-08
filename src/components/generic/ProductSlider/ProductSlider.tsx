import {
  Container,
  Wrapper,
  GallerySliderImage,
  ThumbsSliderImage,
  BottomRow,
  Left,
  Right,
  TitleBeforeSlider,
  IconWrapper,
  ThumbNavigationWrapper,
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
import ArrowLeftIcon from '/public/img/arrow-left.svg'
import ArrowRightIcon from '/public/img/arrow-right.svg'
import GreenCheckIcon from '/public/img/green-circle-check.svg'
import { Swiper as SwiperClass } from 'swiper/types'

export const ProductSlider: React.FC<{ status: boolean }> = ({ status }) => {
  console.log('status', status)
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>()
  const navigationPrevRef = useRef<HTMLDivElement>(null)
  const navigationNextRef = useRef<HTMLDivElement>(null)
  const swiperSettings: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    modules: [Thumbs, Navigation],
    thumbs: { swiper: thumbsSwiper },
    allowSlidePrev: true,
    allowSlideNext: true,

    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
  }
  const swiperSettings2: SwiperOptions = {
    slidesPerView: 4,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 3,
      },
      599: {
        slidesPerView: 4,
      },
      960: {
        slidesPerView: 3,
      },
      1279: {
        slidesPerView: 4,
      },
    },
  }
  const [initSlider, setInitSlider] = useState(false)

  const fixtures = [
    {
      id: '222dsadas',
      slug: 'one-project-time',
      best: 1,
      img: '/img/fake.png',
    },
    {
      id: 'asddsad222sadasd',
      slug: 'two-project-time',
      best: 0,
      img: '/img/fake.png',
    },
    {
      id: 'asdsad3242asd',
      slug: 'three-project-time',
      best: 0,
      img: '/img/fake.png',
    },
    {
      id: 'asdsdadasfffsadasd',
      slug: 'four-project-time',
      best: 0,
      img: '/img/fake.png',
    },
    {
      id: '222dsadassssd',
      slug: 'one-project-time',
      best: 1,
      img: '/img/fake.png',
    },
  ]
  return (
    <>
      <TitleBeforeSlider>
        <IconWrapper>
          <GreenCheckIcon />
        </IconWrapper>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
          natus.
        </span>
      </TitleBeforeSlider>
      <Container>
        <Wrapper>
          <Swiper {...swiperSettings} onAfterInit={() => setInitSlider(true)}>
            {initSlider && fixtures
              ? fixtures.map(
                  (post) =>
                    post && (
                      <SwiperSlide key={post.id}>
                        <GallerySliderImage src={post.img} />
                      </SwiperSlide>
                    )
                )
              : 'loading'}
          </Swiper>
          <ThumbNavigationWrapper>
            <Swiper
              onSwiper={(e) => setThumbsSwiper(e)}
              loop={true}
              spaceBetween={8}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Thumbs, Navigation]}
              {...swiperSettings2}
            >
              {initSlider && fixtures
                ? fixtures.map(
                    (post) =>
                      post && (
                        <SwiperSlide key={post.id}>
                          <ThumbsSliderImage src={post.img} />
                        </SwiperSlide>
                      )
                  )
                : 'loading'}
            </Swiper>
          </ThumbNavigationWrapper>
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
    </>
  )
}
