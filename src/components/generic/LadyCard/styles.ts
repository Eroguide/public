import styled from '@emotion/styled'

export const Container = styled.div`
  width: calc((100% / 6) - 10px);
  margin: 5px;
  ${({ theme }) => theme.media.mobile`
     width: calc((100% / 3) - 10px);
  `}
`

export const Wrapper = styled.div`
  width: 100%;
`

export const CardImage = styled.div`
  width: 78px;
  height: 78px;
  overflow: hidden;
  border-radius: 16px;
  background: gray url('/img/bg.jpg') no-repeat center center;
  background-size: cover;
  position: relative;
`

export const Tag = styled.span`
  width: 50%;
  position: absolute;
  left: 0;
  top: 0;
  height: 19px;
  overflow: hidden;
  border-bottom-right-radius: 32px;
  background-size: cover;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.primary[0]};
`
