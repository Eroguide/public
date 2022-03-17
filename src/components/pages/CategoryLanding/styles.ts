import styled from '@emotion/styled'

export const CategoryLandingContainer = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  margin-bottom: 100px;
  ${({ theme }) => theme.media.mobile`
      width: 100%;
  `}
`
