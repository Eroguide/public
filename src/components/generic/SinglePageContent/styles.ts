import styled from '@emotion/styled'

export const SinglePageContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Banner = styled.div`
  width: 100%;
  height: 320px;
  background: #ebebf0 url('/img/dog.jpg') no-repeat center;
  background-size: cover;
  overflow: hidden;
  border-radius: 24px;
`

export const SinglePageBody = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 24px;
`

export const LeftWidgets = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  overflow: hidden;
  margin-top: -64px;
`

export const Widget = styled.div`
  width: 100%;
  height: auto;
  border-radius: 32px;
  margin-bottom: 24px;
  padding: 64px 0;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.grayScale[1]};
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
`

export const LastCheckDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize['xs']};
  margin-bottom: 24px;
`
