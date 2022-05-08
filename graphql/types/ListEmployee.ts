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
   * Is private employee ?
   */
  isPrivate: boolean | null
  /**
   * Emploee's weight
   */
  weight: any
  /**
   * Emploee's height
   */
  height: any
  /**
   * Salon email
   */
  email: string
  /**
   * Salon address
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
