import styled from '@emotion/styled'

export const CardGalleryContainer = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  margin: 0 -17px;
`
export const MessageBox = styled.span`
  display: flex;
  width: 100%;
  height: 300px;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.grayScale[2]};
`

export const GalleryItem = styled.div`
  margin: 0 5px;
  width: calc(25% - 10px);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-width: 302px;
  ${({ theme }) => theme.media.md`
    width: calc(100% / 3 - 10px);
  `}
  ${({ theme }) => theme.media.sm`
   width: calc(100% / 2 - 10px);
  `}
  ${({ theme }) => theme.media.mobile`
      width: calc(100% / 1 - 10px);
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
  width: 50%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`

export const Counter = styled.div`
  font-size: ${({ theme }) => theme.fontSize['xxl']};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[5]};
`
