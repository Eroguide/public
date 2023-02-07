import {
  SinglePageContentContainer,
  Banner,
  SinglePageBody,
  LeftWidgets,
  Widget,
  BodyContent,
  DetailsSection,
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
import { useState } from 'react'

import Markdown from 'markdown-to-jsx'
import AnimateHeight from 'react-animate-height'
import { useRouter } from 'next/router'
import {
  ListEmployee_listEmployee_edges,
  ListEmployee_listEmployee_edges_node,
} from '@/graphql/types/ListEmployee'
import { GetSalon_getSalon } from '@/graphql/types/GetSalon'

export const SinglePageContent: React.FC<{
  employee: ListEmployee_listEmployee_edges_node
  girls: Array<ListEmployee_listEmployee_edges>
  salon?: GetSalon_getSalon
}> = ({ employee, girls, salon }) => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false)
  const router = useRouter()
  const sliderGallery = employee.gallery
  const girlsList = girls.map((x) => x.node)
  const { mainPhoto, price, video } = employee
  const salonId = salon?.id
  const isOn = !employee.isTurnOff
  return (
    <SinglePageContentContainer>
      <Banner image={mainPhoto} />
      <SinglePageBody>
        <LeftWidgets>
          <Widget>
            <PersonalInfoSinglePageWidget employee={employee} />
          </Widget>
          {isOn ? (
            <Widget>
              <ScheduleSinglePageWidget price={price} />
            </Widget>
          ) : null}
          {salon && isOn ? <SalonSinglePageWidget salon={salon} /> : null}
        </LeftWidgets>

        <BodyContent>
          {sliderGallery.length > 0 ? (
            <SinglePageContentBlock title="Photo">
              <ProductSlider status sliderGallery={sliderGallery} />
            </SinglePageContentBlock>
          ) : null}
          {isOn ? (
            <DetailsSection>
              <SinglePageContentBlock title="Appearance">
                <ApperianceWidget employee={employee} />
              </SinglePageContentBlock>
              {employee.serviceLike.length ? (
                <SinglePageContentBlock title="Preferences and experience">
                  <ExperianceWidget serviceLike={employee.serviceLike} />
                </SinglePageContentBlock>
              ) : null}
              {employee.interview ? (
                <SinglePageContentBlock title="Interview for Eroguide">
                  <AnimateHeight
                    duration={500}
                    height={isShowMore ? 'auto' : 100}
                  >
                    <Markdown>{String(employee.interview)}</Markdown>
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
                </SinglePageContentBlock>
              ) : null}
              {video ? (
                <SinglePageContentBlock title="Video">
                  <VideoPlayerWidget url={video} />
                </SinglePageContentBlock>
              ) : null}

              <SinglePageContentBlock title="Audio">
                <AudioPlayerWidget />
              </SinglePageContentBlock>
              {girlsList.length && salonId ? (
                <SinglePageContentBlock
                  title="Salon ladies"
                  topButtonHandler={() => router.push(`/salons/${salonId}`)}
                >
                  <LadiesGalleryWidget girls={girlsList} />
                </SinglePageContentBlock>
              ) : null}
            </DetailsSection>
          ) : null}
        </BodyContent>
      </SinglePageBody>
    </SinglePageContentContainer>
  )
}
