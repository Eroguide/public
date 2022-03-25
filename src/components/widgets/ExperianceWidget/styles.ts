import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  height: auto;
`

export const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Notification = styled.div`
  width: 100%;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.support[1]};
  display: flex;
  padding: 24px 40px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 32px;
`

export const Description = styled.p`
  ${({ theme }) => theme.typography.ps};
  color: ${({ theme }) => theme.grayScale[3]};
`

export const ParametersAnnotation = styled.ul`
  width: 100%;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.grayScale[2]};
  display: flex;
  padding: 16px 24px;
  list-style: none;
  margin-bottom: 48px;
`

export const ParametersItem = styled.li`
  ${({ theme }) => theme.typography.h6};
  color: ${({ theme }) => theme.grayScale[5]};
  margin-right: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${({ theme }) => theme.media.md`
  margin-right: 24px;
  `}
  ${({ theme }) => theme.media.sm`
  margin-right:24px;
  `}
  ${({ theme }) => theme.media.mobile`
     margin-right:24px;
  `}
`

export const IconWrapperParameter = styled(IconWrapper)`
  margin-right: 8px;
`

export const Title = styled.span<{ isCrossed: boolean }>`
  margin-right: 4px;
  ${({ theme }) => theme.typography.h6};
  color: ${({ theme }) => theme.grayScale[5]};
  ${({ isCrossed }) => isCrossed && 'text-decoration: line-through;'};
`

export const Details = styled.span`
  ${({ theme }) => theme.typography.ps};
  color: ${({ theme }) => theme.primary[1]};
`

export const ParametersList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const ParametersListItem = styled.li`
  display: flex;
  margin-bottom: 16px;
  align-items: center;
  width: 50%;
  ${({ theme }) => theme.media.md`
  width: 100%;
  `}
  ${({ theme }) => theme.media.sm`
  width: 50%;
  `}
  ${({ theme }) => theme.media.mobile`
    width: 100%;
  `}
`
