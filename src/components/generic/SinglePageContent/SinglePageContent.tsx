import {
  SinglePageContentContainer,
  Banner,
  SinglePageBody,
  LeftWidgets,
  Widget,
  BodyContent,
  DetailsSection,
  InterviewBlockWrapper,
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

export const SinglePageContent: React.FC = () => {
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
            <ProductSlider />
          </SinglePageContentBlock>
          <DetailsSection>
            <SinglePageContentBlock title="Appearance">
              <ApperianceWidget />
            </SinglePageContentBlock>
            <SinglePageContentBlock title="Preferences and experience">
              <ExperianceWidget />
            </SinglePageContentBlock>
            <SinglePageContentBlock title="Interview for Eroguide">
              <InterviewBlockWrapper>
                <div>
                  <h3>Mohu se u Vás před masáží nebo po masáži osprchovat?</h3>
                  <p>
                    Mohu se u Vás před masáží nebo po masáži osprchovat? Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
                    aliquet risus, libero egestas enim at. Quis maecenas at sit
                  </p>
                </div>
                <div>
                  <h3>Mohu se u Vás před masáží nebo po masáži osprchovat?</h3>
                  <p>
                    Mohu se u Vás před masáží nebo po masáži osprchovat? Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
                    aliquet risus, libero egestas enim at. Quis maecenas at sit
                  </p>
                </div>
                <div>
                  <h3>Mohu se u Vás před masáží nebo po masáži osprchovat?</h3>
                  <p>
                    Mohu se u Vás před masáží nebo po masáži osprchovat? Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
                    aliquet risus, libero egestas enim at. Quis maecenas at sit
                  </p>
                </div>
                <div>
                  <CustomButton
                    styleType={'tertiary'}
                    sizeType={'small'}
                    width={'105px'}
                  >
                    Vice
                  </CustomButton>
                </div>
              </InterviewBlockWrapper>
            </SinglePageContentBlock>
            <SinglePageContentBlock title="Video">
              <VideoPlayerWidget />
            </SinglePageContentBlock>
            <SinglePageContentBlock title="Audio">
              <AudioPlayerWidget />
            </SinglePageContentBlock>
            <SinglePageContentBlock title="Salon ladies">
              <LadiesGalleryWidget />
            </SinglePageContentBlock>
          </DetailsSection>
        </BodyContent>
      </SinglePageBody>
    </SinglePageContentContainer>
  )
}
