import styled from '@emotion/styled'

export const PostListRowContainer = styled.div`
  width: 100%;
  margin-top: 64px;
  padding: 0 9px;
  ${({ theme }) => theme.media.mobile`
       padding: 0;
  `}
`

export const TopLine = styled.div`
  width: 100%;
  height: 40px;
  justify-content: space-between;
  display: flex;
  align-items: center;
`

export const Title = styled.h3`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.grayScale[4]};
`

export const RightWidget = styled.div`
  display: flex;
  margin-right: -9px;
  ${({ theme }) => theme.media.mobile`
       margin:0;
  `}
`

export const ContentRow = styled.div`
  width: auto;
  display: flex;
  min-width: 1298px;
  margin: 40px -9px 0 -9px;
  ${({ theme }) => theme.media.mobile`
       min-width: auto;
  `}
`

export const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  flex-wrap: nowrap;
  flex-direction: row;
  padding: 8px 16px;
  border: 2px solid ${({ theme }) => theme.grayScale[1]};
  border-radius: 32px;
`
