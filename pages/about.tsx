import { NextPage } from 'next'
import Head from 'next/head'
import { BaseLayout } from '@/components/layouts/BaseLayout'
import { GalleryLanding, TopLineSinglePage } from '@/components/generic'

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <TopLineSinglePage />
        <GalleryLanding
          title="About"
          text="Eroguide is a professional nude photographer.
At the invitation of massage parlors and private masseuses, I visited several thousand girls - I did photo shoots, videos and interviews. Over time, I added the ability to post profiles with my own photos, but most of them still take photos myself."
        />
      </BaseLayout>
    </>
  )
}

export default AboutPage
