import styled from '@emotion/styled'

export const ButtonBasic = styled.button`
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
`

export const ButtonLink = styled.a`
  width: 100%;
  height: 100%;
`

export const ButtonShadowLink = styled.a`
  color: ${({ theme }) => theme.grayScale[5]};
  font-weight: 600;
  background-color: ${({ theme }) => theme.grayScale[0]};
  border: 2px solid ${({ theme }) => theme.grayScale[1]};
  height: 40px;
  border-radius: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  font-size: ${({ theme }) => theme.fontSize['s']};
  cursor: pointer;
  text-decoration: none;
`

export const ButtonPrimaryLink = styled.a`
  color: ${({ theme }) => theme.grayScale[0]};
  background-color: ${({ theme }) => theme.primary[0]};
  height: 48px;
  border-radius: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  max-width: 200px;
  cursor: pointer;
  padding: 12px 32px;
  font-size: ${({ theme }) => theme.fontSize['s']};
`

export const ButtonCounter = styled.a`
  display: flex;
  justify-content: space-between;
  height: 40px;
  flex-wrap: nowrap;
  flex-direction: row;
  padding: 8px 16px;
  border: 2px solid ${({ theme }) => theme.grayScale[1]};
  border-radius: 32px;
`

// export const ButtonCta = styled.button`
//   color: ${({ theme }) => theme.grayScale[0]};
//   background-color: ${({ theme }) => theme.primary[0]};
//   height: 40px;
//   border-radius: 28px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: none;
//   padding: 8px 16px;
//   font-size: ${({ theme }) => theme.fontSize['s']};
// `

export const ButtonLined = styled.button`
  color: ${({ theme }) => theme.primary[1]};
  background-color: ${({ theme }) => theme.grayScale[0]};
  border: 2px solid ${({ theme }) => theme.primary[1]};
  height: 40px;
  border-radius: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  font-size: ${({ theme }) => theme.fontSize['s']};
`
