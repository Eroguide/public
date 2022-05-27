import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Wrapper = styled.div<{ isReady: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 24px;
  overflow: hidden;
  background-size: cover;
  opacity: ${({ isReady }) => (isReady ? 1 : 0)};
  position: relative;
`

export const Details = styled.span`
  position: absolute;
  left: -100px;
  padding: 16px 8px;
  background: white;
  border-radius: 8px;
  ${({ theme }) => theme.typography.ps};
  color: ${({ theme }) => theme.grayScale[5]};
  visibility: hidden;
`
