import { NextPage } from 'next'
import Head from 'next/head'
import { BaseLayout } from '@/components/layouts/BaseLayout'
import { TopLinePageContent } from '@/components/generic'
import { FaqPage } from '@/components/pages'
import { SectionBlock } from '@/components/layouts/SectionBlock'

const FaqPageNext: NextPage = () => {
  return (
    <>
      <Head>
        <title>F.A.Q. eroguide</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <SectionBlock>
          <TopLinePageContent />
        </SectionBlock>
        <SectionBlock>
          <FaqPage />
        </SectionBlock>
      </BaseLayout>
    </>
  )
}

export default FaqPageNext
