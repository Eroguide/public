/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CounterInfo } from '@/graphql/types/globalTypes'

// ====================================================
// GraphQL query operation: AllCounters
// ====================================================

export interface AllCounters_getCounters {
  __typename: 'Counter'
  /**
   * Get all employees
   */
  allEmployees: any
  /**
   * Get new employees
   */
  newEmployees: any
  /**
   * Get top employees
   */
  topEmployees: any
  /**
   * Get available employees
   */
  availableEmployees: any
  /**
   * Get all private masseurs
   */
  allMasseurs: any
  /**
   * Get all employees in public parlours
   */
  allPublicParlours: any
  /**
   * Get all private escort employees
   */
  allPrivateEmployees: any
  /**
   * Get all employees in a private parlours
   */
  allPrivateParlours: any
}

export interface AllCounters {
  /**
   * Get all counters
   */
  getCounters: AllCounters_getCounters
}

export interface AllCountersVariables {
  info: CounterInfo
}
