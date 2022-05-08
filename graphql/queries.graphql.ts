import { gql } from '@apollo/client'

export const getLaunches = gql`
  query GetLaunches {
    launchesPast(limit: 10) {
      mission_name
      id
    }
  }
`

export const getPost = gql`
  query GetPost($id: BigInt!) {
    getPost(id: $id) {
      id
      title
      image
      text
      isDraft
      metaTitle
      metaDescription
      createdAt
      categories {
        id
        name
        createdAt
      }
    }
  }
`
export const getEmployee = gql`
  query GetEmployee($id: BigInt!) {
    getEmployee(id: $id) {
      id
      name
      description
      interview
      createdAt
      age
      price
      meetingPoint
      isPrivate
      weight
      height
      email
      address
      mainPhoto
      headPhoto
      #            breastSize
      #            footSize
      #            isDraft
    }
  }
`
export const getSalon = gql`
  query GetSalon($id: BigInt!) {
    getSalon(id: $id) {
      id
      title
      logo
      mainPhoto
      headPhoto
      address
      status
      site
      email
      phone
      description
      metaDescription
      isTurnOff
      isPrivate
      createdAt
    }
  }
`

export const listPosts = gql`
  query ListPosts($filterSort: PostFilterSort, $first: Int, $after: Cursor) {
    listPosts(filterSort: $filterSort, first: $first, after: $after) {
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          title
          image
          text
          createdAt
        }
      }
    }
  }
`

export const listSalons = gql`
  query ListSalons($filterSort: SalonFilterSort, $first: Int, $after: Cursor) {
    listSalons(filterSort: $filterSort, first: $first, after: $after) {
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          title
          logo
          mainPhoto
          headPhoto
          address
          status
          site
          email
          phone
          description
          metaDescription
          isTurnOff
          isPrivate
          createdAt
          advantages {
            id
            name
            image
            createdAt
          }
          staff {
            id
            name
            mainPhoto
            headPhoto
            status
            age
            weight
            height
            breastSize
            footSize
            meetingPoint
            departureCost
            price
            description
            interview
            salonId
            createdAt
            languages {
              id
              name
              createdAt
            }
          }
        }
      }
    }
  }
`

export const listEmployee = gql`
  query ListEmployee(
    $filterSort: EmployeeFilterSort
    $first: Int
    $after: Cursor
  ) {
    listEmployee(filterSort: $filterSort, first: $first, after: $after) {
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          name
          description
          interview
          createdAt
          age
          price
          meetingPoint
          isPrivate
          weight
          height
          email
          address
          mainPhoto
          headPhoto
          breastSize
          footSize
          isDraft
          #          schedule
          address
          active
          #          services
        }
      }
    }
  }
`
