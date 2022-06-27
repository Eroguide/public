import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { BaseLayout } from '@/components/layouts/BaseLayout'
import { SalonGallery, TopLinePageContent } from '@/components/generic'
import { SectionBlock } from '@/components/layouts/SectionBlock'
import { addApolloState, initializeApollo } from '@/graphql/apollo'
import { listSalons } from '@/graphql/queries.graphql'
import {
  ListSalons_listSalons_edges,
  ListSalons_listSalons_edges_node,
} from '@/graphql/types/ListSalons'

const Salons: NextPage<{
  listSalons: Array<ListSalons_listSalons_edges_node>
}> = ({ listSalons }) => {
  return (
    <>
      <Head>
        <title>Favorites</title>
        <meta name="description" content={';sda'} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <SectionBlock>
          <TopLinePageContent />
        </SectionBlock>
        <SectionBlock>
          <SalonGallery listSalons={listSalons} />
        </SectionBlock>
      </BaseLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()
  const { data: salons } = await apolloClient.query({
    query: listSalons,
    variables: { first: 10 },
  })

  const salonsListArray =
    salons.listSalons.edges.map(
      (edge: ListSalons_listSalons_edges) => edge.node
    ) || []

  return addApolloState(apolloClient, {
    props: {
      listSalons: salonsListArray,
    },
  })
}

export default Salons
