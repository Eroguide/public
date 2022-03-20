import styled from '@emotion/styled'

export const FormTitleSection = styled.div`
  max-width: 540px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 64px;
  ${({ theme }) => theme.media.mobile`
      width: 100%;
  `}
`

export const FormSection = styled.div`
  max-width: 540px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 64px;
  align-items: center;
  ${({ theme }) => theme.media.mobile`
      width: 100%;
  `}
`
