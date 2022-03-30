import { NextPage } from 'next'
import Head from 'next/head'
import { BaseLayout } from '@/components/layouts/BaseLayout'
import { TopLinePageContent } from '@/components/generic'
import { SalonSinglePageContent } from '@/components/generic/SalonSinglePageContent'
import { SectionBlock } from '@/components/layouts/SectionBlock'

const SalonsItem: NextPage = () => {
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
      </BaseLayout>
    </>
  )
}

export default SalonsItem
