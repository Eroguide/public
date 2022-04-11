import { NextPage } from 'next'
import Head from 'next/head'
import { BaseLayout } from '@/components/layouts/BaseLayout'
import { GalleryLanding, TopLinePageContent } from '@/components/generic'
import { CreatePrivatMasseusePage } from '@/components/pages'
import { SectionBlock } from '@/components/layouts/SectionBlock'
const CreateRequestSalonPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create request masseuse</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <SectionBlock>
          <TopLinePageContent />

          <GalleryLanding
            title="List your private masseuse questionnaire"
            text="Eroguide is a professional nude photographer.
At the invitation of massage parlors and private masseuses, I visited several thousand girls - I did photo shoots, videos and interviews. Over time, I added the ability to post profiles with my own photos, but most of them still take photos myself."
          />

          <CreatePrivatMasseusePage />
        </SectionBlock>
      </BaseLayout>
    </>
  )
}

export default CreateRequestSalonPage
