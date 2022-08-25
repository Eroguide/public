import styled from '@emotion/styled'

export const Container = styled.div`
  max-width: 416px;
  width: 100%;
  min-height: 560px;
  border-radius: 24px;
  align-items: flex-end;
  text-align: left;
  display: flex;
  border: 1px solid ${({ theme }) => theme.grayScale[1]};
  flex-direction: column;
  overflow: hidden;

  ${({ theme }) => theme.media.md`
         max-width: 100%;
          min-height: 360px;
  `}

  ${({ theme }) => theme.media.sm`
   max-width: 100%;
   margin: 16px auto;
    flex-direction: row-reverse;
     min-height: 360px;
  `}
  
  ${({ theme }) => theme.media.mobile`
         max-width: 100%;
      margin: 16px auto;
          min-height: 360px;
  `}
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const Details = styled.p`
  color: ${({ theme }) => theme.grayScale[4]};
  ${({ theme }) => theme.typography.pl};
  max-width: 300px;
`

export const CardImage = styled.div<{ image?: string }>`
  width: 100%;
  height: 362px;
  background: url(${({ image }) => image ?? 'img/mascot/facepalm.jpg'})
    no-repeat center center;
  background-size: cover;
`

export const CardImageWrapper = styled.div`
  width: 100%;
  height: auto;
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.grayScale[4]};
  ${({ theme }) => theme.typography.h3};
  margin-bottom: 24px;
  max-width: 200px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  width: 100%;
  background-color: white;
`
