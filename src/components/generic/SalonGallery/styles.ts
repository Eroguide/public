import styled from '@emotion/styled'

export const Container = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  margin: 0 -9px;
`

export const TitlePanel = styled.div`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
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
  ${({ theme }) => theme.typography.h2};
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
  width: calc(100% / 3);
  display: flex;

  ${({ theme }) => theme.media.md`
    width: calc(100% / 2 );
  `}
  ${({ theme }) => theme.media.sm`
    width: 100%;
  `}
  ${({ theme }) => theme.media.mobile`
      width: 100%;
  `}
`
