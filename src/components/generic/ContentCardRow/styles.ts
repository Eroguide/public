import styled from '@emotion/styled'

export const ContentCardRowContainer = styled.div`
  width: 100%;
  padding: 0 9px;
  margin-top: 64px;
  //.swiper {
  //  overflow: visible;
  //}

  ${({ theme }) => theme.media.mobile`
       padding: 0;
      .swiper {
        overflow: hidden;
      }
  `}
`

// margin-left: -9px;
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
