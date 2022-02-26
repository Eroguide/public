import { gql } from '@apollo/client'

export const typeDefs = gql`
  type Pokemon {
    id: String
    title: String
    description: String
    url: String
    category: String
    imageUrl: String
  }
  type Query {
    items: [Pokemon]!
  }
`
