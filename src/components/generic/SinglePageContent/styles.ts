import styled from '@emotion/styled'

export const SinglePageContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Banner = styled.div`
  width: 100%;
  height: 320px;
  background: #ebebf0 url('/img/bg.jpg') no-repeat center;
  background-size: cover;
  overflow: hidden;
  border-radius: 24px;
`

export const SinglePageBody = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 24px;
  display: flex;
  flex-direction: row;

  ${({ theme }) => theme.media.md`
      width: 100%;
  `}
  ${({ theme }) => theme.media.sm`
   width: 100%;
   flex-direction: column;
    align-items: center;
  `}
  ${({ theme }) => theme.media.mobile`
   width: 100%;
   flex-direction: column;
    align-items: center;
  `}
`

export const DetailsSection = styled.div`
  width: 100%;
  max-width: 508px;
  ${({ theme }) => theme.media.sm`
      max-width: 100%;
  `}
  ${({ theme }) => theme.media.mobile`
       max-width: 100%;
  `}
`

export const LeftWidgets = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  overflow: hidden;
  margin-top: -64px;

  ${({ theme }) => theme.media.md`
     width: 455px;
  `}
  ${({ theme }) => theme.media.sm`
    margin-top: 0;
  width: 100%;
  `}
  
  ${({ theme }) => theme.media.mobile`
    margin-top: 0;
    width: 100%;
  `}
`

export const Widget = styled.div`
  width: 100%;
  height: auto;
  border-radius: 32px;
  margin-bottom: 24px;
  padding: 64px 0;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.grayScale[1]};

  ${({ theme }) => theme.media.md`
   padding:  64px 48px;
  `}
  ${({ theme }) => theme.media.sm`
   padding: 64px  32px;
  `}
  ${({ theme }) => theme.media.mobile`
   padding: 64px 16px;
  `}
`

export const AvatarImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 100%;
  margin-bottom: 24px;
  overflow: hidden;
`

export const NameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`

export const ReviewsCounter = styled.div`
  color: ${({ theme }) => theme.grayScale[5]};
  font-weight: 400;
  background-color: ${({ theme }) => theme.grayScale[1]};
  height: 40px;
  border-radius: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  font-size: ${({ theme }) => theme.fontSize['s']};
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 24px;
`

export const ParametersList = styled.ul`
  color: ${({ theme }) => theme.grayScale[5]};
  font-weight: 400;
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize['s']};
  margin-bottom: 24px;

  ${({ theme }) => theme.media.md`
    width: 200px;
  `}
  ${({ theme }) => theme.media.sm`
    width: 200px;
  `}
  ${({ theme }) => theme.media.mobile`
   width: 200px;
  `}
`
export const Parameter = styled.li`
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize['s']};
  text-decoration: none;
  margin-bottom: 8px;
`

export const Name = styled.h2`
  font-size: ${({ theme }) => theme.fontSize['xxl']};
  font-weight: 800;
  color: ${({ theme }) => theme.grayScale[5]};
`

export const ParameterTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize['s']};
  font-weight: 800;
  color: ${({ theme }) => theme.grayScale[2]};
`

export const ParameterCounter = styled.span`
  font-size: ${({ theme }) => theme.fontSize['s']};
  font-weight: 800;
  color: ${({ theme }) => theme.grayScale[3]};
`

export const Divider = styled.div`
  border: 1px solid ${({ theme }) => theme.grayScale[1]};
  width: 200px;
  margin: 0 auto;
`

export const FirstSection = styled.div`
  width: 100%;
  padding: 0 108px 0 108px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 104px;
  width: 60%;
  margin: 0 auto;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`

export const MemberSince = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize['xs']};
  margin-top: 32px;
`

export const ButtonLined = styled.button`
  color: ${({ theme }) => theme.primary[1]};
  background-color: ${({ theme }) => theme.grayScale[0]};
  border: 2px solid ${({ theme }) => theme.primary[1]};
  height: 40px;
  border-radius: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  font-size: ${({ theme }) => theme.fontSize['s']};
`

export const ScheduleBlockWidget = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const LastCheckDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize['xs']};
  margin-bottom: 24px;
`

export const WorkingDaysWrapper = styled.div`
  margin: 24px 0 32px 0;
`

export const PriceBlock = styled.div`
  justify-content: center;
  display: flex;
  margin: 32px 0 16px 0;
  align-items: baseline;
`
export const Prefix = styled.span`
  margin-right: 4px;
  font-size: ${({ theme }) => theme.fontSize['m']};
  color: ${({ theme }) => theme.grayScale[3]};
  line-height: 24px;
`

export const Price = styled.span`
  margin-right: 4px;
  font-size: ${({ theme }) => theme.fontSize['xxl']};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[5]};
  line-height: 24px;
`

export const Suffix = styled.span`
  line-height: 24px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize['m']};
  color: ${({ theme }) => theme.grayScale[5]};
`

export const GlobusText = styled.span`
  line-height: 24px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize['m']};
  color: ${({ theme }) => theme.grayScale[5]};
  align-items: center;
  margin-left: 8px;
`

export const WidgetInner = styled.div`
  padding: 0 68px;
`

export const SalonImage = styled.img`
  width: 100%;
  height: 136px;
  border-radius: 32px;
  margin-bottom: 24px;
  overflow: hidden;
`

export const Row = styled.div`
  width: 100%;
  margin-bottom: 32px;
  justify-content: space-between;
  display: flex;
`

export const TitleSalon = styled.h4`
  font-size: ${({ theme }) => theme.fontSize['xl']};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[5]};
  max-width: 125px;
`
export const RatingSalon = styled.span`
  font-size: ${({ theme }) => theme.fontSize['xl']};
  font-weight: 600;
  color: ${({ theme }) => theme.support[2]};
`
export const LocationText = styled.span`
  font-size: ${({ theme }) => theme.fontSize['s']};
  color: ${({ theme }) => theme.grayScale[3]};
  margin-left: 8px;
`

export const Left = styled.div`
  display: flex;
  align-items: center;
`

export const Right = styled.div`
  display: flex;
`

export const IconWrapperChevron = styled.div`
  display: flex;
  height: 24px;
  width: 24px;
  justify-content: center;
  align-items: center;
`

export const BodyContent = styled.div`
  width: calc(100% - 375px);
  padding: 40px;

  ${({ theme }) => theme.media.md`
   padding: 32px;
  `}
  ${({ theme }) => theme.media.sm`
      width: 100%;
      padding: 16px;
  `}
  ${({ theme }) => theme.media.mobile`
       width: 100%;
       padding: 16px;
  `}
`
