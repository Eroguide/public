import styled from '@emotion/styled'

export const CardGalleryContainer = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`

export const GalleryItem = styled.div`
  margin: 0 12px;
  width: calc(25% - 24px);
  display: flex;
  ${({ theme }) => theme.media.md`
    width: calc(100% / 3 - 24px);
  `}
  ${({ theme }) => theme.media.sm`
   width: calc(100% / 2 - 24px);
  `}
  ${({ theme }) => theme.media.mobile`
      width: calc(100% / 1 - 24px);
  `}
`
