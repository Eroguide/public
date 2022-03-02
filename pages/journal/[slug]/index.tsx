import { NextPage } from 'next'
import Head from 'next/head'
import { BaseLayout } from '@/components/layouts/BaseLayout'
import { useRouter } from 'next/router'
import { SinglePostContent, TopLineSinglePage } from '@/components/generic'

const Post: NextPage = () => {
  const { query } = useRouter()
  return (
    <>
      <Head>
        <title>Post</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <TopLineSinglePage />
        <SinglePostContent />
        <p>{query.slug}</p>
      </BaseLayout>
    </>
  )
}

export default Post
