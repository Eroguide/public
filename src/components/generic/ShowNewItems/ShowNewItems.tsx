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
  DateTag,
} from './styles'
import { Card } from '@/components/generic'

import ArrowLeftIcon from '/public/img/arrow-left.svg'
import ArrowRightIcon from '/public/img/arrow-right.svg'
export type ShowNewProps = {
  date: number
  id: string
  tag?: string
  slug: string
  isLastInGroup?: boolean
  writeDateTitle?: boolean
}
export const ShowNewItems: React.FC<{
  title: string
  itemsToShow?: number
}> = ({ title }) => {
  const navigationPrevRef = useRef<HTMLDivElement>(null)
  const navigationNextRef = useRef<HTMLDivElement>(null)
  const swiperSettings: SwiperOptions = {
    slidesPerView: 'auto',
    freeMode: true,
    modules: [FreeMode, Navigation],
    // breakpoints: {
    //   0: {
    //     slidesPerView: 1,
    //   },
    //   600: {
    //     slidesPerView: itemsToShow,
    //   },
    //   1420: {
    //     slidesPerView: itemsToShow,
    //   },
    // },
    allowSlidePrev: true,
    allowSlideNext: true,
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
  }

  const fixtures: Array<ShowNewProps> = [
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
    { id: 'asdsdadsdasdvadasd', slug: 'x-project-time', date: 4 },
    { id: 'asdsdadsdasdsssvadasd', slug: 'x-project-time', date: 4 },
    { id: 'xfffsadasd', slug: 'four-project-time', date: 5 },
    { id: 'xfffsadasssd', slug: 'four-project-time', date: 8 },
  ]
  const [initSlider, setInitSlider] = useState<boolean>(false)
  const groupsGen: Array<Array<ShowNewProps>> = fixtures.reduce(
    (groups, game) => {
      const date = String(game.date)
      if (!groups[date]) {
        groups[date] = []
      }
      groups[date].push(game)
      return groups
    },
    []
  )

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

  const days = {
    1: 'Dnes',
    2: 'Včera',
    3: '4 záři',
    4: 'Some date',
    5: 'Some date',
    8: 'Some date',
  }

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
                  <Card {...item} tagTitle={item.tag} inSwipe />
                  {item.date && (
                    <>
                      <TimeLine date={item.date} isLast={item.isLastInGroup} />
                      {item.writeDateTitle && (
                        <DateTag date={item.date}>{days[item.date]}</DateTag>
                      )}
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
