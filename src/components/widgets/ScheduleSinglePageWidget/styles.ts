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
  font-size: ${({ theme }) => theme.fontSize['xxl']};
  font-weight: 800;
  color: ${({ theme }) => theme.grayScale[5]};
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
  font-size: ${({ theme }) => theme.fontSize['xs']};
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
  font-size: ${({ theme }) => theme.fontSize['xs']};
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

export const ScheduleBlockWidget = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const WorkingDaysWrapper = styled.div`
  margin: 24px auto 32px auto;
  max-width: 250px;
`
