import styled from '@emotion/styled'

export const Desktop = styled.div<{ displayType?: 'flex' | 'block' | string }>`
  display: ${({ displayType }) => (displayType ? displayType : 'flex')};
  flex-direction: inherit;
  width: inherit;
  ${({ theme }) => theme.media.mobile`
     display: none;
  `}
`

export const Mobile = styled.div<{ displayType?: 'flex' | 'block' | string }>`
  display: none;
  flex-direction: inherit;
  ${({ theme, displayType }) => theme.media.mobile`
     display: ${displayType ? displayType : 'flex'};
  `}
`
