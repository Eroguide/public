import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { BaseLayout } from '@/components/layouts/BaseLayout'
import { CardGallery, TopLinePageContent } from '@/components/generic'

import { SectionBlock } from '@/components/layouts/SectionBlock'
import { Loader } from '@/components/widgets/LoaderWidget'
import { allCounters, listEmployee } from '@/graphql/queries.graphql'
import {
  ListEmployee,
  ListEmployee_listEmployee_edges,
  ListEmployeeVariables,
} from '@/graphql/types/ListEmployee'

import { CategoryLanding } from '@/components/pages'
import { OperationVariables, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AllCounters } from '@/graphql/types/GetAllCounters'
import { initializeApollo } from '@/graphql/apollo'
import {
  getDateEndOfToday,
  getDateMonthAgo,
  getTodayString,
} from '@/utils/helpers'
import {
  // BigFilterColumn,
  EmployeeFilterSort,
} from '@/graphql/types/globalTypes'

const CategoryAllPage: NextPage<{ counters: AllCounters; type: string }> = ({
  counters,
  type,
}) => {
  const { query } = useRouter()

  const [category, setCategory] = useState<string>('all')

  const monthAgo = getDateMonthAgo()
  const endOfToday = getDateEndOfToday()
  const first = 8
  let filterSort: EmployeeFilterSort = {}
  switch (category) {
    case 'all':
      break
    case 'new':
      filterSort = {
        created: {
          from: monthAgo,
          to: endOfToday,
        },
      }
      break
    case 'top':
      filterSort = {
        top: 'day_top',
        // Variants:
        // top_date - top employees
        // day_top - top employees of the day
      }
      break
    case 'shift':
      filterSort = {
        shift: getTodayString(),
      }
      break
    case 'private':
      filterSort = {
        filter: {
          types: ['private-escort'],
        },
        //Variants:
        // salon-escort - employees of private salon
        // salon-masseur - employees of common salon
        // private-escort - private employees
        // private-massaur - common masseur
      }
      break
    case 'massage':
      filterSort = {
        type: 'private-massaur',
      }
      break
    default:
      filterSort = {
        created: {
          from: monthAgo,
          to: endOfToday,
        },
      }
  }

  const { data, fetchMore, loading, error } = useQuery<
    ListEmployee,
    ListEmployeeVariables
  >(listEmployee, {
    variables: { filterSort: filterSort, first },
  })

  useEffect(() => {
    if (query.type) setCategory(String(query.type))
  }, [query.type])

  const employeeListArray = data?.listEmployee?.edges.map(
    (edge: ListEmployee_listEmployee_edges) => edge.node
  )

  if (!data || loading) {
    return <Loader />
  }

  if (error) return <p>`Error! ${error.message}`</p>
  const total = data?.listEmployee.totalCount
  const after = data?.listEmployee.pageInfo.endCursor || null

  const handleShowMore = async (): Promise<void> => {
    const dataLength = employeeListArray?.length || 0
    if (total > dataLength) {
      await fetchMore<ListEmployee, ListEmployeeVariables>({
        variables: {
          filterSort,
          first,
          after,
        },
        updateQuery: (
          prevResult: ListEmployee,
          { fetchMoreResult }: OperationVariables
        ) => {
          if (!fetchMoreResult) {
            return
          }
          fetchMoreResult.listEmployee.edges = [
            ...prevResult.listEmployee.edges,
            ...fetchMoreResult.listEmployee.edges,
          ]

          return fetchMoreResult
        },
      })
    }
  }

  return (
    <>
      <Head>
        <title>Category {type}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <SectionBlock>
          <TopLinePageContent />
          <CategoryLanding counters={counters.getCounters} type={type} />
          <CardGallery
            galleryList={employeeListArray || []}
            title={String(category)}
            handleShowMore={handleShowMore}
            counter={total}
          />
        </SectionBlock>
      </BaseLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const apolloClient = initializeApollo()
  const type = query.type
  if (
    !['all', 'new', 'shift', 'top', 'privat', 'massage'].includes(String(type))
  ) {
    return {
      props: {
        type: 'all',
      },
    }
  }

  const { data: counters } = await apolloClient.query({
    query: allCounters,
    variables: {
      info: {
        from: getDateMonthAgo(),
        to: getDateEndOfToday(),
        weekDay: getTodayString(),
      },
    },
  })

  return {
    props: {
      type,
      counters,
    },
  }
}

export default CategoryAllPage
