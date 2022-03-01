import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 24px;
  overflow: hidden;
  background: gray url('/img/map.jpg') no-repeat center center;
  background-size: cover;
`

export const ButtonMap = styled.a`
  color: ${({ theme }) => theme.grayScale[0]};
  background-color: ${({ theme }) => theme.primary[0]};
  height: 48px;
  border-radius: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 12px 32px;
  font-size: ${({ theme }) => theme.fontSize['s']};
`
