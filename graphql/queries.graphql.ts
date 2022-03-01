import { gql } from '@apollo/client'

export const getLaunches = gql`
  query GetLaunches {
    launchesPast(limit: 10) {
      mission_name
      id
    }
  }
`
