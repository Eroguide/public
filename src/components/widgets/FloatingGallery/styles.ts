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
  height: 144px;
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
