import styled from '@emotion/styled'

export const SalonCardMainContainer = styled.div<{ inSwipe?: boolean }>`
  width: ${({ inSwipe }) => (inSwipe ? '100%' : '410px')};
  height: 520px;
  flex-direction: column;
  border-radius: 32px;
  margin-bottom: 32px;
  &:first-of-type {
    margin-right: 0;
  }
`

export const SalonCardInner = styled.div`
  border-radius: 32px;
  border: 2px solid ${({ theme }) => theme.grayScale[1]};
  position: relative;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    inset: 0 0 0 0;
    filter: blur(0);
    transition: filter 0.15s ease-in-out;
    z-index: -1;
    border-radius: 32px;
  }
`

export const CardContent = styled.div`
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 0 0 32px 32px;
  z-index: 10;
`

export const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  height: 96px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
`

export const Title = styled.a`
  font-size: ${({ theme }) => theme.fontSize['xl']};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[0]};
  margin: 0;
  text-decoration: none;
`

export const CounterText = styled.span`
  font-size: ${({ theme }) => theme.fontSize['m']};
  font-weight: 600;
  color: ${({ theme }) => theme.primary[0]};
  margin-left: 4px;
`

export const ButtonShadow = styled.button`
  color: ${({ theme }) => theme.grayScale[5]};
  font-weight: 600;
  background-color: ${({ theme }) => theme.grayScale[0]};
  border: 2px solid ${({ theme }) => theme.grayScale[1]};
  height: 40px;
  border-radius: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  font-size: ${({ theme }) => theme.fontSize['s']};
`
export const InformationContent = styled.div`
  width: 100%;
  display: flex;
  height: 96px;
  padding: 24px 16px 12px 16px;
  justify-content: space-between;
`

export const Description = styled.h5`
  display: flex;
  flex-wrap: wrap;
  font-size: ${({ theme }) => theme.fontSize['s']};
  height: 24px;
  font-weight: 600;
  margin-right: 8px;
  color: ${({ theme }) => theme.grayScale[0]};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export const CounterAvailable = styled.div`
  font-size: ${({ theme }) => theme.fontSize['xl']};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[0]};
  display: flex;
  align-items: center;
`

export const CardImageWrapper = styled.div`
  border-radius: 32px 32px 0 0;
  display: flex;
  width: 100%;
  height: 240px;
  position: relative;
  background: #ebebf0 url('/img/dog.jpg') no-repeat center top;
  background-size: cover;
  overflow: hidden;
  z-index: 1;
`
export const LeftBlock = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
`
export const RightBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 64px;
`

export const ImageProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const RatingValue = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.xl};
`

export const SmallGallery = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const SmallGalleryImageOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  background-color: rgb(30 30 41 / 70%);
  inset: 0;
`

export const SmallGalleryItem = styled.div`
  width: 116px;
  height: 168px;
  border-radius: 10px;
  background: url('/img/dog.jpg') no-repeat center top;
  background-size: cover;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`

export const WorkingHoursTag = styled.span`
  position: absolute;
  align-items: center;
  top: 10px;
  left: 8px;
  width: 42px;
  height: 16px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  border-radius: 32px;
  background-color: white;
  display: flex;
  justify-content: center;
`

export const SmallGalleryItemDescription = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  bottom: 10px;
  left: 8px;
  align-items: center;
  height: 24px;
  margin-right: 8px;
`

export const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`

export const TitleName = styled.h5`
  color: ${({ theme }) => theme.grayScale[0]};
  font-size: ${({ theme }) => theme.fontSize['s']};
  font-weight: 600;
  margin-right: 4px;
`

export const Counter = styled.span`
  color: ${({ theme }) => theme.grayScale[0]};
  font-size: ${({ theme }) => theme.fontSize['xxl']};
  font-weight: 600;
  margin-left: -24px;
`

export const CounterTitle = styled.span`
  color: ${({ theme }) => theme.grayScale[0]};
  font-size: ${({ theme }) => theme.fontSize['s']};
  font-weight: 600;
  margin-right: 4px;
`

export const Left = styled.div``
export const Right = styled.div``
