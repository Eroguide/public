// import { GetPost } from '@/graphql/__generated__/GetLaunches'
import { ListPosts_listPosts_edges_node } from '@/graphql/types/ListPosts'

export type PostCardWideProps = {
  inSwipe?: boolean
} & ListPosts_listPosts_edges_node
