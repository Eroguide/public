import {
  SinglePageContentContainer,
  Banner,
  SinglePageBody,
  LeftWidgets,
  Widget,
  BodyContent,
  DetailsSection,
  InterviewBlockWrapper,
  RowRight,
} from './styles'

import {
  CustomButton,
  ProductSlider,
  SinglePageContentBlock,
} from '@/components/generic'
import { ApperianceWidget } from '@/components/widgets/ApperianceWidget'
import { ExperianceWidget } from '@/components/widgets/ExperianceWidget'
import { VideoPlayerWidget } from '@/components/widgets/VideoPlayerWidget'
import { AudioPlayerWidget } from '@/components/widgets/AudioPlayerWidget'
import { LadiesGalleryWidget } from '@/components/widgets/LadiesGalleryWidget'
import { PersonalInfoSinglePageWidget } from '@/components/widgets/PersonalInfoSinglePageWidget'
import { ScheduleSinglePageWidget } from '@/components/widgets/ScheduleSinglePageWidget'
import { SalonSinglePageWidget } from '@/components/widgets/SalonSinglePageWidget'
import { useEffect, useRef, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import { useRouter } from 'next/router'
import {
  ListEmployee_listEmployee_edges,
  ListEmployee_listEmployee_edges_node,
} from '@/graphql/types/ListEmployee'

export const SinglePageContent: React.FC<{
  employee: ListEmployee_listEmployee_edges_node
  girls: Array<ListEmployee_listEmployee_edges>
}> = ({ employee, girls }) => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false)
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)
  const sliderGallery = employee.gallery

  useEffect(() => {
    if (ref && employee && ref.current) {
      ref.current.innerHTML = String(employee.interview)
    }
  }, [ref, employee])

  return (
    <SinglePageContentContainer>
      <Banner />
      <SinglePageBody>
        <LeftWidgets>
          <Widget>
            <PersonalInfoSinglePageWidget employee={employee} />
          </Widget>
          <Widget>
            <ScheduleSinglePageWidget price={employee.price} />
          </Widget>
          <SalonSinglePageWidget />
        </LeftWidgets>
        <BodyContent>
          <SinglePageContentBlock title="Photo">
            <ProductSlider status sliderGallery={sliderGallery} />
          </SinglePageContentBlock>
          <DetailsSection>
            <SinglePageContentBlock title="Appearance">
              <ApperianceWidget employee={employee} />
            </SinglePageContentBlock>
            <SinglePageContentBlock title="Preferences and experience">
              <ExperianceWidget />
            </SinglePageContentBlock>
            <SinglePageContentBlock title="Interview for Eroguide">
              <>
                <AnimateHeight
                  duration={500}
                  height={isShowMore ? 'auto' : 400}
                >
                  <InterviewBlockWrapper ref={ref} />
                </AnimateHeight>
                <RowRight>
                  <CustomButton
                    styleType={'tertiary'}
                    sizeType={'small'}
                    onClick={() => setIsShowMore(!isShowMore)}
                    width={'105px'}
                  >
                    Vice
                  </CustomButton>
                </RowRight>
              </>
            </SinglePageContentBlock>
            <SinglePageContentBlock title="Video">
              <VideoPlayerWidget />
            </SinglePageContentBlock>
            <SinglePageContentBlock title="Audio">
              <AudioPlayerWidget />
            </SinglePageContentBlock>
            <SinglePageContentBlock
              title="Salon ladies"
              topButtonHandler={() => router.push('/salons')}
            >
              <LadiesGalleryWidget girls={girls} />
            </SinglePageContentBlock>
          </DetailsSection>
        </BodyContent>
      </SinglePageBody>
    </SinglePageContentContainer>
  )
}
