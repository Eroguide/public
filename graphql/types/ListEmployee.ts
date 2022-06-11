/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EmployeeFilterSort } from './globalTypes'

// ====================================================
// GraphQL query operation: ListEmployee
// ====================================================

export interface ListEmployee_listEmployee_pageInfo {
  __typename: 'PageInfo'
  startCursor: any
  endCursor: any
  hasNextPage: boolean
}

export interface ListEmployee_listEmployee_edges_node_serviceLike {
  __typename: 'SalonEmployeeServiceLike'
  /**
   * ID of current service
   */
  serviceId: any
  /**
   * preference
   */
  preferences: string
}

export interface ListEmployee_listEmployee_edges_node_services {
  __typename: 'Service'
  /**
   * ID
   */
  id: any
  /**
   * PREFERENCE OF employeeId
   */
  preference: string | null
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
   * Active til
   */
  active: string | null
  /**
   * Salon address
   */
  address: string | null
  /**
   * Salon email
   */
  email: string | null
  /**
   * Salon phone
   */
  phone: string | null
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
   * Is private employee ?
   */
  type: string
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
   * Date when employee was created
   */
  createdAt: any
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
