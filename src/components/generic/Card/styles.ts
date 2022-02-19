import styled from '@emotion/styled'

export const CardMainContainer = styled.div<{ margin?: string }>`
  width: 302px;
  flex-direction: column;
  border-radius: 32px;
  ${({ margin }) => margin && `margin:${margin};`}
  margin-bottom: 32px;
  position: relative;
  ${({ theme }) => theme.media.mobile`
      width: 100%;
  `}
`

export const CardInner = styled.div`
  border-radius: 32px;
  border: 1px solid ${({ theme }) => theme.grayScale[1]};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: #fff;
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

export const CardImageWrapper = styled.div`
  border-radius: 32px 32px 0 0;
  display: flex;
  width: 100%;
  height: 368px;
  position: relative;
  background: #ebebf0 url('/img/dog.jpg') no-repeat center top;
  background-size: cover;
  overflow: hidden;
  z-index: 1;
`

export const ImageProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize['xl']};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[4]};
`

export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: ${({ theme }) => theme.fontSize['s']};
  height: 24px;
  font-weight: 600;
  a {
    margin-right: 8px;
    color: ${({ theme }) => theme.grayScale[3]};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
export const ScheduleButton = styled.div`
  color: ${({ theme }) => theme.support[2]};
  display: flex;
`
export const Price = styled.div`
  display: flex;
`

export const BeforePrice = styled.div`
  margin-top: 5px;
  color: ${({ theme }) => theme.grayScale[2]};
  font-size: ${({ theme }) => theme.fontSize['s']};
`
export const PriceValue = styled.div`
  color: ${({ theme }) => theme.grayScale[4]};
  font-size: ${({ theme }) => theme.fontSize['l']};
`
export const PriceSuffix = styled.div`
  margin-top: 6px;
  color: ${({ theme }) => theme.grayScale[4]};
  font-size: ${({ theme }) => theme.fontSize['xs']};
`
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  align-items: center;
`
export const Left = styled.div``
export const Right = styled.div``
export const TopImageTag = styled.span`
  position: absolute;
  background-color: ${({ theme }) => theme.primary[2]};
  font-size: ${({ theme }) => theme.fontSize['xxs']};
  border-radius: 0 0 8px 8px;
  min-width: 60px;
  text-align: center;
  color: ${({ theme }) => theme.grayScale[0]};
`

export const FavoriteButton = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  svg {
    transition: fill 0.15s ease-in-out;
    fill: ${({ theme }) => theme.grayScale[2]};
  }
  &:hover {
    ${({ isActive, theme }) =>
      !isActive &&
      ` svg {
        transition:fill 0.15s ease-in-out;
        fill: ${theme.primary[0]};
        }`};
  }
`

export const AdditionalInformation = styled.div`
  position: absolute;
  bottom: 8px;
  right: 16px;
  display: flex;
`

export const AdditionalInformationContent = styled.div`
  width: 100%;
  display: flex;
  height: 96px;
  padding: 24px 16px 12px 16px;
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

export const LeftBlock = styled.div`
  display: flex;
  width: 70%;
`
export const RightBlock = styled.div`
  display: flex;
  width: 30%;
`

export const ContentColumn = styled.div`
  flex-flow: column nowrap;
  margin-right: 16px;
`

export const InfoItem = styled.div`
  color: ${({ theme }) => theme.grayScale[0]};
  font-size: ${({ theme }) => theme.fontSize['xs']};
  font-weight: 600;
`
