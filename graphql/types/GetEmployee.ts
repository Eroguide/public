/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetEmployee
// ====================================================

export interface GetEmployee_getEmployee {
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
}

export interface GetEmployee {
  /**
   * Get employee by id
   */
  getEmployee: GetEmployee_getEmployee
}

export interface GetEmployeeVariables {
  id: any
}
