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
  // ProductSlider,
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
import AnimateHeight from 'react-animate-height'
import { useRouter } from 'next/router'

export const SinglePageContent: React.FC = () => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false)
  const router = useRouter()

  return (
    <SinglePageContentContainer>
      <Banner />
      <SinglePageBody>
        <LeftWidgets>
          <Widget>
            <PersonalInfoSinglePageWidget />
          </Widget>
          <Widget>
            <ScheduleSinglePageWidget />
          </Widget>
          <SalonSinglePageWidget />
        </LeftWidgets>
        <BodyContent>
          <SinglePageContentBlock title="Photo">
            {/*<ProductSlider />*/}
          </SinglePageContentBlock>
          <DetailsSection>
            <SinglePageContentBlock title="Appearance">
              <ApperianceWidget />
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
                  <InterviewBlockWrapper>
                    <div>
                      <h3>
                        Mohu se u Vás před masáží nebo po masáži osprchovat?
                      </h3>
                      <p>
                        Mohu se u Vás před masáží nebo po masáži osprchovat?
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Imperdiet aliquet risus, libero egestas enim at. Quis
                        maecenas at sit
                      </p>
                    </div>
                    <div>
                      <h3>
                        Mohu se u Vás před masáží nebo po masáži osprchovat?
                      </h3>
                      <p>
                        Mohu se u Vás před masáží nebo po masáži osprchovat?
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Imperdiet aliquet risus, libero egestas enim at. Quis
                        maecenas at sit
                      </p>
                    </div>
                    <div>
                      <h3>
                        Mohu se u Vás před masáží nebo po masáži osprchovat?
                      </h3>
                      <p>
                        Mohu se u Vás před masáží nebo po masáži osprchovat?
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Imperdiet aliquet risus, libero egestas enim at. Quis
                        maecenas at sit
                      </p>
                    </div>
                    <div>
                      <h3>
                        Mohu se u Vás před masáží nebo po masáži osprchovat?
                      </h3>
                      <p>
                        Mohu se u Vás před masáží nebo po masáži osprchovat?
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Imperdiet aliquet risus, libero egestas enim at. Quis
                        maecenas at sit
                      </p>
                    </div>
                    <div>
                      <h3>
                        Mohu se u Vás před masáží nebo po masáži osprchovat?
                      </h3>
                      <p>
                        Mohu se u Vás před masáží nebo po masáži osprchovat?
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Imperdiet aliquet risus, libero egestas enim at. Quis
                        maecenas at sit
                      </p>
                    </div>
                    <div>
                      <h3>
                        Mohu se u Vás před masáží nebo po masáži osprchovat?
                      </h3>
                      <p>
                        Mohu se u Vás před masáží nebo po masáži osprchovat?
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Imperdiet aliquet risus, libero egestas enim at. Quis
                        maecenas at sit
                      </p>
                    </div>
                  </InterviewBlockWrapper>
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
              <LadiesGalleryWidget />
            </SinglePageContentBlock>
          </DetailsSection>
        </BodyContent>
      </SinglePageBody>
    </SinglePageContentContainer>
  )
}
