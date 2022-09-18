import { useEffect, useState } from 'react'
import { Controls, ReactPaginateStyled, IconWrapper } from './styles'
import PrevIcon from '/public/img/chevron-left.svg'
import NextIcon from '/public/img/chevron-right.svg'

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

// const Items: React.FC<{
//   currentItems: Array<number>
// }> = ({ currentItems }) => {
//   return (
//     <>
//       {currentItems &&
//         currentItems.map((item) => (
//           <div key={item}>
//             <h3>Item #{item}</h3>
//           </div>
//         ))}
//     </>
//   )
// }

export const PaginationWidget: React.FC<{
  itemsPerPage: number
  // items: Array<any>
}> = ({ itemsPerPage = 4 }) => {
  // We start with an empty list of items.

  // const [currentItems, setCurrentItems] = useState<Array<number>>([])
  const [pageCount, setPageCount] = useState<number>(0)
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState<number>(0)

  useEffect(() => {
    // Fetch items from another resources.
    // const endOffset = itemOffset + itemsPerPage
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    // setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [itemOffset, itemsPerPage])

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // )
    setItemOffset(newOffset)
  }

  return (
    <>
      {/*<Items currentItems={currentItems} />*/}
      <ReactPaginateStyled
        breakLabel="..."
        nextLabel={
          <Controls>
            <span>next</span>
            <IconWrapper>
              <NextIcon />
            </IconWrapper>
          </Controls>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={
          <Controls>
            <IconWrapper>
              <PrevIcon />
            </IconWrapper>
            <span> back</span>
          </Controls>
        }
      />
    </>
  )
}
