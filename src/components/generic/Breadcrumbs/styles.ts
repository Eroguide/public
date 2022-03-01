import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
`

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

export const CrumbWrapper = styled.div``

export const CrumbLink = styled.a`
  font-size: ${({ theme }) => theme.fontSize['s']};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[2]};
`

export const CrumbTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize['s']};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[3]};
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  margin: 0 8px;
`
