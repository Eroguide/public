import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { BaseLayout } from '@/components/layouts/BaseLayout'
import { MainFilters } from '@/components/generic/MainFilters/MainFilters'
import { SectionBlock } from '@/components/layouts/SectionBlock'

import {
  ListEmployee,
  ListEmployee_listEmployee_edges,
} from '@/graphql/types/ListEmployeeNew'
import { listEmployee } from '@/graphql/queries.graphql'

import { addApolloState, initializeApollo } from '@/graphql/apollo'

const SearchPage: NextPage<ListEmployee> = ({ listEmployee }) => {
  return (
    <>
      <Head>
        <title>Filters</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <SectionBlock>
          <MainFilters listEmployee={listEmployee} />
        </SectionBlock>
      </BaseLayout>
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: listEmployee,
    variables: { filterSort: query },
  })

  return addApolloState(apolloClient, {
    props: {
      query,
      listEmployee: data.listEmployee,
      galleryList: data.listEmployee.edges.map(
        (v: ListEmployee_listEmployee_edges) => v.node
      ),
    },
  })
}
export default SearchPage
