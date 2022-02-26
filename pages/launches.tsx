import React, { Fragment, useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { gql, useQuery } from '@apollo/client'
import { LaunchTile, Header, Button, Loading } from '../components'

export const LAUNCH_TILE_DATA = gql`
  fragment LaunchTile on Launch {
    __typename
    id
    isBooked
    rocket {
      id
      name
    }
    mission {
      name
      missionPatch
    }
  }
`

import { initializeApollo } from '@/lib/apollo'

export const GET_LAUNCHES = gql`
  query GetLaunchList($after: String) {
    launches(after: $after) {
      cursor
      hasMore
      launches {
        ...LaunchTile
      }
    }
  }
  ${LAUNCH_TILE_DATA}
`

interface LaunchesProps extends RouteComponentProps {}

const Launches: React.FC<LaunchesProps> = ({}) => {
  return <div />
}
export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: GET_LAUNCHES,
  })
  console.log('data', data)
  return {
    props: { data },
  }
}
export default Launches
