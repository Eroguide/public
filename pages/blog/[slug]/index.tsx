import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { BaseLayout } from '@/components/layouts/BaseLayout'
import { SinglePostContent, TopLinePageContent } from '@/components/generic'
import { SectionBlock } from '@/components/layouts/SectionBlock'
import { addApolloState, initializeApollo } from '@/graphql/apollo'
import { getPost, listPosts } from '@/graphql/queries.graphql'
import { GetPost } from '@/graphql/__generated__/GetLaunches'
import { ListPosts_listPosts_edges } from '@/graphql/types/ListPosts'

const Post: NextPage<GetPost> = ({ post, posts }) => {
  if (!post && !posts) {
    return <p>...Loading...</p>
  }
  return (
    <>
      <Head>
        <title>title</title>
        <meta name="description" content="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <SectionBlock>
          <TopLinePageContent />
          <SinglePostContent post={post} posts={posts} />
        </SectionBlock>
      </BaseLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const postId = query.slug
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: getPost,
    variables: { id: postId },
  })

  const { data: posts } = await apolloClient.query({
    query: listPosts,
    variables: { first: 10 },
  })

  const postListArray =
    posts.listPosts.edges.map((edge: ListPosts_listPosts_edges) => edge.node) ||
    []

  return addApolloState(apolloClient, {
    props: {
      post: data.getPost,
      posts: postListArray,
    },
  })
}

export default Post
