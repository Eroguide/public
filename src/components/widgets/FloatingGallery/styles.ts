import styled from '@emotion/styled'

export const FloatingGalleryContainer = styled.div`
  position: absolute;
  width: 375px;
  height: 523px;
  top: 16px;
  right: 16px;
  border-radius: 32px;
  background-color: white;
  z-index: 1000;
  box-shadow: 0 2.77px 2.21px rgba(199, 217, 244, 0.0141),
    0 6.65px 5.32px rgba(0, 0, 0, 0.0202),
    0 12.52px 10.02px rgba(0, 0, 0, 0.025),
    0 22.24px 17.87px rgba(0, 0, 0, 0.0298),
    0 41.78px 33.42px rgba(0, 0, 0, 0.0359), 0 100px 80px rgba(26, 26, 26, 0.05);
`

export const CardInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`
export const CloseButton = styled.div`
  position: absolute;
  height: 24px;
  width: 24px;
  right: 64px;
  top: 64px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.grayScale[1]};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
`
