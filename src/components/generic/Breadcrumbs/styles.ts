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
  ${({ theme }) => theme.typography.pm};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[2]};
  text-decoration: none;
  text-transform: lowercase;
  &:hover {
    color: ${({ theme }) => theme.grayScale[4]};
  }
`

export const CrumbTitle = styled.span`
  ${({ theme }) => theme.typography.pm};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[3]};
  text-transform: lowercase;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  margin: 0 8px;
  svg path {
    stroke: ${({ theme }) => theme.grayScale[2]};
  }
`
