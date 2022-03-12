import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 60vh;
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.media.mobile`
       flex-direction: column-reverse;
  `}
`

export const Left = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.media.mobile`
         width: 100%;
  `}
`

export const Right = styled.div`
  display: flex;
  width: 50%;
  ${({ theme }) => theme.media.mobile`
     width: 100%;
  `}
`

export const CtaBlock = styled.div`
  max-width: 320px;
  position: relative;
  width: 100%;
  ${({ theme }) => theme.media.mobile`
    max-width: 100%;
  `}
`

export const ImageWrapper = styled.div`
  display: flex;
  border-radius: 24px;
  width: 100%;
  max-width: 411px;
  height: 310px;
  overflow: hidden;
  background: gray url('/img/fake.png') no-repeat center center;
  background-size: cover;
  ${({ theme }) => theme.media.mobile`
    margin-bottom: 32px;
     max-width: 100%;
  `}
`

export const Title = styled.h2`
  margin-bottom: 32px;
`

export const OptionsList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
`

export const OptionItem = styled.li`
  margin-bottom: 16px;
`
