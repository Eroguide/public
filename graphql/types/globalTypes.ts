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
  created?: DateColumn | null
}

/**
 * EmployeeFilterSort represents sorting of employee data
 */
export interface EmployeeFilterSort {
  fastSearch?: string | null
  isDraft?: boolean | null
  isPrivate?: boolean | null
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
  isDraft?: boolean | null
  created?: DateColumn | null
}
