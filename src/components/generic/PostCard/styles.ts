import styled from '@emotion/styled'

export const CardMainContainer = styled.div`
  width: 100%;
  max-width: 312px;
  min-width: 312px;
  flex-direction: column;
  border-radius: 32px;
  margin-bottom: 32px;
  position: relative;
  padding: 9px 9px 30px 9px;

  ${({ theme }) => theme.media.mobile`
    width: 100% ;
    max-width:100%;
`}
`

export const PostCardInner = styled.div`
  width: 100%;
  background-color: #fff;
  position: relative;
  z-index: 1;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    inset: 0 0 0 0;
    filter: blur(0);
    transition: box-shadow 0.15s ease-in-out;
    z-index: -1;
    border-radius: 32px;
  }
  &:hover {
    &:before {
      content: '';
      transition: box-shadow 0.15s ease-in-out;
      box-shadow: 0 0.91px 2.21px rgba(255, 0, 93, 0.0197),
        0 2.19px 5.32px rgba(255, 0, 93, 0.0283),
        0 4.13px 5px rgba(255, 0, 93, 0.035),
        0 7.37px 10px rgba(255, 0, 93, 0.0417),
        0 6px 15px rgba(255, 0, 93, 0.0503), 0 17px 40px rgba(255, 0, 93, 0.07);
    }
  }
  &:active {
    &:before {
      content: '';
      transition: box-shadow 0.15s ease-in-out;
      box-shadow: 0 0.91px 2.21px rgba(255, 0, 93, 0.0197),
        0 2.19px 5.32px rgba(255, 0, 93, 0.0283),
        0 4.13px 5px rgba(255, 0, 93, 0.035),
        0 7.37px 10px rgba(255, 0, 93, 0.0417),
        0 6px 15px rgba(255, 0, 93, 0.0503), 0 17px 40px rgba(255, 0, 93, 0.07);
    }
  }
`

export const CardImageWrapper = styled.div<{ image: string }>`
  border-radius: 32px;
  display: flex;
  width: 100%;
  height: 296px;
  position: relative;
  background: #ebebf0 url(${({ image }) => image ?? '/img/fake.png'}) no-repeat
    center center;
  background-size: cover;
  overflow: hidden;
  z-index: 1;
  box-shadow: inset 2px 1px 5px #fff;
  transition: box-shadow 0.15s ease-in-out;
  &:hover {
    transition: box-shadow 0.15s ease-in-out;
    box-shadow: inset 0 0 0 #fff;
  }
`

export const ImageProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Description = styled.div`
  width: 100%;
  display: flex;
  padding: 16px 8px;
  flex-wrap: wrap;
  ${({ theme }) => theme.typography.pl};
  font-weight: 600;
`
