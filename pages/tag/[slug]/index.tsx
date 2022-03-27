import { NextPage } from 'next'
import Head from 'next/head'
import { BaseLayout } from '@/components/layouts/BaseLayout'
import { CardGallery, TopLinePageContent } from '@/components/generic'
import { SectionBlock } from '@/components/layouts/SectionBlock'
const fixtures = [
  { id: '222dsadas', slug: 'one-project-time', best: 1 },
  { id: 'asddsad222sadasd', slug: 'two-project-time', best: 0 },
  { id: 'asdsad3242asd', slug: 'three-project-time', best: 0 },
  { id: 'asdsdadasfffsadasd', slug: 'four-project-time', best: 0 },
  { id: '222dsadassssd', slug: 'one-project-time', best: 1 },
  { id: 'asddsad222sadasssdsdsd', slug: 'two-project-time', best: 0 },
  { id: 'asdsad3242asdssdss', slug: 'three-project-time', best: 0 },
  { id: 'asdsdadasfffsadadsdsdsd', slug: 'four-project-time', best: 0 },
]
const Tags: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tags</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <SectionBlock>
          <TopLinePageContent />
          <CardGallery cards={fixtures} />
        </SectionBlock>
      </BaseLayout>
    </>
  )
}

export default Tags
