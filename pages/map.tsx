import { NextPage } from 'next'
import Head from 'next/head'
import { BaseLayout } from '@/components/layouts/BaseLayout'
import { TopLinePageContent } from '@/components/generic'
import { MapPage } from '@/components/pages'

const Map: NextPage = () => {
  return (
    <>
      <Head>
        <title>Map</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <TopLinePageContent />
        <MapPage />
      </BaseLayout>
    </>
  )
}

export default Map
