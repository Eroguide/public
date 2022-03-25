import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

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

export const WidgetInner = styled.div``

export const LastCheckDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.typography.ps};
  margin-bottom: 24px;
`

export const PriceBlock = styled.div`
  justify-content: center;
  display: flex;
  margin: 32px 0 16px 0;
  align-items: baseline;
`
export const Prefix = styled.span`
  margin-right: 4px;
  ${({ theme }) => theme.typography.pl};
  color: ${({ theme }) => theme.grayScale[3]};
`

export const Price = styled.span`
  margin-right: 4px;
  ${({ theme }) => theme.typography.h2};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[5]};
`

export const Suffix = styled.span`
  font-weight: 600;
  ${({ theme }) => theme.typography.pl};
  color: ${({ theme }) => theme.grayScale[5]};
`

export const ScheduleBlockWidget = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const WorkingDaysWrapper = styled.div`
  margin: 24px auto 32px auto;
  max-width: 250px;
`
