import styled from '@emotion/styled'

export const CardMainContainer = styled.div<{
  margin?: string
  inSwipe?: boolean
}>`
  width: 100%;
  min-width: 311px;
  flex-direction: column;
  border-radius: 32px;
  ${({ margin }) => margin && `margin:${margin};`}
  position: relative;
  padding: 9px 9px 30px 9px;
`

export const CardInner = styled.div`
  border-radius: 32px;
  background-color: #fff;
  position: relative;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    inset: 0 0 0 0;
    filter: blur(0);
    transition: box-shadow 0.15s ease-in-out;
    z-index: -1;
    border-radius: 32px;
  }
  @media all and (min-width: 960px) {
    &:hover {
      &:before {
        content: '';
        transition: box-shadow 0.15s ease-in-out;
        box-shadow: 0 0.91px 2.21px rgba(255, 0, 93, 0.0197),
          0 2.19px 5.32px rgba(255, 0, 93, 0.0283),
          0 4.13px 5px rgba(255, 0, 93, 0.035),
          0 7.37px 10px rgba(255, 0, 93, 0.0417),
          0 6px 15px rgba(255, 0, 93, 0.0503),
          0 17px 40px rgba(255, 0, 93, 0.07);
      }
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
  border-radius: 32px 32px 0 0;
  display: flex;
  width: 100%;
  height: 368px;
  position: relative;
  background: #ebebf0 url(${({ image }) => image ?? '/img/fake.png'}) no-repeat
    center top;
  background-size: cover;
  overflow: hidden;
  align-items: flex-end;
  z-index: 1;
`

export const ImageProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  inset: 0;
`

export const CardContent = styled.div<{ isOpenSchedule: boolean }>`
  border-left: 1px solid ${({ theme }) => theme.grayScale[1]};
  border-right: 1px solid ${({ theme }) => theme.grayScale[1]};
  border-bottom: 1px solid ${({ theme }) => theme.grayScale[1]};
  padding: ${({ isOpenSchedule }) =>
    isOpenSchedule ? `4px 16px 24px 16px` : '16px 16px 24px 16px'};
  min-height: 140px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0 0 32px 32px;
  z-index: 10;
  overflow-x: hidden;
`

export const TitleLink = styled.a`
  ${({ theme }) => theme.typography.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[4]};
  cursor: pointer;
`

export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 24px;
  align-items: baseline;
  font-weight: 400;
  a {
    margin-right: 8px;
    ${({ theme }) => theme.typography.pm};
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
  align-items: baseline;
`

export const BeforePrice = styled.span`
  color: ${({ theme }) => theme.grayScale[2]};
  ${({ theme }) => theme.typography.pm};
  margin-right: 4px;
  font-weight: 500;
`
export const PriceValue = styled.span`
  color: ${({ theme }) => theme.grayScale[4]};
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin-right: 4px;
`

export const PriceSuffix = styled.span`
  color: ${({ theme }) => theme.grayScale[4]};
  font-size: ${({ theme }) => theme.fontSize['xs']};
  line-height: 24px;
  font-weight: 600;
`
export const Row = styled.div<{ mb?: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  ${({ mb }) => mb && `margin-bottom: ${mb}px;`};
`
export const RowGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 10px;
`
export const Left = styled.div`
  & a {
    text-decoration: none;
  }
`
export const Right = styled.div``
export const TopImageTag = styled.span`
  position: absolute;
  background-color: ${({ theme }) => theme.primary[0]};
  ${({ theme }) => theme.typography.h6};
  font-weight: 500;
  border-radius: 0 0 8px 8px;
  padding: 2px 16px;
  min-width: 60px;
  text-align: center;
  height: 24px;
  display: flex;
  align-items: center;
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
  bottom: 16px;
  right: 16px;
  display: flex;
  z-index: 11;
`

export const AdditionalInformationContent = styled.div`
  width: 100%;
  display: flex;
  height: 96px;
  padding: 24px 16px 12px 16px;
  justify-content: space-between;
  align-items: flex-start;
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

export const LeftBlock = styled.div`
  display: flex;
`
export const RightBlock = styled.div`
  display: flex;
`

export const ContentColumn = styled.div`
  flex-flow: column nowrap;
  margin-right: 16px;
`

export const InfoItem = styled.div`
  color: ${({ theme }) => theme.grayScale[0]};
  ${({ theme }) => theme.typography.ps};
  margin-bottom: 8px;
  & span {
    margin-right: 4px;
  }
`

export const WorkingDaysWrapper = styled.div`
  width: 100%;
  height: 72px;
  background: ${({ theme }) => theme.grayScale[0]};
  z-index: 50;
`

export const PhotoCounter = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 4px;
    color: ${({ theme }) => theme.grayScale[0]};
    ${({ theme }) => theme.typography.ps};
    font-weight: 600;
  }
`

export const VideoIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
`
