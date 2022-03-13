import styled from '@emotion/styled'

export const Container = styled.div`
  width: 416px;
  height: 560px;
  border-radius: 24px;
  align-items: flex-end;
  text-align: left;
  display: flex;
  border: 1px solid ${({ theme }) => theme.grayScale[1]};
  margin: 0 8px;
  padding: 56px 32px;

  ${({ theme }) => theme.media.md`
     padding: 64px; 
       width: 100%;
  `}

  ${({ theme }) => theme.media.sm`
    width: 100%;
    margin: 16px auto;
  `}
  
  ${({ theme }) => theme.media.mobile`
      width: 100%;
      margin: 16px auto;
  `}
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const Details = styled.p`
  color: ${({ theme }) => theme.grayScale[4]};
  font-size: ${({ theme }) => theme.fontSize.xs};
`

export const Title = styled.h4`
  color: ${({ theme }) => theme.grayScale[4]};
  font-size: ${({ theme }) => theme.fontSize.xl};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`
