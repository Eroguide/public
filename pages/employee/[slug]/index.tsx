import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { BaseLayout } from '@/components/layouts/BaseLayout'
import { TopLinePageContent, SinglePageContent } from '@/components/generic'
import { SectionBlock } from '@/components/layouts/SectionBlock'
import { addApolloState, initializeApollo } from '@/graphql/apollo'
import { getEmployee, listEmployee } from '@/graphql/queries.graphql'
import {
  ListEmployee_listEmployee_edges,
  ListEmployee_listEmployee_edges_node,
} from '@/graphql/types/ListEmployee'

export type EmployeeType = {
  employee: ListEmployee_listEmployee_edges_node
  girls: Array<ListEmployee_listEmployee_edges>
}

const GalleryItem: NextPage<EmployeeType> = ({ employee, girls }) => {
  return (
    <>
      <Head>
        <title>{employee.name}</title>
        <meta name="description" content={employee.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <SectionBlock>
          <TopLinePageContent />
        </SectionBlock>
        <SectionBlock>
          <SinglePageContent employee={employee} girls={girls} />
        </SectionBlock>
      </BaseLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query.slug
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: getEmployee,
    variables: { id },
  })

  const { data: otherGirls } = await apolloClient.query({
    query: listEmployee,
    variables: { first: 10 },
  })

  const postListArray =
    otherGirls.listEmployee.edges.map(
      (node: ListEmployee_listEmployee_edges) => node
    ) || []

  console.log('postListArray', postListArray)

  return addApolloState(apolloClient, {
    props: {
      employee: data.getEmployee,
      girls: postListArray,
    },
  })
}
export default GalleryItem
