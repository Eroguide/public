import { gql } from '@apollo/client'

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
      #      isPrivate
      weight
      height
      phone
      email
      address
      mainPhoto
      headPhoto
      breastSize
      footSize
      isDraft
      meetingPoint
      departureCost
      topDate
      dayTop
      scheduleUpdatedAt
      salonId
      schedule {
        id
        day
        status
        startTime
        endTime
      }
      services {
        id
        name
        price
        comment
        description
        fifPrice
        createdAt
        salonId
        massages {
          id
          image
          createdAt
          name
        }
        fstPrice
        fthPrice
        sdPrice
        tdPrice
      }
      serviceLike {
        id
        serviceId
        description
        serviceId
        preferences
      }
      gallery
    }
  }
`

export const getSalon = gql`
  query GetSalon($id: BigInt!) {
    getSalon(id: $id) {
      id
      title
      isDraft
      logo
      mainPhoto
      headPhoto
      street
      city
      province
      status
      site
      email
      phone
      description
      metaDescription
      createdAt
      gallery
      services {
        id
        name
        price
        comment
        description
        fifPrice
        createdAt
        salonId
        massages {
          id
          image
          createdAt
          name
        }
        fstPrice
        fthPrice
        sdPrice
        tdPrice
      }
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
        services {
          id
          name
          price
          comment
          description
          fifPrice
          createdAt
          salonId
          massages {
            id
            image
            createdAt
            name
          }
          fstPrice
          fthPrice
          sdPrice
          tdPrice
        }
        salonId
        schedule {
          id
          day
          status
          startTime
          endTime
        }
        createdAt
        languages {
          id
          name
          createdAt
        }
      }
      active
      isPrivate
      isDraft
      isTurnOff
      managerEmail
      managerPhone
      address
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
          image
          isDraft
          metaDescription
          metaTitle
          categories {
            id
            createdAt
            name
          }
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
          street
          city
          province
          address
          status
          site
          email
          phone
          description
          metaDescription
          isTurnOff
          #          isPrivate
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
            schedule {
              id
              day
              status
              startTime
              endTime
            }
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
          mainPhoto
          headPhoto
          status
          active
          address
          email
          phone
          age
          weight
          height
          breastSize
          footSize
          type
          meetingPoint
          departureCost
          price
          description
          interview
          topDate
          dayTop
          scheduleUpdatedAt
          createdAt
          gallery
          serviceLike {
            serviceId
            preferences
          }
          services {
            id
            name
            price
            comment
            description
            fifPrice
            createdAt
            salonId
            massages {
              id
              image
              createdAt
              name
            }
            fstPrice
            fthPrice
            sdPrice
            tdPrice
          }
          schedule {
            id
            day
            status
            startTime
            endTime
          }
          languages {
            id
            name
            createdAt
          }
        }
      }
    }
  }
`

export const listLocation = gql`
  query ListLocation($filterSort: LocationFilterSort) {
    listLocation(filterSort: $filterSort) {
      id
      longitude
      latitude
      salonId
      employeeId
      salon {
        id
        title
        staff {
          id
          name
        }
      }
      employee {
        id
        name
      }
    }
  }
`
//schema:download --endpoint=http://localhost:8080/graphql
