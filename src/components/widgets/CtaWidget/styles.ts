import styled from '@emotion/styled'

export const TitleCta = styled.p`
  color: ${({ theme }) => theme.grayScale[5]};
  ${({ theme }) => theme.typography.pm};
  font-weight: 600;
`

export const SubTitleCta = styled.p`
  color: ${({ theme }) => theme.grayScale[3]};
  ${({ theme }) => theme.typography.h7};
  margin-bottom: 16px;
`

export const ContentCta = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
`
