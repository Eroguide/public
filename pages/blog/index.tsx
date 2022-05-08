import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { BaseLayout } from '@/components/layouts/BaseLayout'
import {
  GalleryLanding,
  TopLinePageContent,
  GalleryContent,
} from '@/components/generic'
import { TagFilterWidget } from '@/components/widgets/TagFilterWidget'
import {
  JournalContentWrapper,
  FilterColumn,
} from '@/components/widgets/TagFilterWidget/styles'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { breakpoints, BreakpointsEnum } from '@/src/theme'
import { SectionBlock } from '@/components/layouts/SectionBlock'
import { addApolloState, initializeApollo } from '@/graphql/apollo'
import { listPosts } from '@/graphql/queries.graphql'
import { GetBlog } from '@/graphql/__generated__/GetLaunches'
import { ListPosts_listPosts_edges } from '@/graphql/types/ListPosts'

const Journal: NextPage<GetBlog> = ({ posts }) => {
  const isSmall = useBreakpoint({
    min: breakpoints[BreakpointsEnum.xxs].min,
    max: breakpoints[BreakpointsEnum.sm].max,
  })

  return (
    <>
      <Head>
        <title>Journal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <SectionBlock isVisible>
          <TopLinePageContent />
          <GalleryLanding
            title="Journal"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aperiam assumenda distinctio eaque esse, exercitationem harum inventore iste iusto maiores numquam provident quibusdam, repudiandae. Atque cum et nulla pariatur vel?"
          />
          {isSmall ? (
            <>
              <TagFilterWidget />
              <GalleryContent content={posts} />
            </>
          ) : (
            <JournalContentWrapper>
              <GalleryContent content={posts} />
              <FilterColumn>
                <TagFilterWidget />
              </FilterColumn>
            </JournalContentWrapper>
          )}
        </SectionBlock>
      </BaseLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: listPosts,
    variables: { first: 10 },
  })
  const postListArray =
    data.listPosts.edges.map((edge: ListPosts_listPosts_edges) => edge.node) ||
    []
  return addApolloState(apolloClient, {
    props: {
      posts: postListArray,
    },
  })
}

export default Journal
