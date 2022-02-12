import styled from '@emotion/styled'

export const CategoryScrollMainContainer = styled.div`
  width: 100%;
  display: flex;
  height: 600px;
  flex-direction: column;
  margin-top: 72px;
`

export const CategoryScrollTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[4]};
  margin: 0;
`

export const CardsRow = styled.div`
  display: flex;
  margin-top: 40px;
  //overflow: hidden;
  // & .slick-track {
  //   display: flex !important;
  // }
  //
  // & .slick-slide {
  //   height: inherit !important;
  //   min-height: 500px;
  // }
  //
  // & .slick-dots {
  //   position: absolute;
  //   bottom: 10px;
  // }
  //
  // & .slick-dots li {
  //   width: 28px;
  //   height: 1px;
  // }
  //
  // & .slick-dots li button:before {
  //   content: '';
  //   opacity: 1;
  //   font-size: 0;
  //   line-height: 0;
  //   width: 28px;
  //   height: 1px;
  //   text-align: center;
  //   background-color: ${({ theme }) => theme.grayScale['5']};
  // }
  //
  // & .slick-dots li.slick-active button:before {
  //   background-color: ${({ theme }) => theme.grayScale['3']};
  //   opacity: 1;
  // }
  //
  // & .slick-active {
  //   position: relative;
  // }
`
