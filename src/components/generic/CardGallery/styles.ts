import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-top: 64px;
  padding: 0 9px;

  ${({ theme }) => theme.media.mobile`
    padding: 0;
  `}
`

export const CardGalleryContainer = styled.div`
  margin-left: -9px;
  margin-right: -9px;
  height: auto;
  position: relative;
`

export const MessageBox = styled.span`
  display: flex;
  width: 100%;
  height: 300px;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.typography.h3};
  color: ${({ theme }) => theme.grayScale[1]};
  text-align: center;
`

export const GalleryItem = styled.div`
  width: 25%;
  display: flex;
  margin-bottom: 16px;
  ${({ theme }) => theme.media.lg`
    width: 25%;
  `}
  ${({ theme }) => theme.media.md`
    width: calc(100% / 3);
  `}
  ${({ theme }) => theme.media.sm`
   width: 50%;
  `}
  ${({ theme }) => theme.media.mobile`
    width: 100%;
    justify-content: center;
  `}
`

export const TitlePanel = styled.div`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  height: 32px;
  margin-bottom: 40px;
`

export const LeftFilters = styled.div`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`

export const Counter = styled.div`
  ${({ theme }) => theme.typography.h2};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[5]};
`

export const ListWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`
