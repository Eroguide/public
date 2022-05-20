import { useRef, useState } from 'react'
import 'swiper/css'
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
  listEmployee: Array<ListEmployee_listEmployee_edges_node & { tag: string }>
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
  > = groupArrays.map((group) => {
    const employees = group.employee
    const dateGroupLength = employees?.length

    return employees.map((employee: any, index: number) => ({
      ...employee,
      isLastInGroup: index === dateGroupLength - 1,
      writeDateTitle: index === 0,
    }))
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
            arrayEmployee.map((items) => {
              return items.map((x) => (
                <SwiperSlide key={x.id}>
                  <>
                    <Card {...x} tagTitle={'Best'} inSwipe />
                    {x.createdAt && (
                      <>
                        <TimeLine date={'2'} isLast={!!x.isLastInGroup} />
                        {x.writeDateTitle && (
                          <DateTag date={2}>
                            {format(new Date(x.createdAt), 'MM/dd/yyyy')}
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
