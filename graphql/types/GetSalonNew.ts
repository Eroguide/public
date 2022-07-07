/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSalon
// ====================================================

export interface GetSalon_getSalon_services_massages {
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

export interface GetSalon_getSalon_services {
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
  massages: GetSalon_getSalon_services_massages[]
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

export interface GetSalon_getSalon_advantages {
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

export interface GetSalon_getSalon_staff_services_massages {
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

export interface GetSalon_getSalon_staff_services {
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
  massages: GetSalon_getSalon_staff_services_massages[]
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

export interface GetSalon_getSalon_staff_schedule {
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

export interface GetSalon_getSalon_staff_languages {
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

export interface GetSalon_getSalon_staff {
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
  services: GetSalon_getSalon_staff_services[]
  /**
   * Represents belonging to the salon.
   */
  salonId: any | null
  /**
   * Emploee's schedule
   */
  schedule: GetSalon_getSalon_staff_schedule[]
  /**
   * Date when employee was created
   */
  createdAt: any
  /**
   * Emploee's languages
   */
  languages: GetSalon_getSalon_staff_languages[]
}

export interface GetSalon_getSalon {
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
   * Salon desc
   */
  description: string
  /**
   * Salon meta
   */
  metaDescription: string
  /**
   * Date when salon was created
   */
  createdAt: any
  /**
   * Gallery of current salon
   */
  gallery: string[]
  /**
   * Salons services
   */
  services: GetSalon_getSalon_services[]
  /**
   * Advantages of current salon
   */
  advantages: GetSalon_getSalon_advantages[]
  /**
   * Girls which are accept to the salon
   */
  staff: GetSalon_getSalon_staff[]
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

export interface GetSalon {
  /**
   * Get salon by id
   */
  getSalon: GetSalon_getSalon
}

export interface GetSalonVariables {
  id: any
}
