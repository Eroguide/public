import { btoa } from 'next/dist/server/web/sandbox/polyfills'

export type PaginationProps = { first: number; after?: string }

export const employeePagination = (
  perPage: number,
  page: number
): PaginationProps => {
  let pagination: PaginationProps = { first: 8 }
  pagination.first = perPage
  if (page !== 1) {
    const cursor = perPage * page - perPage
    pagination.after = btoa(String(cursor))
  }
  return pagination
}
