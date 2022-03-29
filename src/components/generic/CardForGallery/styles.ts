import styled from '@emotion/styled'

export const CardMainContainer = styled.div<{
  inSwipe?: boolean
}>`
  width: 100%;
  flex-direction: column;
  border-radius: 32px;
  padding: 9px;
  position: relative;
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
  background: #ebebf0 url('/img/fake.png') no-repeat center center;
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

export const CardContent = styled.div`
  padding: 32px 24px;
  height: 132px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 0 0 32px 32px;
  z-index: 10;
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
  ${({ theme }) => theme.typography.pm};
  height: 24px;
  font-weight: 500;
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
  align-items: baseline;
`

export const BeforePrice = styled.span`
  color: ${({ theme }) => theme.grayScale[2]};
  ${({ theme }) => theme.typography.pm};
  margin-right: 4px;
`
export const PriceValue = styled.span`
  color: ${({ theme }) => theme.grayScale[4]};
  ${({ theme }) => theme.typography.h4};
  margin-right: 4px;
  font-weight: 500;
`
export const PriceSuffix = styled.span`
  color: ${({ theme }) => theme.grayScale[4]};
  font-size: ${({ theme }) => theme.fontSize['xs']};
  line-height: 24px;
  font-weight: 500;
`
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`
export const Left = styled.div``
export const Right = styled.div``
export const TopImageTag = styled.span`
  position: absolute;
  background-color: ${({ theme }) => theme.primary[2]};
  ${({ theme }) => theme.typography.h7};
  border-radius: 0 0 8px 8px;
  padding: 2px 16px;
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
`

export const WorkingDaysWrapper = styled.div`
  position: absolute;
  width: 100%;
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
