import { NextPage } from 'next'
import Head from 'next/head'
import { BaseLayout } from '@/components/layouts/BaseLayout'
import {
  GalleryLanding,
  TopLineSinglePage,
  GalleryContent,
} from '@/components/generic'

const Journal: NextPage = () => {
  return (
    <>
      <Head>
        <title>Journal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <TopLineSinglePage />
        <GalleryLanding
          title="Journal"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aperiam assumenda distinctio eaque esse, exercitationem harum inventore iste iusto maiores numquam provident quibusdam, repudiandae. Atque cum et nulla pariatur vel?"
        />
        <GalleryContent />
      </BaseLayout>
    </>
  )
}

export default Journal