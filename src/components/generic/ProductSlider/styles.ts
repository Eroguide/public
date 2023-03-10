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

export const ImageWrapper = styled.div`
  width: auto;
  height: 500px;
  display: flex;
  justify-content: center;
`

export const GallerySliderImage = styled.img`
  width: auto;
  height: auto;
  border-radius: 32px;
  overflow: hidden;
`

export const ThumbsSliderImage = styled.div<{ url: string }>`
  border-radius: 32px;
  overflow: hidden;
  height: 157px;
  max-width: 157px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.grayScale[0]};
  background: url(${({ url }) => url ?? 'img/mascot/facepalm.jpg'}) no-repeat
    center center;
  background-size: cover;
  transition: border 0.2s ease-in-out;
  &:hover {
    border: 1px solid ${({ theme }) => theme.primary[0]};
    cursor: pointer;
    transition: border 0.2s ease-in-out;
  }
  ${({ theme }) => theme.media.mobile`
    height: 100px;
  `}
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
  overflow: hidden;
`

export const TitleBeforeSlider = styled.div`
  display: flex;
  border-radius: 32px;
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

export const ThumbNavigationWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 16px;
`
