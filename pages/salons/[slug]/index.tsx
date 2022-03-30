import { NextPage } from 'next'
import Head from 'next/head'
import { BaseLayout } from '@/components/layouts/BaseLayout'

import {
  ContentCardRow,
  SalonCard,
  TopLinePageContent,
} from '@/components/generic'
import { SalonSinglePageContent } from '@/components/generic/SalonSinglePageContent'
import { SectionBlock } from '@/components/layouts/SectionBlock'
// import { SinglePageContentContainer } from '@/components/generic/SalonSinglePageContent/styles'
import { SwiperSlide } from 'swiper/react'

const SalonsItem: NextPage = () => {
  const fixtures = [
    { id: '222dsadas', slug: 'one-project-time', best: 1 },
    { id: 'asddsad222sadasd', slug: 'two-project-time', best: 0 },
    { id: 'asdsad3242asd', slug: 'three-project-time', best: 0 },
    { id: 'asdsdadasfffsadasd', slug: 'four-project-time', best: 0 },
    { id: 'asdxfsadasd', slug: 'four-project-time', best: 0 },
    { id: 'asdsdadvadasd', slug: 'four-project-time', best: 0 },
    { id: 'xfffsadasd', slug: 'four-project-time', best: 0, tag: 'New' },
    { id: 'xfffsadssasd', slug: 'four-project-time', best: 0, tag: 'New' },
  ]
  return (
    <>
      <Head>
        <title>Favorites</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <SectionBlock>
          <TopLinePageContent />
        </SectionBlock>
        <SectionBlock>
          <SalonSinglePageContent />
        </SectionBlock>
        <SectionBlock>
          <ContentCardRow
            title="Recent salons"
            counter={535}
            spaceBetween={8}
            counterTitle="Recent salons"
            href="/salons"
            withControls
          >
            {fixtures.map((item) => (
              <SwiperSlide key={item.id}>
                <SalonCard {...item} inSwipe />
              </SwiperSlide>
            ))}
          </ContentCardRow>
        </SectionBlock>
      </BaseLayout>
    </>
  )
}

export default SalonsItem
