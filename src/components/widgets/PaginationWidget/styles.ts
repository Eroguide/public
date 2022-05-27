import styled from '@emotion/styled'
import ReactPaginate from 'react-paginate'

export const IconWrapper = styled.span`
  width: 16px;
  height: 16px;
  margin: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-top: 24px;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  list-style: none;
  justify-content: center;
  li.next,
  li.previous {
    color: ${({ theme }) => theme.grayScale[4]};
    ${({ theme }) => theme.typography.pm};
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
    ${({ theme }) => theme.typography.pm};
    margin: 0 2px;
    a {
      height: 100%;
      width: 100%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &:hover {
      background-color: #ff005d0d;
      color: ${({ theme }) => theme.primary[0]};
    }
    &.selected {
      background-color: #ff005d17;
      color: ${({ theme }) => theme.primary[0]};
    }
  }
`
