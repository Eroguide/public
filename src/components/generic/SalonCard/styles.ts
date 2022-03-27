import styled from '@emotion/styled'

export const SalonCardMainContainer = styled.div<{ inSwipe?: boolean }>`
  min-width: 430px;
  max-width: calc(100% / 3 - 16px - 18px);
  width: 100%;
  flex-direction: column;
  border-radius: 32px;
  padding: 9px;
  ${({ theme }) => theme.media.sm`
    width: calc(100% / 2 - 16px - 18px);
`}
  ${({ theme }) => theme.media.xs`
    width: calc(100% / 2 - 16px - 18px);
`} 
  ${({ theme }) => theme.media.xxs`
    width:100%;
`}
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
  &:hover {
    &:before {
      content: '';
      background-color: ${({ theme }) => theme.opacity[70][0]};
      transition: filter 0.15s ease-in-out;
      filter: blur(4px);
    }
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

export const Title = styled.h4`
  ${({ theme }) => theme.typography.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[0]};
  margin: 0;
  text-decoration: none;
`

export const CounterText = styled.span`
  ${({ theme }) => theme.typography.pl};
  font-weight: 600;
  color: ${({ theme }) => theme.primary[0]};
  margin-left: 4px;
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
  ${({ theme }) => theme.typography.h5};
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
  ${({ theme }) => theme.typography.h3};
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
  background: #ebebf0 url('/img/fake.png') no-repeat center top;
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
  cursor: pointer;
`

export const RatingValue = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
  ${({ theme }) => theme.typography.h3};
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
  width: calc(100% / 3 - 4px);
  height: 168px;
  border-radius: 10px;
  background: url('/img/fake.png') no-repeat center top;
  background-size: cover;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  //
  // ${({ theme }) => theme.media.sm`
  //   width: calc(100% / 5 - 4px);
  // `}
`

export const WorkingHoursTag = styled.span`
  position: absolute;
  align-items: center;
  top: 10px;
  left: 8px;
  width: 42px;
  height: 16px;
  font-weight: 600;
  ${({ theme }) => theme.typography.h7};
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
  ${({ theme }) => theme.typography.h5};
  font-weight: 600;
  margin-right: 4px;
`

export const Counter = styled.span`
  color: ${({ theme }) => theme.grayScale[0]};
  ${({ theme }) => theme.typography.h2};
  font-weight: 600;
  margin-left: -24px;
`

export const CounterTitle = styled.span`
  color: ${({ theme }) => theme.grayScale[0]};
  ${({ theme }) => theme.typography.h5};
  font-weight: 600;
  margin-right: 4px;
`

export const Right = styled.div``
