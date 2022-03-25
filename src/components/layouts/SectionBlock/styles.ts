import styled from '@emotion/styled'

export const SectionBlockContainer = styled.section`
  width: 100%;
  height: auto;
  justify-content: center;
  text-align: center;
  display: flex;

  ${({ theme }) => theme.media.mobile`
      width: 100%;
  `}
`

export const InnerContent = styled.div`
  width: 100%;
  height: 100%;
`
