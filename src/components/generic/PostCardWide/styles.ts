import styled from '@emotion/styled'

export const CardMainContainer = styled.div<{ inSwipe?: boolean }>`
  //width: ${({ inSwipe }) => (inSwipe ? '100%' : '628px')};
  min-width: 500px;
  max-width: 641px;
  width: 628px;
  flex-direction: column;
  border-radius: 32px;
  margin-bottom: 32px;
  padding: 9px;
  position: relative;

  ${({ theme }) => theme.media.mobile`
      width: 100%;
      min-width: 320px;
  `}
`

export const CardImageWrapper = styled.div<{ image: string }>`
  border-radius: 32px 32px 0 0;
  display: flex;
  width: 100%;
  height: 296px;
  position: relative;
  background: #ebebf0 url(${({ image }) => image ?? '/img/fake.png'}) no-repeat
    center center;
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

export const Title = styled.h3`
  display: flex;
  flex-wrap: wrap;
  ${({ theme }) => theme.typography.h3};
  font-weight: 600;
`

export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  ${({ theme }) => theme.typography.h4};
  font-weight: 600;
`

export const BottomLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 32px;
`

export const DateText = styled.p`
  display: flex;
  ${({ theme }) => theme.typography.ps};
  color: ${({ theme }) => theme.grayScale['3']};
  align-items: center;
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
