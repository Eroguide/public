import styled from '@emotion/styled'

export const Container = styled.div`
  width: 80%;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  ${({ theme }) => theme.media.md`
      width: 70%;
  `}
  ${({ theme }) => theme.media.sm`
      width: 100%;
  `}
  ${({ theme }) => theme.media.mobile`
      width: 100%;
  `}
`

export const Wrapper = styled.ul`
  width: 100%;
  height: 100%;
`

export const Text = styled.p`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.grayScale[1]};
`
