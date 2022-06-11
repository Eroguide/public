import styled from '@emotion/styled'

export const ContentCardRowContainer = styled.div`
  width: 100%;
  padding: 0 9px;
  margin: 72px 0;
  overflow: hidden;
  .swiper {
    overflow: visible;
  }

  ${({ theme }) => theme.media.mobile`
       padding: 0;
      .swiper {
        overflow: hidden;
      }
  `}
`

export const TopLine = styled.div`
  height: 40px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1298px;
  margin: 0 auto 31px auto;
`

export const Title = styled.h3`
  display: flex;
  ${({ theme }) => theme.typography.h2};
  color: ${({ theme }) => theme.grayScale[4]};
  font-weight: 600;
`

export const RightWidget = styled.div`
  display: flex;
`

export const ContentRow = styled.div`
  margin: 0 -9px 0 -9px;
  & .swiper {
    width: 100%;
    display: flex;
  }
  & .swiper-slide {
    width: auto;
  }
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

export const BottomLine = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
`
