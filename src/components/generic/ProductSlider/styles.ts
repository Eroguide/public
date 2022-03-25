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
  ${({ theme }) => theme.typography.pm};
  color: ${({ theme }) => theme.grayScale[3]};
`

export const Right = styled.div`
  border-radius: 32px;
  overflow: hidden;
`

export const TitleBeforeSlider = styled.div`
  display: flex;
  border-radius: 32px;
  height: 24px;
  align-items: center;
  overflow: hidden;
  ${({ theme }) => theme.typography.ps};
  color: ${({ theme }) => theme.grayScale[3]};
  margin-bottom: 16px;
`

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-right: 8px;
`
