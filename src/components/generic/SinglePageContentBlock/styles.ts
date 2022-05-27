import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  margin-bottom: 32px;
`

export const Title = styled.h3`
  ${({ theme }) => theme.typography.h2};
  color: ${({ theme }) => theme.grayScale[5]};
  font-weight: 600;
  margin-right: 8px;
`

export const TopLine = styled.div`
  width: 100%;
  margin-bottom: 32px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Block = styled.div`
  display: flex;
  align-items: center;
`
