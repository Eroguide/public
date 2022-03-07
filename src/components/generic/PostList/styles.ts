import styled from '@emotion/styled'

export const PostListRowContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-top: 64px;
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
`

export const ContentRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 40px;
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
