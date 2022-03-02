import styled from '@emotion/styled'

export const ButtonScrollTop = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  cursor: pointer;
  background: ${({ theme }) => theme.primary[0]};
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 50px;
  right: 50px;
  ${({ theme }) => theme.media.mobile`
      width: 100%;
  `}
`
