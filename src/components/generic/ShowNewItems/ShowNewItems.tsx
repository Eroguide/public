import { useRef, useState } from 'react'
import 'swiper/css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions, FreeMode, Navigation } from 'swiper'

import {
  ContentCardRowContainer,
  TopLine,
  Title,
  RightWidget,
  ContentRow,
  NextButton,
  NextPrevWrapper,
  PrevButton,
  TimeLine,
} from './styles'
import { Card } from '@/components/generic'

import ArrowLeftIcon from '../../../../public/img/arrow-left.svg'
import ArrowRightIcon from '../../../../public/img/arrow-right.svg'

export const ShowNewItems: React.FC<{
  title: string
  itemsToShow: number
}> = ({ title, itemsToShow }) => {
  const navigationPrevRef = useRef<HTMLDivElement>(null)
  const navigationNextRef = useRef<HTMLDivElement>(null)
  const swiperSettings: SwiperOptions = {
    slidesPerView: itemsToShow,
    freeMode: true,
    modules: [FreeMode, Navigation],
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
        slidesPerView: itemsToShow,
        spaceBetween: 16,
      },
    },
    allowSlidePrev: true,
    allowSlideNext: true,
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
  }

  const fixtures: Array<{
    date: number
    id: string
    tag?: string
    slug: string
    isLastInGroup?: boolean
    writeDateTitle?: boolean
  }> = [
    { id: '222dsadas', slug: 'one-project-time', tag: 'bewst', date: 1 },
    { id: 'asddsad222sadasd', slug: 'two-project-time', tag: 'bewst', date: 2 },
    { id: 'asdsad3242asd', slug: 'three-project-time', tag: 'bewst', date: 2 },
    {
      id: 'asdsdadasfffsadasd',
      slug: 'four-project-time',
      tag: 'bewst',
      date: 3,
    },
    { id: 'asdxfsadasd', slug: 'four-project-time', date: 3 },
    { id: 'asdsdadvadasd', slug: 'four-project-time', date: 4 },
    { id: 'xfffsadasd', slug: 'four-project-time', date: 5 },
    { id: 'xfffsadasssd', slug: 'four-project-time', date: 8 },
  ]
  const [initSlider, setInitSlider] = useState<boolean>(false)
  const groupsGen: any = fixtures.reduce((groups, game) => {
    const date = String(game.date)
    // @ts-ignore
    if (!groups[date]) {
      // @ts-ignore
      groups[date] = []
    }
    // @ts-ignore
    groups[date].push(game)
    return groups
  }, {})

  // Edit: to add it in the array format instead
  const groupArrays = Object.keys(groupsGen).map((date) => {
    return {
      date,
      games: groupsGen[date],
    }
  })

  const arrayGames = groupArrays.map((group) => {
    const dateGroupLength = group.games.length
    group.games[dateGroupLength - 1].isLastInGroup = true
    group.games[0].writeDateTitle = true
    return group.games
  })
  const arrayFixturesWithDate = arrayGames.flat()

  return (
    <ContentCardRowContainer>
      <TopLine>
        <Title>{title}</Title>
        <RightWidget>
          <NextPrevWrapper>
            <PrevButton ref={navigationPrevRef}>
              <ArrowLeftIcon />
            </PrevButton>
            <NextButton ref={navigationNextRef}>
              <ArrowRightIcon />
            </NextButton>
          </NextPrevWrapper>
        </RightWidget>
      </TopLine>
      <ContentRow>
        <Swiper {...swiperSettings} onAfterInit={() => setInitSlider(true)}>
          {initSlider &&
            arrayFixturesWithDate.map((item) => (
              <SwiperSlide key={item.id}>
                <>
                  <Card {...item} tagTitle={item.tag} margin="0 15px 0 0" />
                  {item.date && (
                    <>
                      <TimeLine date={item.date} isLast={item.isLastInGroup} />
                      {item.writeDateTitle && <span> Today 21.24.2222</span>}
                    </>
                  )}
                </>
              </SwiperSlide>
            ))}
        </Swiper>
      </ContentRow>
    </ContentCardRowContainer>
  )
}
