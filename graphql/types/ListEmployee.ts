/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EmployeeFilterSort } from './globalTypes'
// import { ListLocation_listLocation_salon_staff_services } from '@/graphql/types/ListLocations'

// ====================================================
// GraphQL query operation: ListEmployee
// ====================================================

export interface ListEmployee_listEmployee_pageInfo {
  __typename: 'PageInfo'
  startCursor: any
  endCursor: any
  hasNextPage: boolean
}

export interface ListEmployee_listEmployee_edges_node_serviceLike_service {
  __typename: 'Service'
  /**
   * ID
   */
  id: any
  /**
   * ID
   */
  name: string
  /**
   * Service which accept to current employee
   */
  employeeId: any | null
  /**
   * Desc of service
   */
  description: string
  /**
   * COMMENT OF employeeId
   */
  comment: string | null
}

export interface ListEmployee_listEmployee_edges_node_serviceLike {
  __typename: 'SalonEmployeeServiceLike'
  /**
   * ID
   */
  id: any
  /**
   * ID of current employee
   */
  employeeId: any
  /**
   * description
   */
  description: string | null
  /**
   * preference
   */
  preferences: string
  /**
   * ID of current service
   */
  serviceId: any
  /**
   * service info
   */
  service: ListEmployee_listEmployee_edges_node_serviceLike_service
}

export interface ListEmployee_listEmployee_edges_node_services_massages {
  __typename: 'Massage'
  /**
   * ID
   */
  id: any
  /**
   * Image picture
   */
  image: string
  /**
   * Date of creation
   */
  createdAt: any
  /**
   * Name of massage
   */
  name: string
}

export interface ListEmployee_listEmployee_edges_node_services {
  __typename: 'Service'
  /**
   * ID
   */
  id: any
  /**
   * Name of service
   */
  name: string
  /**
   * Price of service
   */
  price: any
  /**
   * COMMENT OF employeeId
   */
  comment: string | null
  /**
   * Desc of service
   */
  description: string
  /**
   * Desc of phone
   */
  phone: string
  /**
   * Price for 3 hours
   */
  fifPrice: any
  /**
   * Date service creation
   */
  createdAt: any
  /**
   * Service which accept to current salon
   */
  salonId: any | null
  /**
   * Massages included into current service
   */
  massages: ListEmployee_listEmployee_edges_node_services_massages[]
  /**
   * Price for half hour
   */
  fstPrice: any
  /**
   * Price for 2 hours
   */
  fthPrice: any
  /**
   * Price for hour
   */
  sdPrice: any
  /**
   * Price for hour and half
   */
  tdPrice: any
}

export interface ListEmployee_listEmployee_edges_node_schedule {
  __typename: 'EmployeeSchedule'
  /**
   * id: BigInt!
   */
  id: any
  /**
   * Day of week
   */
  day: string
  /**
   * status in current day
   */
  status: string
  /**
   * Start work in current day
   */
  startTime: any
  /**
   * End work in current day
   */
  endTime: any
}

export interface ListEmployee_listEmployee_edges_node_languages {
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

export interface ListEmployee_listEmployee_edges_node {
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
   * Employee desc
   */
  description: string
  /**
   * interview with Emploee
   */
  interview: string | null
  /**
   * interview with Emploee
   */
  phone: string | null
  /**
   * Date when employee was created
   */
  createdAt: any
  /**
   * Age of employee
   */
  age: any
  /**
   * Employee price
   */
  price: any
  /**
   * Availability of emploee to come out
   */
  meetingPoint: string
  /**
   * Emploee's weight
   */
  weight: any
  /**
   * Emploee's height
   */
  height: any
  /**
   * Employee email
   */
  email: string | null
  /**
   * Employee address
   */
  address: string
  /**
   * Main photo of employee
   */
  mainPhoto: string
  /**
   * Head photo of employee
   */
  headPhoto: string
  /**
   * Emploee's bust
   */
  breastSize: any
  /**
   * Emploee's foot
   */
  footSize: any
  /**
   * Is draft salon ?
   */
  isDraft: boolean | null
  /**
   * Active til
   */
  active: string | null
  /**
   * Info about cost of departure
   */
  departureCost: string
  /**
   * Date of top ends
   */
  topDate: any | null
  /**
   * Date of top of day ends
   */
  dayTop: any | null
  /**
   * Date when schedule was updated
   */
  scheduleUpdatedAt: any
  /**
   * Represents belonging to the salon.
   */
  salonId: any | null
  /**
   * Employee status
   */
  status: boolean | null
  /**
   * Gallery of current employee
   */
  gallery: string[]
  /**
   * Emploee's services like
   */
  serviceLike: ListEmployee_listEmployee_edges_node_serviceLike[]
  /**
   * Emploee's services
   */
  services: ListEmployee_listEmployee_edges_node_services[]
  /**
   * Emploee's schedule
   */
  schedule: ListEmployee_listEmployee_edges_node_schedule[]
  /**
   * Emploee's languages
   */
  languages: ListEmployee_listEmployee_edges_node_languages[]
}

export interface ListEmployee_listEmployee_edges {
  __typename: 'EmployeeEdge'
  cursor: any
  node: ListEmployee_listEmployee_edges_node
}

export interface ListEmployee_listEmployee {
  __typename: 'EmployeeConnection'
  /**
   * TotalCount is the total amount of items in the list.
   */
  totalCount: any
  /**
   * PageInfo is an information about the current page of the list.
   */
  pageInfo: ListEmployee_listEmployee_pageInfo
  /**
   * Edges contains provided edges of the sequential list.
   */
  edges: ListEmployee_listEmployee_edges[]
}

export interface ListEmployee {
  /**
   * Get all employees
   */
  listEmployee: ListEmployee_listEmployee
}

export interface ListEmployeeVariables {
  filterSort?: EmployeeFilterSort | null
  first?: number | null
  after?: any | null
}
