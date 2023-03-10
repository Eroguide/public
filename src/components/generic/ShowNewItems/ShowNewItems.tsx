import { useRef, useState } from 'react'
// import 'swiper/css'
import { format } from 'date-fns'
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
    cssMode: true,
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
  }

  const [initSlider, setInitSlider] = useState<boolean>(false)
  const groupsGen: Array<Array<ShowNewProps>> = listEmployee.reduce(
    (groups, employee) => {
      const date = String(new Date(String(employee.createdAt)).getDay() || 1)
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
      createdAt: new Date(date).getDay(),
      employee: groupsGen[date],
    }
  })

  const arrayEmployee: Array<
    Array<
      ListEmployee_listEmployee_edges_node & {
        isLastInGroup?: boolean
        writeDateTitle?: boolean
      }
    >
  > = groupArrays
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((group) => {
      const employees = group.employee
      return employees.map(
        (employee: ListEmployee_listEmployee_edges_node, index: number) => ({
          ...employee,
          isLastInGroup: index === employees?.length - 1,
          writeDateTitle: index === 0,
        })
      )
    })

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
            arrayEmployee.map((items, i) => {
              return items.map((x) => (
                <SwiperSlide key={x.id}>
                  <>
                    <Card {...x} tagTitle={'Best'} inSwipe />
                    {x.createdAt && (
                      <>
                        <TimeLine date={'' + i} isLast={!!x.isLastInGroup} />
                        {x.writeDateTitle && (
                          <DateTag date={i}>
                            {format(new Date(x.createdAt), 'iii, dd MMM.  ')}
                          </DateTag>
                        )}
                      </>
                    )}
                  </>
                </SwiperSlide>
              ))
            })}
        </Swiper>
      </ContentRow>
    </ContentCardRowContainer>
  )
}
