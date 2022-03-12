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
  max-width: 330px;
  margin: 200px auto;
  flex-direction: column;
  text-align: center;
  align-items: center;
`

export const FormTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize['l']};
  color: ${({ theme }) => theme.grayScale[5]};
  font-weight: 500;
  margin-bottom: 24px;
`

export const FormDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize['xs']};
  color: ${({ theme }) => theme.grayScale[5]};
`

export const FormInputList = styled.form`
  margin: 64px auto;
`
