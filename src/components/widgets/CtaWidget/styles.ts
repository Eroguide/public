import styled from '@emotion/styled'

export const TitleCta = styled.p`
  color: ${({ theme }) => theme.grayScale[5]};
  font-size: ${({ theme }) => theme.fontSize['s']};
  font-weight: 600;
`

export const SubTitleCta = styled.p`
  color: ${({ theme }) => theme.grayScale[3]};
  font-size: ${({ theme }) => theme.fontSize['xxs']};
  margin-bottom: 16px;
`

export const ContentCta = styled.div<{ isCentered?: boolean }>`
  display: flex;
  flex-flow: column wrap;
  align-items: ${({ isCentered }) => (isCentered ? 'center' : 'flex-start')};
`
