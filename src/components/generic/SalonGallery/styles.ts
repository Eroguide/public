import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  align-items: center;
  flex-direction: column;
  display: flex;
  margin: 0 -12px;
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

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.grayScale[1]};
`

export const GalleryItem = styled.div`
  margin: 6px 6px;
  width: calc(100% / 3 - 12px);
  display: flex;
  ${({ theme }) => theme.media.md`
    width: calc(100% / 2 - 12px);
  `}
  ${({ theme }) => theme.media.sm`
   width: calc(100% / 1 - 12px);
  `}
  ${({ theme }) => theme.media.mobile`
      width: calc(100% / 1 - 12px);
  `}
`
