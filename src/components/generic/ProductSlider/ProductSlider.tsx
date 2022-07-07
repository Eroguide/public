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
import { ListEmployee_listEmployee_edges_node } from '@/graphql/types/ListEmployeeNew'

export const ProductSlider: React.FC<{
  status: boolean
  sliderGallery?: ListEmployee_listEmployee_edges_node['gallery']
}> = ({ status, sliderGallery }) => {
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
    loop: false,
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

  return (
    <>
      {status && (
        <TitleBeforeSlider>
          <IconWrapper>
            <GreenCheckIcon />
          </IconWrapper>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
            natus.
          </span>
        </TitleBeforeSlider>
      )}
      <Container>
        <Wrapper>
          <Swiper {...swiperSettings} onAfterInit={() => setInitSlider(true)}>
            {initSlider && sliderGallery
              ? sliderGallery.map((imgUrl, index) => (
                  <SwiperSlide key={imgUrl + index}>
                    <GallerySliderImage src={imgUrl} />
                  </SwiperSlide>
                ))
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
              {initSlider && sliderGallery
                ? sliderGallery.map((url) => (
                    <SwiperSlide key={url}>
                      <ThumbsSliderImage src={url} />
                    </SwiperSlide>
                  ))
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
