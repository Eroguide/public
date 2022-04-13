import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  margin-bottom: 24px;
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  ${({ theme }) => theme.media.md`
        align-items: flex-start;
  `}
  ${({ theme }) => theme.media.sm`
 
        align-items: flex-start;
  `}
  ${({ theme }) => theme.media.mobile`
  
        align-items: flex-start;
  `}
`

export const IconWrapper = styled.div`
  margin-right: 8px;
  width: 24px;
  height: 24px;
`

export const Notifier = styled.div`
  display: flex;
  flex-flow: nowrap row;
  flex-grow: 1;
  width: 35%;
  ${({ theme }) => theme.media.md`
    width: 100%;
  `}
  ${({ theme }) => theme.media.sm`
    width: 100%;
  `}
  ${({ theme }) => theme.media.mobile`
    width: 100%;
  `}
  
  & span {
    color: ${({ theme }) => theme.grayScale[3]};
    ${({ theme }) => theme.typography.pm};
    font-weight: 500;
  }
`

export const FilterOptions = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`

export const FilterItem = styled.li`
  margin-left: 8px;
  &:not(:last-of-type) {
    margin-right: 8px;
  }
`
