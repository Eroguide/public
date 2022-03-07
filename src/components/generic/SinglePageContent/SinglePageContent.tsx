import {
  SinglePageContentContainer,
  Banner,
  SinglePageBody,
  LeftWidgets,
  Widget,
  BodyContent,
  DetailsSection,
} from './styles'

import { ProductSlider, SinglePageContentBlock } from '@/components/generic'
import { ApperianceWidget } from '@/components/widgets/ApperianceWidget'
import { ExperianceWidget } from '@/components/widgets/ExperianceWidget'
import { VideoPlayerWidget } from '@/components/widgets/VideoPlayerWidget'
import { AudioPlayerWidget } from '@/components/widgets/AudioPlayerWidget'
import { LadiesGalleryWidget } from '@/components/widgets/LadiesGalleryWidget'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { breakpoints, BreakpointsEnum } from '@/src/theme'
import { PersonalInfoSinglePageWidget } from '@/components/widgets/PersonalInfoSinglePageWidget'
import { ScheduleSinglePageWidget } from '@/components/widgets/ScheduleSinglePageWidget'
import { SalonSinglePageWidget } from '@/components/widgets/SalonSinglePageWidget'

export const SinglePageContent: React.FC = () => {
  const isSmall = useBreakpoint({
    min: breakpoints[BreakpointsEnum.xxs].min,
    max: breakpoints[BreakpointsEnum.sm].max,
  })
  return (
    <SinglePageContentContainer>
      {!isSmall && <Banner />}
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
              <h3 style={{ marginBottom: '8px' }}>Lorem ipsum dolor.</h3>
              <p>
                Mohu se u Vás před masáží nebo po masáži osprchovat? Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Imperdiet aliquet
                risus, libero egestas enim at. Quis maecenas at sit massa
                suspendisse. Mohu se u Vás před masáží nebo po masáži
                osprchovat? Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Imperdiet aliquet risus, libero egestas enim at. Quis
                maecenas at sit massa suspendisse.
              </p>
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
