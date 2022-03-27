import styled from '@emotion/styled'

export const SectionBlockContainer = styled.section<{ isVisible: boolean }>`
  width: 100%;
  height: auto;
  max-width: 2400px;
  justify-content: center;
  display: flex;
  ${({ isVisible }) =>
    isVisible ? 'overflow: visible;' : 'overflow-x: hidden;'};
  margin: 0 auto;
  padding: 0 80px;
  ${({ theme }) => theme.media.md`
    padding: 0 32px;
  `}
  ${({ theme }) => theme.media.sm`
    padding: 0 32px;
  `}
  ${({ theme }) => theme.media.mobile`
    padding: 0 16px;
  `}
  ${({ theme }) => theme.media.mobile`
      width: 100%;
  `}
`

export const InnerContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1298px;
  margin: 0 auto;
`
