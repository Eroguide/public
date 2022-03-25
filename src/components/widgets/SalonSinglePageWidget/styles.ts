import styled from '@emotion/styled'

export const NameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`

export const Name = styled.h2`
  ${({ theme }) => theme.typography.h2};
  font-weight: 800;
  color: ${({ theme }) => theme.grayScale[5]};
`

export const ParametersList = styled.ul`
  color: ${({ theme }) => theme.grayScale[5]};
  font-weight: 400;
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.typography.pm};
  margin-bottom: 24px;
  min-width: 300px;
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

export const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 104px;
  width: 60%;
  margin: 0 auto;
`

export const MemberSince = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.typography.ps};
  margin-top: 32px;
`

export const Divider = styled.div`
  border: 1px solid ${({ theme }) => theme.grayScale[1]};
  width: 200px;
  margin: 0 auto;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`

export const LastCheckDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.typography.ps};
  margin-bottom: 24px;
`

export const Prefix = styled.span`
  margin-right: 4px;
  ${({ theme }) => theme.typography.pl};
  color: ${({ theme }) => theme.grayScale[3]};
`

export const ScheduleBlockWidget = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const WorkingDaysWrapper = styled.div`
  margin: 24px 0 32px 0;
`

// ----------------------------------

export const Container = styled.div`
  width: 100%;
  height: auto;
  border-radius: 32px;
  margin-bottom: 24px;
  padding: 64px 0;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.grayScale[1]};
`

export const Inner = styled.div`
  width: 100%;
  padding: 0 68px;
`

export const SalonImage = styled.img`
  width: 100%;
  height: 136px;
  border-radius: 32px;
  margin-bottom: 24px;
  overflow: hidden;
`

export const TitleSalon = styled.h3`
  ${({ theme }) => theme.typography.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[5]};
  max-width: 125px;
`

export const Row = styled.div`
  width: 100%;
  margin-bottom: 32px;
  justify-content: space-between;
  display: flex;
`

export const Left = styled.div`
  display: flex;
  align-items: center;
  svg path {
    stroke: ${({ theme }) => theme.grayScale[3]};
  }
`

export const Right = styled.div`
  display: flex;
`

export const GlobusText = styled.span`
  font-weight: 600;
  ${({ theme }) => theme.typography.pl};
  color: ${({ theme }) => theme.grayScale[5]};
  align-items: center;
  margin-left: 8px;
`

export const LocationText = styled.span`
  ${({ theme }) => theme.typography.pm};
  color: ${({ theme }) => theme.grayScale[3]};
  margin-left: 8px;
`

export const RatingSalon = styled.span`
  ${({ theme }) => theme.typography.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.support[2]};
`
