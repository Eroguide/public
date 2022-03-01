/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLaunches
// ====================================================

export interface GetLaunches_launchesPast {
  __typename: 'Launch'
  mission_name: string
  id: string
}

export interface GetLaunches {
  launchesPast: Array<GetLaunches_launchesPast> | null
}
