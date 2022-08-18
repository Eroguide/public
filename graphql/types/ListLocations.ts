/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.
/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LocationFilterSort } from './globalTypes'

// ====================================================
// GraphQL query operation: ListLocation
// ====================================================

export interface ListLocation_listLocation_salon_staff_services_massages {
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

export interface ListLocation_listLocation_salon_staff_services {
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
  massages: ListLocation_listLocation_salon_staff_services_massages[]
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

export interface ListLocation_listLocation_salon_staff_schedule {
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

export interface ListLocation_listLocation_salon_staff_languages {
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

export interface ListLocation_listLocation_salon_staff {
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
   * Emploee's services
   */
  services: ListLocation_listLocation_salon_staff_services[]
  /**
   * Represents belonging to the salon.
   */
  salonId: any | null
  /**
   * Emploee's schedule
   */
  schedule: ListLocation_listLocation_salon_staff_schedule[]
  /**
   * Date when employee was created
   */
  createdAt: any
  /**
   * Emploee's languages
   */
  languages: ListLocation_listLocation_salon_staff_languages[]
}

export interface ListLocation_listLocation_salon {
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
   * Is draft salon ?
   */
  isDraft: boolean | null
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
   * Salon street
   */
  street: string
  /**
   * Salon city
   */
  city: string
  /**
   * Salon province
   */
  province: string
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
   * Girls which are accept to the salon
   */
  staff: ListLocation_listLocation_salon_staff[]
  /**
   * Date when salon will be unactive
   */
  active: string
  /**
   * Is private salon ?
   */
  isPrivate: boolean | null
  /**
   * is salon turned on/off ?
   */
  isTurnOff: boolean | null
  /**
   * Salon manager phone
   */
  managerEmail: string
  /**
   * Salon manager phone
   */
  managerPhone: string
  /**
   * Salon address
   */
  address: string
}

export interface ListLocation_listLocation_employee {
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
   * Emploee's weight
   */
  weight: any
  /**
   * Emploee's height
   */
  height: any
  /**
   * Employee phone
   */
  phone: string | null
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
   * Emploee's street
   */
  street: string
  /**
   * Emploee's city
   */
  city: string
  /**
   * Emploee's province
   */
  province: string
}

export interface ListLocation_listLocation {
  __typename: 'Location'
  /**
   * ID
   */
  id: any
  /**
   * longitude of salon or employee
   */
  longitude: any
  /**
   * latitude of salon or employee
   */
  latitude: any
  /**
   * Salon id
   */
  salonId: any | null
  /**
   * Employee id
   */
  employeeId: any | null
  /**
   * Salon data of current loaction
   */
  salon: ListLocation_listLocation_salon | null
  /**
   * Employee data of current loaction
   */
  employee: ListLocation_listLocation_employee | null
}

export interface ListLocation {
  /**
   * Get all locations
   */
  listLocation: ListLocation_listLocation[]
}

export interface ListLocationVariables {
  filterSort?: LocationFilterSort | null
}
