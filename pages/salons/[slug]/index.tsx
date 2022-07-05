import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { BaseLayout } from '@/components/layouts/BaseLayout'
import { TopLinePageContent } from '@/components/generic'
import { SalonSinglePageContent } from '@/components/generic/SalonSinglePageContent'
import { SectionBlock } from '@/components/layouts/SectionBlock'
import { addApolloState, initializeApollo } from '@/graphql/apollo'
import { getSalon, listSalons } from '@/graphql/queries.graphql'
import { GetSalon_getSalon } from '@/graphql/types/GetSalon'
import {
  ListSalons_listSalons_edges,
  ListSalons_listSalons_edges_node,
} from '@/graphql/types/ListSalons'

const SalonsItem: NextPage<{
  getSalon: GetSalon_getSalon
  listSalons: Array<ListSalons_listSalons_edges_node>
}> = ({ getSalon, listSalons }) => {
  console.log('getSalon', getSalon)
  return (
    <>
      <Head>
        <title>{getSalon.__typename}</title>
        <meta name="description" content={getSalon.metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <SectionBlock>
          <TopLinePageContent />
          <SalonSinglePageContent getSalon={getSalon} listSalons={listSalons} />
        </SectionBlock>
      </BaseLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query.slug
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: getSalon,
    variables: { id },
  })

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
      getSalon: data.getSalon,
      listSalons: salonsListArray,
    },
  })
}
export default SalonsItem
