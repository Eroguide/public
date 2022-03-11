import styled from '@emotion/styled'

export const CardGalleryContainer = styled.div`
  margin-left: -12px;
  margin-right: -12px;
  height: auto;
  width: calc(100% + 24px);
  position: relative;
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
  width: 25%;
  display: flex;
  padding: 6px;
  margin-bottom: 16px;
  ${({ theme }) => theme.media.lg`
    width: calc(100% / 4);
  `}
  ${({ theme }) => theme.media.md`
    width: calc(100% / 3);
  `}
  ${({ theme }) => theme.media.sm`
   width: calc(100% / 2 );
  `}
  ${({ theme }) => theme.media.mobile`
      width: calc(100% / 1);
  `}
`

export const TitlePanel = styled.div`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  height: 32px;
  margin: 64px 0 40px 0;
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

export const ListWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`
