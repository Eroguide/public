import styled from '@emotion/styled'

export const CardMainContainer = styled.div<{ inSwipe?: boolean }>`
  width: ${({ inSwipe }) => (inSwipe ? '100%' : '628px')};
  min-width: 500px;
  flex-direction: column;
  border-radius: 32px;
  margin-bottom: 32px;
  padding: 12px;
  position: relative;

  ${({ theme }) => theme.media.mobile`
      width: 100%;
      min-width: 320px;
  `}
`

export const CardImageWrapper = styled.div`
  border-radius: 32px 32px 0 0;
  display: flex;
  width: 100%;
  height: 296px;
  position: relative;
  background: #ebebf0 url('/img/bg.jpg') no-repeat center top;
  background-size: cover;
  overflow: hidden;
`

export const CardContent = styled.div`
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 0 0 32px 32px;
`

export const ImageProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
`

export const Title = styled.h4`
  display: flex;
  flex-wrap: wrap;
  font-size: ${({ theme }) => theme.fontSize['xl']};
  font-weight: 600;
`

export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: ${({ theme }) => theme.fontSize['m']};
  font-weight: 600;
`

export const BottomLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 32px;
`

export const DateText = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize['xs']};
  color: ${({ theme }) => theme.grayScale['2']};
`

export const InnerContainer = styled.div`
  border-radius: 32px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: #fff;
  position: relative;
  z-index: 1;
  border: 1px solid ${({ theme }) => theme.grayScale[1]};

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
