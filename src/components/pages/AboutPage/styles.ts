import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  justify-content: center;
  max-width: 848px;
  margin: 8px auto;
  ${({ theme }) => theme.media.sm`
   flex-direction: column;
     max-width: 100%;
  `}
  ${({ theme }) => theme.media.mobile`
  
     max-width: 100%;
    flex-direction: column;
  `}
`
