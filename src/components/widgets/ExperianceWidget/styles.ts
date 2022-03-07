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
  font-size: ${({ theme }) => theme.fontSize.xs};
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
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.grayScale[3]};
  margin-right: 40px;
  display: flex;
  justify-content: flex-start;
`

export const IconWrapperParameter = styled(IconWrapper)`
  margin-right: 8px;
`

export const ParametersList = styled.ul`
  list-style: none;
  width: 100%;
  column-count: 2;
  column-gap: 48px;
`

export const ParametersListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.grayScale[3]};
  margin-right: 40px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
  align-items: center;
`
