import styled from '@emotion/styled'

export const ContentCardRowContainer = styled.div`
  width: 100%;
  max-width: 1304px;
  padding: 0 12px;
  margin-top: 64px;
  overflow-x: hidden;
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
  ${({ theme }) => theme.media.mobile`
     padding: 0 12px;
  `}
`

export const Title = styled.h3`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.grayScale[4]};
`

export const RightWidget = styled.div`
  display: flex;
  margin-right: -12px;
  ${({ theme }) => theme.media.mobile`
       margin:0;
  `}
`

export const ContentRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  min-width: 1304px;
  margin: 40px -12px 0 -12px;
  ${({ theme }) => theme.media.mobile`
       min-width: auto;
       margin: 40px 0;
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
