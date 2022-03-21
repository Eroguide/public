import type {
  // GetServerSideProps,
  NextPage,
} from 'next'
import Head from 'next/head'
import { BaseLayout } from '@/components/layouts/BaseLayout'
import { HeroBanner } from '@/components/generic/HeroBanner'
import { HeroFilters } from '@/components/generic/HeroFilters'
import { SalonCard } from '@/components/generic/SalonCard'
import { ContentCardRow } from '@/components/generic/ContentCardRow'
import {
  Card,
  CardGallery,
  MapSection,
  PostCard,
  PostCardWide,
  PostList,
} from '@/components/generic'
import { SwiperSlide } from 'swiper/react'
import { ShowNewItems } from '@/components/generic/ShowNewItems'
// import { getLaunches } from '@/graphql/queries.graphql'
// import { addApolloState, initializeApollo } from '@/graphql/apollo'
import { GetLaunches } from '@/graphql/__generated__/GetLaunches'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { breakpoints, BreakpointsEnum } from '@/src/theme'
// import { useBreakpoints } from '@/hooks/useBreakpoints'
// import { useBreakpointValue } from '@/hooks/useBreakpointValue'

const fixtures = [
  { id: '222dsadas', slug: 'one-project-time', best: 1 },
  { id: 'asddsad222sadasd', slug: 'two-project-time', best: 0 },
  { id: 'asdsad3242asd', slug: 'three-project-time', best: 0 },
  { id: 'asdsdadasfffsadasd', slug: 'four-project-time', best: 0 },
  { id: 'asdxfsadasd', slug: 'four-project-time', best: 0 },
  { id: 'asdsdadvadasd', slug: 'four-project-time', best: 0 },
  { id: 'xfffsadasd', slug: 'four-project-time', best: 0, tag: 'New' },
  { id: 'xfffsadssasd', slug: 'four-project-time', best: 0, tag: 'New' },
]

const Home: NextPage<GetLaunches> = ({ launchesPast }) => {
  const isSmall = useBreakpoint({
    min: breakpoints[BreakpointsEnum.xxs].min,
    max: breakpoints[BreakpointsEnum.sm].max,
  })
  // const isMobile = useBreakpointValue({
  //   xxs: true,
  //   xs: true,
  //   sm: true,
  //   md: false,
  // })

  // console.log('isMobile', isMobile, isSmall)
  return (
    <>
      <Head>
        <title>EroGuide - Home page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <HeroBanner />
        {!isSmall && <HeroFilters />}
        <ShowNewItems itemsToShow={4} title={'New'} />
        <ContentCardRow
          title="Salons"
          counter={535}
          counterTitle="All salons"
          itemsToShow={[3, 2, 2]}
          href="/salons"
        >
          {fixtures.map((item) => (
            <SwiperSlide key={item.id}>
              <SalonCard {...item} inSwipe />
            </SwiperSlide>
          ))}
        </ContentCardRow>
        <ContentCardRow
          title="Private ladies"
          counter={535}
          counterTitle="All private ladies"
          itemsToShow={[4, 3, 2]}
          href="/gallery"
        >
          {fixtures.map((item) => (
            <SwiperSlide key={item.id}>
              <Card {...item} tagTitle={item.slug} inSwipe />
            </SwiperSlide>
          ))}
        </ContentCardRow>
        <CardGallery cards={fixtures} title={'Ladies gallery'} />
        <ContentCardRow
          title="PostCard"
          counter={34}
          counterTitle="All posts"
          itemsToShow={[4, 3, 2]}
          href="/blog"
        >
          {fixtures.map((item) => (
            <SwiperSlide key={item.id}>
              <PostCard {...item} title={item.slug} />
            </SwiperSlide>
          ))}
        </ContentCardRow>
        <MapSection />
        <ContentCardRow
          title="PostCardWide"
          counter={23}
          counterTitle="All posts"
          itemsToShow={[2, 2, 1]}
          href="/blog"
        >
          {fixtures.map((item) => (
            <SwiperSlide key={item.id}>
              <PostCardWide {...item} tagTitle={item.slug} inSwipe />
            </SwiperSlide>
          ))}
        </ContentCardRow>
        {launchesPast && (
          <PostList
            title="PostList"
            counter={23}
            counterTitle="All posts"
            postData={launchesPast}
          />
        )}
      </BaseLayout>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const apolloClient = initializeApollo()
//   const { data } = await apolloClient.query({
//     query: getLaunches,
//   })
//
//   return addApolloState(apolloClient, {
//     props: {
//       launchesPast: data.launchesPast,
//     },
//   })
// }

export default Home
