import styled from '@emotion/styled'

export const Container = styled.div`
  width: 20%;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;

  ${({ theme }) => theme.media.mobile`
      width: 100%;
  `}
`

export const Wrapper = styled.ul`
  width: 100%;
  height: 100%;
`
