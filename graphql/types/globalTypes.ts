/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * Direction of sorting
 */
export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

/**
 * Filtering or sorting on BigInt column
 */
export interface BigIntColumn {
  sort?: SortDirection | null
  priority?: number | null
  eq?: any | null
  neq?: any | null
  from?: any | null
  to?: any | null
  in?: any[] | null
}

/**
 * Filtering or sorting on Date column
 */
export interface DateColumn {
  sort?: SortDirection | null
  priority?: number | null
  from?: any | null
  to?: any | null
}

/**
 * PostFilterSort represents different ways of searching
 */
export interface PostFilterSort {
  fastSearch?: string | null
  byCategory?: string | null
  created?: DateColumn | null
}

/**
 * EmployeeFilterSort represents sorting of employee data
 */
export interface EmployeeFilterSort {
  fastSearch?: string | null
  shift?: string | null
  top?: string | null
  isDraft?: boolean | null
  type?: string | null
  identificatior?: BigIntColumn | null
  shlUpdated?: DateColumn | null
  created?: DateColumn | null
}

//==============================================================
export interface EmployeeSchedule {
  id: any
  day: string
  status: string
  startTime: string
  endTime: string
}

/**
 * SalonFilterSort represents different ways of searching
 */
export interface SalonFilterSort {
  fastSearch?: string | null
  isPrivate?: boolean | null
  isTurnedOff?: boolean | null
  isDraft?: boolean | null
  shlUpdated?: DateColumn | null
  created?: DateColumn | null
}

export interface LocationFilterSort {
  parlourOrEmployee?: string | null
}

export interface CounterInfo {
  from: any
  to: any
  weekDay: string
}
