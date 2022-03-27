import { NextPage } from 'next'
import Head from 'next/head'
import { BaseLayout } from '@/components/layouts/BaseLayout'
import { TopLinePageContent } from '@/components/generic'
import { CreateHowPage } from '@/components/pages'
import { SectionBlock } from '@/components/layouts/SectionBlock'

const CreateRequestPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create request rage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <SectionBlock>
          <TopLinePageContent />
        </SectionBlock>
        <SectionBlock>
          <CreateHowPage />
        </SectionBlock>
      </BaseLayout>
    </>
  )
}

export default CreateRequestPage
