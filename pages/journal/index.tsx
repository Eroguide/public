import { NextPage } from 'next'
import Head from 'next/head'
import { BaseLayout } from '@/components/layouts/BaseLayout'
import {
  GalleryLanding,
  TopLinePageContent,
  GalleryContent,
} from '@/components/generic'
import { TagFilterWidget } from '@/components/widgets/TagFilterWidget'
import {
  JournalContentWrapper,
  FilterColumn,
} from '@/components/widgets/TagFilterWidget/styles'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { breakpoints, BreakpointsEnum } from '@/src/theme'

const Journal: NextPage = () => {
  const isSmall = useBreakpoint({
    min: breakpoints[BreakpointsEnum.xxs].min,
    max: breakpoints[BreakpointsEnum.sm].max,
  })
  return (
    <>
      <Head>
        <title>Journal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <TopLinePageContent />
        <GalleryLanding
          title="Journal"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aperiam assumenda distinctio eaque esse, exercitationem harum inventore iste iusto maiores numquam provident quibusdam, repudiandae. Atque cum et nulla pariatur vel?"
        />
        {isSmall ? (
          <>
            <TagFilterWidget />
            <GalleryContent />
          </>
        ) : (
          <JournalContentWrapper>
            <GalleryContent />
            <FilterColumn>
              <TagFilterWidget />
            </FilterColumn>
          </JournalContentWrapper>
        )}
      </BaseLayout>
    </>
  )
}

export default Journal
