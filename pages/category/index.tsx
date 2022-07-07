import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { BaseLayout } from '@/components/layouts/BaseLayout'
import { CardGallery, TopLinePageContent } from '@/components/generic'

import { SectionBlock } from '@/components/layouts/SectionBlock'
import { Loader } from '@/components/widgets/LoaderWidget'
import { listEmployee as listEmployeeQuery } from '@/graphql/queries.graphql'
import {
  ListEmployee,
  ListEmployee_listEmployee_edges,
  // ListEmployee_listEmployee_edges_node,
  ListEmployeeVariables,
} from '@/graphql/types/ListEmployeeNew'

import { CategoryLanding } from '@/components/pages'

// import { useBreakpoint } from '@/hooks/useBreakpoint'
// import { breakpoints, BreakpointsEnum } from '@/src/theme'

import { OperationVariables, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const CategoryAllPage: NextPage = () => {
  let filterSort: {
    created?: {
      from: string
      to: string
    }
    top?: string
    shift?: string
    filter?: { type: string }
    type?: string
  }
  const { query } = useRouter()
  const [category, setCategory] = useState<string>('all')
  const first = 8
  switch (category) {
    case 'all':
      filterSort = {
        created: {
          from: '1976-01-01', // today
          to: '2030-06-12', // TODO GET THE CORRECT DATE month ago
        },
      }
      break
    case 'new':
      filterSort = {
        created: {
          from: '2021-01-01', // today
          to: '2022-06-12', // TODO GET THE CORRECT DATE month ago
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
        shift: 'Monday', // TODO Current Day
      }
      break
    case 'private':
      filterSort = {
        filter: {
          type: 'private-escort',
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
        // created: {
        //   from: '2021-01-01', // today
        //   to: '2022-06-12', // TODO GET THE CORRECT DATE month ago
        // },
      }
  }

  const { data, fetchMore, loading, error } = useQuery<
    ListEmployee,
    ListEmployeeVariables
  >(listEmployeeQuery, {
    variables: { filterSort, first },
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
        <title>Favorites</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <SectionBlock>
          <TopLinePageContent />
          <CategoryLanding />
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

  return {
    props: {
      type,
    },
  }
}

export default CategoryAllPage
