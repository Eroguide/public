import styled from '@emotion/styled'
import ReactPaginate from 'react-paginate'

export const IconWrapper = styled.span`
  width: 16px;
  height: 16px;
  margin: 4px;
`

export const Controls = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
`

export const ReactPaginateStyled = styled(ReactPaginate)`
  max-width: 500px;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  list-style: none;
  justify-content: center;
  li.next,
  li.previous {
    color: ${({ theme }) => theme.grayScale[4]};
    font-size: ${({ theme }) => theme.fontSize.s};
    cursor: pointer;
    font-weight: 600;
    margin: 0 12px;
    text-transform: capitalize;

    ${IconWrapper} {
      svg {
        stroke: ${({ theme }) => theme.grayScale[4]};
      }
    }
    &:hover {
      color: ${({ theme }) => theme.grayScale[5]};
      svg {
        stroke: ${({ theme }) => theme.grayScale[5]};
      }
    }

    &.disabled {
      cursor: not-allowed;
      ${IconWrapper} {
        svg {
          stroke: ${({ theme }) => theme.grayScale[1]};
        }
      }
      color: ${({ theme }) => theme.grayScale[1]}!important;
    }
  }

  li:not(.next, .previous) {
    height: 48px;
    width: 48px;
    background-color: ${({ theme }) => theme.grayScale[0]};
    border-radius: 4px;
    color: ${({ theme }) => theme.grayScale[3]};
    font-size: ${({ theme }) => theme.fontSize.s};
    a {
      height: 100%;
      width: 100%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &:hover {
      background-color: #ff005d03;
      color: ${({ theme }) => theme.primary[0]};
    }
    &.selected {
      background-color: #ff005d08;
      color: ${({ theme }) => theme.primary[0]};
    }
  }
`
