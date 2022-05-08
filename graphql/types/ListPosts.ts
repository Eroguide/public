/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PostFilterSort } from './globalTypes'

// ====================================================
// GraphQL query operation: ListPosts
// ====================================================

export interface ListPosts_listPosts_pageInfo {
  __typename: 'PageInfo'
  startCursor: any
  endCursor: any
  hasNextPage: boolean
}

export interface ListPosts_listPosts_edges_node {
  __typename: 'Post'
  /**
   * ID
   */
  id: any
  /**
   * Title of post
   */
  title: string
  /**
   * Image of post
   */
  image: string
  /**
   * Text of post
   */
  text: string
  /**
   * Date of post creation
   */
  createdAt: any
}

export interface ListPosts_listPosts_edges {
  __typename: 'PostEdge'
  cursor: any
  node: ListPosts_listPosts_edges_node
}

export interface ListPosts_listPosts {
  __typename: 'PostConnection'
  /**
   * TotalCount is the total amount of items in the list.
   */
  totalCount: any
  /**
   * PageInfo is an information about the current page of the list.
   */
  pageInfo: ListPosts_listPosts_pageInfo
  /**
   * Edges contains provided edges of the sequential list.
   */
  edges: ListPosts_listPosts_edges[]
}

export interface ListPosts {
  /**
   * Get all salons
   */
  listPosts: ListPosts_listPosts
}

export interface ListPostsVariables {
  filterSort?: PostFilterSort | null
  first?: number | null
  after?: any | null
}
