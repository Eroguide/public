import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  align-items: center;
  flex-direction: column;
  display: flex;
  margin-top: 104px;
`

export const FilterPanel = styled.div`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  height: 32px;
  margin-top: 48px;
`

export const LeftFilters = styled.div`
  width: 50%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`

export const RightFilters = styled.div`
  width: 50%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  display: flex;
`

export const Wrapper = styled.div`
  flex-flow: column wrap;
  width: 50%;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.media.md`
      width: 100%;
  `}
  ${({ theme }) => theme.media.sm`
     width: 100%;
  `}
  ${({ theme }) => theme.media.mobile`
     width: 100%;
  `}
`

export const PostsCounter = styled.span`
  font-size: ${({ theme }) => theme.fontSize['m']};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[5]};
  margin-bottom: 56px;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.grayScale[1]};
`
