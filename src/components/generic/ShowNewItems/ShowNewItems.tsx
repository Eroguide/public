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
import { ListEmployee_listEmployee_edges_node } from '@/graphql/types/ListEmployee'
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
  listEmployee: Array<ListEmployee_listEmployee_edges_node>
}> = ({ title, listEmployee }) => {
  const navigationPrevRef = useRef<HTMLDivElement>(null)
  const navigationNextRef = useRef<HTMLDivElement>(null)
  const swiperSettings: SwiperOptions = {
    slidesPerView: 'auto',
    freeMode: true,
    modules: [FreeMode, Navigation],
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 'auto',
      },
    },
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
  const groupsGen: Array<Array<ShowNewProps>> = listEmployee.reduce(
    (groups, employee) => {
      const date = String(employee.createdAt)
      if (!groups[date]) {
        groups[date] = []
      }
      groups[date].push(employee)
      return groups
    },
    []
  )
  // Edit: to add it in the array format instead
  const groupArrays = Object.keys(groupsGen).map((date) => {
    return {
      createdAt: date,
      employee: groupsGen[date],
    }
  })

  //group
  const arrayEmployee = groupArrays.map((group) => {
    const employees = group.employee

    console.log('employees', employees)
    // const dateGroupLength = employees?.length

    //
    // employees[dateGroupLength - 1].isLastInGroup = true
    // employees[0].writeDateTitle = true
    //
    // console.log('employees AFTER', newObject)
    return employees
  })
  console.log('group', arrayEmployee)
  const arrayFixturesWithDate = true
  // const arrayFixturesWithDate = arrayEmployee.flat()

  // const days = {
  //   1: 'Dnes',
  //   2: 'Včera',
  //   3: '4 záři',
  //   4: 'Some date',
  //   5: 'Some date',
  //   8: 'Some date',
  // }
  console.log('arrayEmployee', arrayEmployee)
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
            arrayEmployee.map((item) => {
              console.log(item)
              return (
                <SwiperSlide key={item.id}>
                  <>
                    <Card {...item} tagTitle={item.tag} inSwipe />
                    {item.createdAt && (
                      <>
                        <TimeLine
                          date={item.date}
                          isLast={item.isLastInGroup}
                        />
                        {<DateTag date={item.date}>{item.createdAt}</DateTag>}
                        dsadasddsa
                      </>
                    )}
                  </>
                </SwiperSlide>
              )
            })}
        </Swiper>
      </ContentRow>
    </ContentCardRowContainer>
  )
}
