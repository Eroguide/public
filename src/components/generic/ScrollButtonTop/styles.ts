import styled from '@emotion/styled'

export const ButtonScrollTop = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 64px;
  cursor: pointer;
  background: ${({ theme }) => theme.primary[0]};
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 999;
  box-shadow: 0 7px 10px -5px rgba(255, 0, 93, 0.6);
`
