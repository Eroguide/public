/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSalon
// ====================================================

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
  address: string
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
