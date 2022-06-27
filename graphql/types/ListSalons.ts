/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SalonFilterSort } from './globalTypes'

// ====================================================
// GraphQL query operation: ListSalons
// ====================================================

export interface ListSalons_listSalons_pageInfo {
  __typename: 'PageInfo'
  startCursor: any
  endCursor: any
  hasNextPage: boolean
}

export interface ListSalons_listSalons_edges_node_advantages {
  __typename: 'Advantage'
  /**
   * ID
   */
  id: any
  /**
   * Name of advantage
   */
  name: string
  /**
   * Image of advantage
   */
  image: string
  /**
   * Created at
   */
  createdAt: any
}

export interface ListSalons_listSalons_edges_node_staff_languages {
  __typename: 'Language'
  /**
   * ID
   */
  id: any
  /**
   * Language name
   */
  name: string
  /**
   * Date when language was created
   */
  createdAt: any
}

export interface ListSalons_listSalons_edges_node_staff {
  __typename: 'Employee'
  /**
   * ID
   */
  id: any
  /**
   * Name of employee
   */
  name: string
  /**
   * Main photo of employee
   */
  mainPhoto: string
  /**
   * Head photo of employee
   */
  headPhoto: string
  /**
   * Employee status
   */
  status: boolean | null
  /**
   * Age of employee
   */
  age: any
  /**
   * Emploee's weight
   */
  weight: any
  /**
   * Emploee's height
   */
  height: any
  /**
   * Emploee's bust
   */
  breastSize: any
  /**
   * Emploee's foot
   */
  footSize: any
  /**
   * Availability of emploee to come out
   */
  meetingPoint: string
  /**
   * Info about cost of departure
   */
  departureCost: string
  /**
   * Employee price
   */
  price: any
  /**
   * Employee desc
   */
  description: string
  /**
   * interview with Emploee
   */
  interview: string | null
  /**
   * Represents belonging to the salon.
   */
  salonId: any | null
  /**
   * Date when employee was created
   */
  createdAt: any
  /**
   * Emploee's languages
   */
  languages: ListSalons_listSalons_edges_node_staff_languages[]
}

export interface ListSalons_listSalons_edges_node {
  __typename: 'Salon'
  /**
   * id: BigInt!
   */
  id: any
  /**
   * Salon title
   */
  title: string
  /**
   * Salon image
   */
  logo: string
  /**
   * Main photo of salon
   */
  mainPhoto: string
  /**
   * Head photo of salon
   */
  headPhoto: string
  /**
   * Salon address
   */
  address: string | null
  street: string | null
  city: string | null
  province: string | null
  country: string | null

  /**
   * Salon status
   */
  status: boolean | null
  /**
   * Salon site
   */
  site: string
  /**
   * Salon email
   */
  email: string
  /**
   * Salon phone
   */
  phone: string
  /**
   * Salon desc
   */
  description: string
  /**
   * Salon meta
   */
  metaDescription: string
  /**
   * is salon turned on/off ?
   */
  isTurnOff: boolean | null
  /**
   * Is private salon ?
   */
  isPrivate: boolean | null
  /**
   * Date when salon was created
   */
  createdAt: any
  /**
   * Advantages of current salon
   */
  advantages: ListSalons_listSalons_edges_node_advantages[]
  /**
   * Girls which are accept to the salon
   */
  staff: ListSalons_listSalons_edges_node_staff[]
}

export interface ListSalons_listSalons_edges {
  __typename: 'SalonEdge'
  cursor: any
  node: ListSalons_listSalons_edges_node
}

export interface ListSalons_listSalons {
  __typename: 'SalonConnection'
  /**
   * TotalCount is the total amount of items in the list.
   */
  totalCount: any
  /**
   * PageInfo is an information about the current page of the list.
   */
  pageInfo: ListSalons_listSalons_pageInfo
  /**
   * Edges contains provided edges of the sequential list.
   */
  edges: ListSalons_listSalons_edges[]
}

export interface ListSalons {
  /**
   * Get all salons
   */
  listSalons: ListSalons_listSalons
}

export interface ListSalonsVariables {
  filterSort?: SalonFilterSort | null
  first?: number | null
  after?: any | null
}
