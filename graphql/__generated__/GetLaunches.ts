import { ListPosts_listPosts_edges_node } from '@/graphql/types/ListPosts'
export interface GetPost {
  post: ListPosts_listPosts_edges_node
  posts: Array<ListPosts_listPosts_edges_node>
}
export interface GetBlog {
  posts: Array<ListPosts_listPosts_edges_node>
}
