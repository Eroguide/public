import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { BaseLayout } from '@/components/layouts/BaseLayout'
import { HeroBanner } from '@/components/generic/HeroBanner'
import { HeroFilters } from '@/components/generic/HeroFilters'
import { SalonCard } from '@/components/generic/SalonCard'
import { ContentCardRow } from '@/components/generic/ContentCardRow'
import { Card, CardGallery, MapSection, PostList } from '@/components/generic'
import { SwiperSlide } from 'swiper/react'
import { ShowNewItems } from '@/components/generic/ShowNewItems'
import {
  allCounters,
  listEmployee,
  listPosts,
  listSalons,
} from '@/graphql/queries.graphql'
import { addApolloState, initializeApollo } from '@/graphql/apollo'
import { SectionBlock } from '@/components/layouts/SectionBlock'
import { Responsive } from '@/components/generic'
import {
  ListSalons_listSalons_edges,
  ListSalons_listSalons_edges_node,
} from '@/graphql/types/ListSalons'
import {
  ListPosts_listPosts_edges,
  ListPosts_listPosts_edges_node,
} from '@/graphql/types/ListPosts'
import {
  ListEmployee_listEmployee_edges,
  ListEmployee_listEmployee_edges_node,
} from '@/graphql/types/ListEmployeeNew'
import { AllCounters } from '@/graphql/types/GetAllCounters'

export type MainPageSsrProps = {
  listEmployee: Array<ListEmployee_listEmployee_edges_node>
  listPosts: Array<ListPosts_listPosts_edges_node>
  listSalons: Array<ListSalons_listSalons_edges_node>
  counters: AllCounters
}
const Home: NextPage<MainPageSsrProps> = ({
  listEmployee,
  listPosts,
  listSalons,
  counters,
}) => {
  return (
    <>
      <Head>
        <title>EroGuide - Home page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <SectionBlock isVisible>
          <HeroBanner />
          <Responsive desktop>
            <HeroFilters counters={counters.getCounters} />
          </Responsive>
          <ShowNewItems title={'Nové slečny'} listEmployee={listEmployee} />

          <ContentCardRow
            title="Top z privátů"
            counter={52}
            counterTitle="Vše"
            href="/category?type=top"
            bottomControl
          >
            {listEmployee.map((item) => (
              <SwiperSlide key={item.id}>
                <Card {...item} tagTitle={item.__typename} inSwipe />
              </SwiperSlide>
            ))}
          </ContentCardRow>
        </SectionBlock>
        <SectionBlock>
          <ContentCardRow
            title="Holky z privátů"
            counter={73}
            counterTitle="Vše"
            href="/category?type=privat"
            bottomControl
          >
            {listEmployee.map((item) => (
              <SwiperSlide key={item.id}>
                <Card {...item} tagTitle={item.__typename} inSwipe />
              </SwiperSlide>
            ))}
          </ContentCardRow>
        </SectionBlock>

        <SectionBlock>
          <ContentCardRow
            title="Podniky"
            counter={listSalons.length}
            spaceBetween={8}
            counterTitle="Vše"
            href="/salons"
            bottomControl
          >
            {listSalons.map((item) => (
              <SwiperSlide key={item.id}>
                <SalonCard {...item} inSwipe />
              </SwiperSlide>
            ))}
          </ContentCardRow>
        </SectionBlock>
        <SectionBlock>
          {listPosts && (
            <PostList
              title="Články"
              counter={2233}
              counterTitle="Vše"
              postData={listPosts}
            />
          )}
        </SectionBlock>
        <SectionBlock>
          <MapSection />
        </SectionBlock>
        <SectionBlock>
          <CardGallery galleryList={listEmployee} title={'Všechny slečny'} />
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

  const { data: posts } = await apolloClient.query({
    query: listPosts,
    variables: { first: 10 },
  })

  const { data: employee } = await apolloClient.query({
    query: listEmployee,
    variables: { first: 10 },
  })

  const { data: counters } = await apolloClient.query({
    query: allCounters,
    variables: {
      info: {
        from: '2020-03-01',
        to: '2022-01-20',
        weekDay: '',
      },
    },
  })

  const salonsListArray =
    salons.listSalons.edges.map(
      (edge: ListSalons_listSalons_edges) => edge.node
    ) || []

  const postsListArray =
    posts.listPosts.edges.map((edge: ListPosts_listPosts_edges) => edge.node) ||
    []

  const employeeListArray =
    employee.listEmployee.edges.map(
      (edge: ListEmployee_listEmployee_edges) => edge.node
    ) || []

  return addApolloState(apolloClient, {
    props: {
      listSalons: salonsListArray,
      listPosts: postsListArray,
      listEmployee: employeeListArray,
      counters,
    },
  })
}

export default Home
