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

export const FormSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  max-width: 438px;
  margin: 200px auto;
  flex-direction: column;
  text-align: center;
  align-items: center;
`

export const FormTitle = styled.h3`
  ${({ theme }) => theme.typography.h3};
  color: ${({ theme }) => theme.grayScale[5]};
  font-weight: 600;
  margin-bottom: 16px;
`

export const FormDescription = styled.p`
  ${({ theme }) => theme.typography.pl};
  color: ${({ theme }) => theme.grayScale[4]};
  max-width: 400px;
`

export const FormInputList = styled.form`
  margin: 80px auto 64px auto;
`
