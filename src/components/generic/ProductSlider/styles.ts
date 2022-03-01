import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;

  ${({ theme }) => theme.media.mobile`
      width: 100%;
  `}
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const GallerySliderImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 32px;
  overflow: hidden;
`

export const ThumbsSliderImage = styled.img`
  width: 100%;
  border-radius: 32px;
  overflow: hidden;
`

export const BottomRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
`

export const Left = styled.span`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize['s']};
  color: ${({ theme }) => theme.grayScale[3]};
`

export const Right = styled.div`
  border-radius: 32px;
  overflow: hidden;
`