import styled from '@emotion/styled'

export const FloatingGalleryContainer = styled.div`
  position: absolute;
  width: 375px;
  height: 523px;
  top: 16px;
  right: 16px;
  border-radius: 32px;
  background-color: white;
  z-index: 15;
  box-shadow: 0 2.77px 2.21px rgba(199, 217, 244, 0.0141),
    0 6.65px 5.32px rgba(0, 0, 0, 0.0202),
    0 12.52px 10.02px rgba(0, 0, 0, 0.025),
    0 22.24px 17.87px rgba(0, 0, 0, 0.0298),
    0 41.78px 33.42px rgba(0, 0, 0, 0.0359), 0 100px 80px rgba(26, 26, 26, 0.05);
  overflow: hidden;
`

export const CardInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`

export const TopPanel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  background-color: white;
  min-height: 144px;
`

export const Title = styled.h4`
  display: flex;
  ${({ theme }) => theme.typography.h3};
`

export const InfoLine = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;
  justify-content: space-between;
`

export const Left = styled.div`
  display: flex;
  align-items: center;
`

export const Tag = styled.span`
  width: 50%;
  position: absolute;
  left: 0;
  top: -2px;
  height: 19px;
  overflow: hidden;
  border-bottom-right-radius: 32px;
  background-size: cover;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  ${({ theme }) => theme.typography.h7};
  color: ${({ theme }) => theme.primary[2]};
`

export const Circle = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background: ${({ theme }) => theme.support[2]};
`

export const StatusTag = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 48px auto 0 auto;
  align-items: center;
  width: 100%;
`

export const Photo = styled.div<{ image: string }>`
  display: flex;
  width: 104px;
  height: 104px;
  border-radius: 16px;
  background: gray url(${({ image }) => image ?? '/img/fake.png'}) no-repeat
    center top;
  background-size: cover;
  position: relative;
`

export const Name = styled.h2`
  ${({ theme }) => theme.typography.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[5]};
`

export const GirlsNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`

export const LocationText = styled.span`
  ${({ theme }) => theme.typography.h5};
  color: ${({ theme }) => theme.grayScale[3]};
  margin-left: 8px;
`

export const LocationWrapper = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  margin-right: 16px;
`

export const ContentGallery = styled.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: center;
  padding: 0 14px;
  height: 300px;
`

export const ButtonRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: white;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const IconWrapper = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  margin-right: 16px;
  cursor: pointer;

  svg path {
    stroke: ${({ theme }) => theme.grayScale[1]};
  }

  &:hover {
    svg path {
      stroke: ${({ theme }) => theme.grayScale[2]};
    }
  }

  &:active {
    svg path {
      stroke: ${({ theme }) => theme.grayScale[3]};
    }
  }
`
